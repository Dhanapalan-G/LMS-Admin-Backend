import {
  BadRequestException,
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

  async create(dto: CreateCourseDto, userId: string) {
    const targetRoleIds = dto.targetRoleIds ?? [];
    const categoryIds = dto.categoryIds ?? [];

    // ---------------------------------------------
    // 1. Validate categories
    // ---------------------------------------------
    if (categoryIds.length > 0) {
      const categories = await this.prisma.category.findMany({
        where: {
          id: {
            in: categoryIds,
          },
        },
        select: {
          id: true,
        },
      });

      if (categories.length !== categoryIds.length) {
        throw new NotFoundException('One or more categories were not found');
      }
    }
    // ---------------------------------------------
    // 2. Validate learner roles
    // ---------------------------------------------
    if (targetRoleIds.length > 0) {
      const learnerRoles = await this.prisma.learnerRole.findMany({
        where: {
          id: {
            in: targetRoleIds,
          },
          isActive: true,
        },
        select: {
          id: true,
        },
      });

      if (learnerRoles.length !== targetRoleIds.length) {
        throw new NotFoundException(
          'One or more learner roles were not found or inactive',
        );
      }
    }
    // ---------------------------------------------
    // 3. Create course + assignment
    // ---------------------------------------------
    return await this.prisma.$transaction(async (tx) => {
      const course = await tx.course.create({
        data: {
          title: dto.title,
          description: dto.description,
          durationMinutes: dto.durationMinutes,
          dueDate: dto.dueDate ? new Date(dto.dueDate) : null,
          isMandatory: dto.isMandatory ?? false,
          thumbnail: dto.thumbnail,
          status: dto.status,
          createdById: userId,

          categories: {
            create: categoryIds.map((categoryId) => ({
              categoryId,
            })),
          },
        },

        select: {
          id: true,
          title: true,
          description: true,
          thumbnail: true,
          durationMinutes: true,
          dueDate: true,
          isMandatory: true,
          status: true,
          createdById: true,
          createdAt: true,
          updatedAt: true,

          categories: {
            select: {
              category: {
                select: {
                  id: true,
                  name: true,
                  description: true,
                  status: true,
                },
              },
            },
          },
        },
      });
      // ---------------------------------------------
      // 4. Create course assignment
      // ---------------------------------------------
      if (targetRoleIds.length > 0) {
        await tx.courseAssignment.create({
          data: {
            dueDate: dto.dueDate ? new Date(dto.dueDate) : null,

            status: 'ACTIVE',

            courses: {
              create: {
                courseId: course.id,
              },
            },

            roles: {
              create: targetRoleIds.map((learnerRoleId) => ({
                learnerRoleId,
              })),
            },
          },
        });
      }
      return {
        message: 'Course created successfully',
        data: course,
      };
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const limit = paginationDto.limit ?? 10;

    const skip = (page - 1) * limit;

    const where: Prisma.CourseWhereInput = {};

    const [
      courses,
      totalCourses,
      publishedCourses,
      draftCourses,
      mandatoryCourses,
    ] = await this.prisma.$transaction([
      // ==================================================
      // COURSES
      // ==================================================

      this.prisma.course.findMany({
        where,

        select: {
          id: true,
          title: true,
          code: true,
          description: true,
          status: true,
          durationMinutes: true,
          thumbnail: true,
          dueDate: true,
          isMandatory: true,
          createdAt: true,
          updatedAt: true,

          // ----------------------------------------------
          // Categories
          // ----------------------------------------------

          categories: {
            select: {
              category: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },

          // ----------------------------------------------
          // Course assignments → roles
          // ----------------------------------------------

          assignments: {
            select: {
              assignment: {
                select: {
                  roles: {
                    select: {
                      learnerRole: {
                        select: {
                          id: true,
                          name: true,
                          code: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },

          // ----------------------------------------------
          // Counts
          // ----------------------------------------------

          _count: {
            select: {
              enrollments: true,
              modules: true,
            },
          },
        },

        skip,
        take: limit,

        orderBy: {
          createdAt: 'desc',
        },
      }),

      // ==================================================
      // TOTAL
      // ==================================================

      this.prisma.course.count({
        where,
      }),

      // ==================================================
      // PUBLISHED
      // ==================================================

      this.prisma.course.count({
        where: {
          ...where,
          status: 'PUBLISHED',
        },
      }),

      // ==================================================
      // DRAFT
      // ==================================================

      this.prisma.course.count({
        where: {
          ...where,
          status: 'DRAFT',
        },
      }),

      // ==================================================
      // MANDATORY
      // ==================================================

      this.prisma.course.count({
        where: {
          ...where,
          isMandatory: true,
        },
      }),
    ]);

    const totalPages = Math.ceil(totalCourses / limit);

    // ==================================================
    // FORMAT COURSES
    // ==================================================

    const items = await Promise.all(
      courses.map(async (course) => {
        // ----------------------------------------------
        // Completion
        // ----------------------------------------------

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

        // ----------------------------------------------
        // Roles
        // ----------------------------------------------

        const roles = [
          ...new Map(
            course.assignments
              .flatMap((courseAssignment) => courseAssignment.assignment.roles)
              .map((item) => [item.learnerRole.id, item.learnerRole]),
          ).values(),
        ];

        // ----------------------------------------------
        // Response
        // ----------------------------------------------

        return {
          id: course.id,
          title: course.title,
          code: course.code,
          description: course.description,
          status: course.status,
          durationMinutes: course.durationMinutes,
          thumbnail: course.thumbnail,
          dueDate: course.dueDate,
          isMandatory: course.isMandatory,

          categories: course.categories.map((item) => item.category),

          roles,

          moduleCount: course._count.modules,

          totalLearners,
          completedLearners,
          completionProgress,

          createdAt: course.createdAt,
          updatedAt: course.updatedAt,
        };
      }),
    );

    // ==================================================
    // RESPONSE
    // ==================================================

    const data = {
      summary: {
        totalCourses,
        publishedCourses,
        draftCourses,
        mandatoryCourses,
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
    return {
      message: 'Courses retrived successfully',
      data,
    };
  }

  async findById(id: string) {
    const course = await this.prisma.course.findUnique({
      where: {
        id,
      },
      select: this.courseDetailSelect,
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    // --------------------------------------------
    // Roles
    // --------------------------------------------

    const roles = [
      ...new Map(
        course.assignments
          .flatMap((assignmentCourse) => assignmentCourse.assignment.roles)
          .map((item) => [item.learnerRole.id, item.learnerRole]),
      ).values(),
    ];

    // --------------------------------------------
    // Categories
    // --------------------------------------------

    const categories = course.categories.map((item) => item.category);

    // --------------------------------------------
    // Lesson Count
    // --------------------------------------------

    const lessonCount = course.modules.reduce(
      (total, module) => total + module.lessons.length,
      0,
    );

    // --------------------------------------------
    // Modules
    // --------------------------------------------

    const modules = course.modules.map((module) => ({
      id: module.id,
      title: module.title,
      description: module.description,
      status: module.status,
      orderIndex: module.orderIndex,
      createdAt: module.createdAt,
      updatedAt: module.updatedAt,

      lessonCount: module.lessons.length,

      lessons: module.lessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        description: lesson.description,
        status: lesson.status,
        type: lesson.type,
        content: lesson.content,
        position: lesson.position,
        duration: lesson.duration,
        isRequired: lesson.isRequired,

        quiz: lesson.quiz
          ? {
              id: lesson.quiz.id,
              title: lesson.quiz.title,
              status: lesson.quiz.status,
              passingScore: lesson.quiz.passingScore,
              questionCount: lesson.quiz._count.questions,
              available: lesson.quiz.status === 'PUBLISHED',
            }
          : {
              id: null,
              title: null,
              status: null,
              passingScore: null,
              questionCount: 0,
              available: false,
            },

        files: lesson.files.map((file) => ({
          id: file.id,
          fileName: file.fileName,
          fileUrl: file.fileUrl,
          fileType: file.fileType,
          fileSize: file.fileSize !== null ? Number(file.fileSize) : null,
          mimeType: file.mimeType,
          createdAt: file.createdAt,
        })),

        createdAt: lesson.createdAt,
        updatedAt: lesson.updatedAt,
      })),
    }));

    // --------------------------------------------
    // Response
    // --------------------------------------------

    const data = {
      id: course.id,
      code: course.code,
      title: course.title,
      description: course.description,
      thumbnail: course.thumbnail,
      dueDate: course.dueDate,
      isMandatory: course.isMandatory,
      status: course.status,
      durationMinutes: course.durationMinutes,

      categories,

      roles,

      assignedLearners: course._count.enrollments,

      moduleCount: course._count.modules,

      lessonCount,

      assessment: course.quiz
        ? {
            id: course.quiz.id,
            title: course.quiz.title,
            status: course.quiz.status,
            passingScore: course.quiz.passingScore,
            questionCount: course.quiz._count.questions,
            available: course.quiz.status === 'PUBLISHED',
          }
        : {
            id: null,
            title: null,
            status: null,
            passingScore: null,
            questionCount: 0,
            available: false,
          },

      modules,

      createdAt: course.createdAt,
      updatedAt: course.updatedAt,
    };
    return {
      message: 'Courses retrived successfully',
      data,
    };
  }

  async update(id: string, dto: UpdateCourseDto) {
    // --------------------------------------------
    // 1. Check course exists
    // --------------------------------------------
    const course = await this.prisma.course.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    // --------------------------------------------
    // 2. Validate categories
    // --------------------------------------------
    if (dto.categoryIds !== undefined && dto.categoryIds.length > 0) {
      const categoryCount = await this.prisma.category.count({
        where: {
          id: {
            in: dto.categoryIds,
          },
        },
      });

      if (categoryCount !== dto.categoryIds.length) {
        throw new NotFoundException('One or more categories were not found');
      }
    }

    // --------------------------------------------
    // 3. Validate learner roles
    // --------------------------------------------
    if (dto.targetRoleIds !== undefined && dto.targetRoleIds.length > 0) {
      const learnerRoleCount = await this.prisma.learnerRole.count({
        where: {
          id: {
            in: dto.targetRoleIds,
          },
          isActive: true,
        },
      });

      if (learnerRoleCount !== dto.targetRoleIds.length) {
        throw new NotFoundException(
          'One or more learner roles were not found or inactive',
        );
      }
    }

    return this.prisma.$transaction(async (tx) => {
      // ------------------------------------------
      // 4. Update course
      // ------------------------------------------
      await tx.course.update({
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

          ...(dto.durationMinutes !== undefined && {
            durationMinutes: dto.durationMinutes,
          }),

          ...(dto.dueDate !== undefined && {
            dueDate: dto.dueDate ? new Date(dto.dueDate) : null,
          }),

          ...(dto.isMandatory !== undefined && {
            isMandatory: dto.isMandatory,
          }),

          ...(dto.thumbnail !== undefined && {
            thumbnail: dto.thumbnail,
          }),

          ...(dto.status !== undefined && {
            status: dto.status,
          }),
        },
      });

      // ------------------------------------------
      // 5. Update categories
      // ------------------------------------------
      if (dto.categoryIds !== undefined) {
        await tx.courseCategory.deleteMany({
          where: {
            courseId: id,
          },
        });

        if (dto.categoryIds.length > 0) {
          await tx.courseCategory.createMany({
            data: dto.categoryIds.map((categoryId) => ({
              courseId: id,
              categoryId,
            })),
            skipDuplicates: true,
          });
        }
      }

      // ------------------------------------------
      // 6. Update learner roles
      // ------------------------------------------
      if (dto.targetRoleIds !== undefined) {
        const courseAssignments = await tx.courseAssignmentCourse.findMany({
          where: {
            courseId: id,
          },
          select: {
            assignmentId: true,
          },
        });

        const assignmentIds = courseAssignments.map(
          (item) => item.assignmentId,
        );

        if (assignmentIds.length > 0) {
          // Remove existing learner-role mappings
          await tx.courseAssignmentRole.deleteMany({
            where: {
              assignmentId: {
                in: assignmentIds,
              },
            },
          });

          // Create new learner-role mappings
          if (dto.targetRoleIds.length > 0) {
            const roleMappings = assignmentIds.flatMap((assignmentId) =>
              dto.targetRoleIds!.map((learnerRoleId) => ({
                assignmentId,
                learnerRoleId,
              })),
            );

            await tx.courseAssignmentRole.createMany({
              data: roleMappings,
              skipDuplicates: true,
            });
          }
        }
      }

      // ------------------------------------------
      // 7. Return updated course
      // ------------------------------------------
      const data = await tx.course.findUnique({
        where: {
          id,
        },

        select: {
          id: true,
          title: true,
          description: true,
          thumbnail: true,
          durationMinutes: true,
          dueDate: true,
          isMandatory: true,
          status: true,
          createdAt: true,
          updatedAt: true,

          categories: {
            select: {
              category: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },

          assignments: {
            select: {
              assignment: {
                select: {
                  id: true,
                  status: true,

                  roles: {
                    select: {
                      learnerRole: {
                        select: {
                          id: true,
                          name: true,
                          code: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      return {
        message: 'Courses updated successfully',
        data,
      };
    });
  }

  async remove(id: string) {
    const course = await this.prisma.course.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        _count: {
          select: {
            certificates: true,
          },
        },
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    if (course._count.certificates > 0) {
      throw new BadRequestException(
        'Course cannot be deleted because certificates have already been issued',
      );
    }

    const data = await this.prisma.course.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Course deleted successfully',
      data,
    };
  }

  private readonly courseDetailSelect = {
    id: true,
    code: true,
    title: true,
    description: true,
    thumbnail: true,
    dueDate: true,
    isMandatory: true,
    status: true,
    durationMinutes: true,
    createdAt: true,
    updatedAt: true,

    // --------------------------------------------
    // Categories
    // --------------------------------------------
    categories: {
      select: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    },

    // --------------------------------------------
    // Target Roles
    // Course
    //   -> assignments
    //   -> assignment
    //   -> roles
    //   -> learnerRole
    // --------------------------------------------
    assignments: {
      select: {
        assignment: {
          select: {
            roles: {
              select: {
                learnerRole: {
                  select: {
                    id: true,
                    name: true,
                    code: true,
                  },
                },
              },
            },
          },
        },
      },
    },

    // --------------------------------------------
    // Modules
    // --------------------------------------------
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

        // ------------------------------------------
        // Lessons
        // ------------------------------------------
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

            // ----------------------------------------
            // Lesson Files
            // ----------------------------------------
            files: {
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

            // ----------------------------------------
            // Lesson Quiz
            // ----------------------------------------
            quiz: {
              select: {
                id: true,
                title: true,
                status: true,
                passingScore: true,

                _count: {
                  select: {
                    questions: true,
                  },
                },
              },
            },
          },
        },
      },
    },

    // --------------------------------------------
    // Course Counts
    // --------------------------------------------
    _count: {
      select: {
        enrollments: true,
        modules: true,
      },
    },

    // --------------------------------------------
    // Course Quiz
    // --------------------------------------------
    quiz: {
      select: {
        id: true,
        title: true,
        status: true,
        passingScore: true,

        _count: {
          select: {
            questions: true,
          },
        },
      },
    },
  };
}
