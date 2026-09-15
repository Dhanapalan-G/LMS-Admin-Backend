import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class LessonsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(courseId: string, moduleId: string, dto: CreateLessonDto) {
    const module = await this.prisma.courseModule.findFirst({
      where: {
        id: moduleId,
        courseId,
      },
      select: {
        id: true,
      },
    });

    if (!module) {
      throw new NotFoundException('Module not found');
    }

    const lesson = await this.prisma.$transaction(async (tx) => {
      return tx.lesson.create({
        data: {
          moduleId,
          title: dto.title,
          description: dto.description,
          status: dto.status,
          type: dto.type,
          content: dto.content,
          position: dto.position,
          duration: dto.duration,
          isRequired: dto.isRequired ?? true,

          files: dto.files?.length
            ? {
                create: dto.files.map((file) => ({
                  fileName: file.fileName,
                  fileUrl: file.fileUrl,
                  fileType: file.fileType,
                  fileSize:
                    file.fileSize !== undefined
                      ? BigInt(file.fileSize)
                      : undefined,
                  mimeType: file.mimeType,
                })),
              }
            : undefined,
        },

        select: {
          id: true,
          moduleId: true,
          title: true,
          description: true,
          status: true,
          type: true,
          content: true,
          position: true,
          duration: true,
          isRequired: true,

          files: {
            orderBy: {
              createdAt: 'asc',
            },
            select: {
              id: true,
              lessonId: true,
              fileName: true,
              fileUrl: true,
              fileType: true,
              fileSize: true,
              mimeType: true,
              createdAt: true,
            },
          },

          createdAt: true,
          updatedAt: true,
        },
      });
    });

    return {
      ...lesson,
      files: lesson.files.map((file) => ({
        ...file,
        fileSize: file.fileSize !== null ? Number(file.fileSize) : null,
      })),
    };
  }

  async update(
    courseId: string,
    moduleId: string,
    lessonId: string,
    dto: UpdateLessonDto,
  ) {
    const existingLesson = await this.prisma.lesson.findFirst({
      where: {
        id: lessonId,
        moduleId,
        module: {
          id: moduleId,
          courseId,
        },
      },
      select: {
        id: true,
      },
    });

    if (!existingLesson) {
      throw new NotFoundException('Lesson not found');
    }

    const { filesToAdd, fileIdsToDelete, ...lessonData } = dto;

    const lesson = await this.prisma.$transaction(async (tx) => {
      // Delete selected existing files
      if (fileIdsToDelete?.length) {
        await tx.lessonFile.deleteMany({
          where: {
            id: {
              in: fileIdsToDelete,
            },
            lessonId,
          },
        });
      }

      // Update lesson
      const updatedLesson = await tx.lesson.update({
        where: {
          id: lessonId,
        },
        data: {
          ...lessonData,
          files: filesToAdd?.length
            ? {
                create: filesToAdd.map((file) => ({
                  fileName: file.fileName,
                  fileUrl: file.fileUrl,
                  fileType: file.fileType,
                  fileSize:
                    file.fileSize !== undefined
                      ? BigInt(file.fileSize)
                      : undefined,
                  mimeType: file.mimeType,
                })),
              }
            : undefined,
        },
        select: {
          id: true,
          moduleId: true,
          title: true,
          description: true,
          status: true,
          type: true,
          content: true,
          position: true,
          duration: true,
          isRequired: true,

          files: {
            orderBy: {
              createdAt: 'asc',
            },
            select: {
              id: true,
              lessonId: true,
              fileName: true,
              fileUrl: true,
              fileType: true,
              fileSize: true,
              mimeType: true,
              createdAt: true,
            },
          },

          createdAt: true,
          updatedAt: true,
        },
      });

      return updatedLesson;
    });

    return {
      ...lesson,
      files: lesson.files.map((file) => ({
        ...file,
        fileSize: file.fileSize !== null ? Number(file.fileSize) : null,
      })),
    };
  }

  async findAll(
    courseId: string,
    moduleId: string,
    paginationDto: PaginationDto,
  ) {
    const { page = 1, limit = 10 } = paginationDto;

    const skip = (page - 1) * limit;

    // Verify that the module belongs to the course
    const module = await this.prisma.courseModule.findFirst({
      where: {
        id: moduleId,
        courseId,
      },
      select: {
        id: true,
      },
    });

    if (!module) {
      throw new NotFoundException('Module not found');
    }

    const [lessons, total] = await Promise.all([
      this.prisma.lesson.findMany({
        where: {
          moduleId,
        },

        skip,
        take: limit,

        orderBy: {
          position: 'asc',
        },

        select: {
          id: true,
          moduleId: true,
          title: true,
          description: true,
          status: true,
          type: true,
          content: true,
          position: true,
          duration: true,
          isRequired: true,

          files: {
            orderBy: {
              createdAt: 'asc',
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

          quiz: {
            select: {
              id: true,
              title: true,
              passingScore: true,
              status: true,
            },
          },

          createdAt: true,
          updatedAt: true,
        },
      }),

      this.prisma.lesson.count({
        where: {
          moduleId,
        },
      }),
    ]);

    const items = lessons.map((lesson) => ({
      ...lesson,

      files: lesson.files.map((file) => ({
        ...file,
        fileSize: file.fileSize !== null ? Number(file.fileSize) : null,
      })),
    }));

    return {
      items,

      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(courseId: string, moduleId: string, lessonId: string) {
    const lesson = await this.prisma.lesson.findFirst({
      where: {
        id: lessonId,
        moduleId,
        module: {
          id: moduleId,
          courseId,
        },
      },
      select: {
        id: true,
        moduleId: true,
        title: true,
        description: true,
        status: true,
        type: true,
        content: true,
        position: true,
        duration: true,
        isRequired: true,

        files: {
          orderBy: {
            createdAt: 'asc',
          },
          select: {
            id: true,
            lessonId: true,
            fileName: true,
            fileUrl: true,
            fileType: true,
            fileSize: true,
            mimeType: true,
            createdAt: true,
          },
        },

        quiz: {
          select: {
            id: true,
            title: true,
            description: true,
            passingScore: true,
            status: true,
          },
        },

        createdAt: true,
        updatedAt: true,
      },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    return {
      ...lesson,
      files: lesson.files.map((file) => ({
        ...file,
        fileSize: file.fileSize !== null ? Number(file.fileSize) : null,
      })),
    };
  }

  async remove(courseId: string, moduleId: string, lessonId: string) {
    const existingLesson = await this.prisma.lesson.findFirst({
      where: {
        id: lessonId,
        moduleId,
        module: {
          id: moduleId,
          courseId,
        },
      },
      select: {
        id: true,
      },
    });

    if (!existingLesson) {
      throw new NotFoundException('Lesson not found');
    }

    await this.prisma.lesson.delete({
      where: {
        id: lessonId,
      },
    });

    return {
      id: lessonId,
    };
  }
}
