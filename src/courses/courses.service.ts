import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CourseStatus, Prisma } from '../generated/prisma/client';

import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCourseDto, userId: string, schoolId: string) {
    if (!schoolId) {
      throw new ConflictException('User is not associated with a school');
    }

    const category = await this.prisma.category.findUnique({
      where: {
        id: dto.categoryId,
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    // Validate learner types
    const learnerTypeIds = dto.targetRoles ?? [];

    if (learnerTypeIds.length > 0) {
      const learnerTypes = await this.prisma.learnerType.findMany({
        where: {
          id: {
            in: learnerTypeIds,
          },
          schoolId,
          isActive: true,
        },
        select: {
          id: true,
          name: true,
        },
      });

      if (learnerTypes.length !== learnerTypeIds.length) {
        throw new NotFoundException(
          'One or more learner types are invalid or do not belong to this school',
        );
      }
    }

    const course = await this.prisma.course.create({
      data: {
        title: dto.title,
        description: dto.description,
        categoryId: dto.categoryId,
        durationMinutes: dto.durationMinutes,

        dueDate: dto.dueDate ? new Date(dto.dueDate) : null,

        isMandatory: dto.isMandatory ?? false,

        board: dto.board,

        thumbnail: dto.thumbnail,

        status: dto.status,

        schoolId,
        createdById: userId,

        // Create CourseTargetRole records
        targetRoles: {
          create: learnerTypeIds.map((learnerTypeId) => ({
            learnerTypeId,
          })),
        },
      },

      select: {
        id: true,
        title: true,
        description: true,
        thumbnail: true,
        categoryId: true,
        durationMinutes: true,

        targetRoles: {
          select: {
            learnerType: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },
          },
        },

        dueDate: true,
        isMandatory: true,
        board: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return course;
  }

  async findAll(schoolId: string, paginationDto: PaginationDto) {
    if (!schoolId) {
      throw new ConflictException('User is not associated with a school');
    }

    const page = paginationDto.page ?? 1;
    const limit = paginationDto.limit ?? 10;

    const skip = (page - 1) * limit;

    const where = {
      schoolId,
    };

    const [
      courses,
      totalCourses,
      publishedCourses,
      draftCourses,
      mandatoryCourses,
    ] = await this.prisma.$transaction([
      this.prisma.course.findMany({
        where,
        select: this.courseSelect,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),

      this.prisma.course.count({
        where,
      }),

      this.prisma.course.count({
        where: {
          schoolId,
          status: 'PUBLISHED',
        },
      }),

      this.prisma.course.count({
        where: {
          schoolId,
          status: 'DRAFT',
        },
      }),

      this.prisma.course.count({
        where: {
          schoolId,
          isMandatory: true,
        },
      }),
    ]);

    const totalPages = Math.ceil(totalCourses / limit);

    const items = await Promise.all(
      courses.map(async (course) => {
        const completedLearners = await this.prisma.enrollment.count({
          where: {
            courseId: course.id,
            completedAt: {
              not: null,
            },
          },
        });

        const totalLearners = course._count.enrollments;

        const completionProgress =
          totalLearners > 0
            ? Math.round((completedLearners / totalLearners) * 100)
            : 0;

        return {
          ...course,

          targetRoles: course.targetRoles.map(
            (targetRole) => targetRole.learnerType,
          ),

          moduleCount: course._count.modules,

          completionProgress,

          _count: undefined,
        };
      }),
    );

    return {
      summary: {
        totalCourses: totalCourses,
        publishedCourses: publishedCourses,
        draftCourses: draftCourses,
        mandatoryCourses: mandatoryCourses,
      },

      items,

      meta: {
        page,
        limit,
        total: totalCourses,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  async findById(id: string, schoolId: string) {
    if (!schoolId) {
      throw new ConflictException('User is not associated with a school');
    }

    const course = await this.prisma.course.findFirst({
      where: {
        id,
        schoolId,
      },
      select: this.courseDetailSelect,
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return {
      ...course,

      assignedLearners: course._count.enrollments,

      modules: course.modules.map((module) => ({
        ...module,

        lessons: module.lessons.map((lesson) => ({
          ...lesson,

          files: lesson.files.map((file) => ({
            ...file,

            fileSize: file.fileSize !== null ? Number(file.fileSize) : null,
          })),
        })),
      })),
    };
  }

  async update(id: string, dto: UpdateCourseDto, schoolId: string) {
    const course = await this.prisma.course.findFirst({
      where: {
        id,
        schoolId,
      },
      select: {
        id: true,
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    // Validate category if it is being changed
    if (dto.categoryId !== undefined) {
      const category = await this.prisma.category.findUnique({
        where: {
          id: dto.categoryId,
        },
        select: {
          id: true,
        },
      });

      if (!category) {
        throw new NotFoundException('Category not found');
      }
    }

    // Validate learner types if they are being changed
    if (dto.targetRoles !== undefined) {
      const learnerTypeIds = dto.targetRoles;

      if (learnerTypeIds.length > 0) {
        const learnerTypes = await this.prisma.learnerType.findMany({
          where: {
            id: {
              in: learnerTypeIds,
            },
            schoolId,
            isActive: true,
          },
          select: {
            id: true,
          },
        });

        if (learnerTypes.length !== learnerTypeIds.length) {
          throw new NotFoundException(
            'One or more learner types are invalid or do not belong to this school',
          );
        }
      }
    }

    return this.prisma.$transaction(async (tx) => {
      // Update normal Course fields
      const updatedCourse = await tx.course.update({
        where: {
          id,
        },
        data: {
          ...(dto.title !== undefined && {
            title: dto.title,
          }),

          ...(dto.description !== undefined && {
            description: dto.description,
          }),

          ...(dto.categoryId !== undefined && {
            categoryId: dto.categoryId,
          }),

          ...(dto.durationMinutes !== undefined && {
            durationMinutes: dto.durationMinutes,
          }),

          ...(dto.dueDate !== undefined && {
            dueDate: dto.dueDate ? new Date(dto.dueDate) : null,
          }),

          ...(dto.isMandatory !== undefined && {
            isMandatory: dto.isMandatory,
          }),

          ...(dto.board !== undefined && {
            board: dto.board,
          }),

          ...(dto.thumbnail !== undefined && {
            thumbnail: dto.thumbnail,
          }),

          ...(dto.status !== undefined && {
            status: dto.status,
          }),
        },

        select: {
          id: true,
          title: true,
          description: true,
          thumbnail: true,
          categoryId: true,
          durationMinutes: true,

          dueDate: true,
          isMandatory: true,
          board: true,

          status: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      // Update target roles
      if (dto.targetRoles !== undefined) {
        await tx.courseTargetRole.deleteMany({
          where: {
            courseId: id,
          },
        });

        if (dto.targetRoles.length > 0) {
          await tx.courseTargetRole.createMany({
            data: dto.targetRoles.map((learnerTypeId) => ({
              courseId: id,
              learnerTypeId,
            })),
          });
        }
      }

      // Return course with target roles
      return tx.course.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          title: true,
          description: true,
          thumbnail: true,
          categoryId: true,
          durationMinutes: true,

          targetRoles: {
            select: {
              learnerType: {
                select: {
                  id: true,
                  name: true,
                  code: true,
                },
              },
            },
          },

          dueDate: true,
          isMandatory: true,
          board: true,

          status: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    });
  }

  async remove(id: string, schoolId: string) {
    const course = await this.prisma.course.findFirst({
      where: {
        id,
        schoolId,
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    await this.prisma.course.delete({
      where: {
        id,
      },
    });

    return {
      success: true,
      message: 'Course deleted successfully',
    };
  }

  private readonly courseSelect = {
    id: true,
    title: true,
    description: true,
    status: true,
    durationMinutes: true,

    thumbnail: true,

    targetRoles: {
      select: {
        learnerType: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
      },
    },

    dueDate: true,
    isMandatory: true,
    board: true,

    createdAt: true,
    updatedAt: true,

    category: {
      select: {
        id: true,
        name: true,
      },
    },

    _count: {
      select: {
        modules: true,
        enrollments: true,
      },
    },
  };

  private readonly courseDetailSelect = {
    id: true,
    title: true,
    code: true,
    description: true,
    thumbnail: true,

    durationMinutes: true,

    targetRoles: {
      select: {
        learnerType: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
      },
    },
    dueDate: true,
    isMandatory: true,
    board: true,

    status: true,

    createdAt: true,
    updatedAt: true,

    category: {
      select: {
        id: true,
        name: true,
      },
    },

    modules: {
      orderBy: {
        orderIndex: 'asc' as const,
      },

      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        orderIndex: true,
        createdAt: true,
        updatedAt: true,

        lessons: {
          orderBy: {
            position: 'asc' as const,
          },

          select: {
            id: true,
            title: true,
            description: true,
            status: true,
            type: true,
            content: true,
            position: true,
            duration: true,
            isRequired: true,
            createdAt: true,
            updatedAt: true,

            files: {
              orderBy: {
                createdAt: 'asc' as const,
              },

              select: {
                id: true,
                fileName: true,
                fileUrl: true,
                fileType: true,
                fileSize: true,
                mimeType: true,
                createdAt: true,
              },
            },
          },
        },

        _count: {
          select: {
            lessons: true,
          },
        },
      },
    },

    _count: {
      select: {
        modules: true,
        enrollments: true,
      },
    },

    quiz: {
      select: {
        id: true,
        title: true,
        description: true,
        passingScore: true,
        status: true,

        _count: {
          select: {
            questions: true,
          },
        },
      },
    },
  };
}
