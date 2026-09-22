import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class LessonsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(moduleId: string, dto: CreateLessonDto) {
    // -------------------------------------------------------
    // 1. Verify module exists
    // -------------------------------------------------------

    const module = await this.prisma.courseModule.findFirst({
      where: {
        id: moduleId,
      },

      select: {
        id: true,
      },
    });

    if (!module) {
      throw new NotFoundException(
        'Module not found or you do not have access to this module',
      );
    }

    // -------------------------------------------------------
    // 2. Create lesson + files
    // -------------------------------------------------------

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

    // -------------------------------------------------------
    // 3. Convert BigInt for JSON response
    // -------------------------------------------------------

    return {
      ...lesson,

      files: lesson.files.map((file) => ({
        ...file,

        fileSize: file.fileSize !== null ? Number(file.fileSize) : null,
      })),
    };
  }

  async update(lessonId: string, dto: UpdateLessonDto) {
    // -------------------------------------------------------
    // 1. Verify lesson exists
    // -------------------------------------------------------

    const existingLesson = await this.prisma.lesson.findFirst({
      where: {
        id: lessonId,
      },

      select: {
        id: true,
      },
    });

    if (!existingLesson) {
      throw new NotFoundException(
        'Lesson not found or you do not have access to this lesson',
      );
    }

    // -------------------------------------------------------
    // 2. Separate file operations from lesson data
    // -------------------------------------------------------

    const { filesToAdd, fileIdsToDelete, ...lessonData } = dto;

    // -------------------------------------------------------
    // 3. Update lesson + files in one transaction
    // -------------------------------------------------------

    const lesson = await this.prisma.$transaction(async (tx) => {
      // -----------------------------------------------------
      // Delete selected existing files
      // -----------------------------------------------------

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

      // -----------------------------------------------------
      // Update lesson
      // -----------------------------------------------------

      const updatedLesson = await tx.lesson.update({
        where: {
          id: lessonId,
        },

        data: {
          ...lessonData,

          // -------------------------------------------------
          // Add new files
          // -------------------------------------------------

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

    // -------------------------------------------------------
    // 4. Convert BigInt to number for JSON response
    // -------------------------------------------------------

    return {
      ...lesson,

      files: lesson.files.map((file) => ({
        ...file,

        fileSize: file.fileSize !== null ? Number(file.fileSize) : null,
      })),
    };
  }

  async findAll(moduleId: string, paginationDto: PaginationDto) {
    const { page = 1, limit = 10 } = paginationDto;

    const skip = (page - 1) * limit;

    // -------------------------------------------------------
    // 1. Verify module exists
    // -------------------------------------------------------

    const module = await this.prisma.courseModule.findFirst({
      where: {
        id: moduleId,
      },

      select: {
        id: true,
      },
    });

    if (!module) {
      throw new NotFoundException(
        'Module not found or you do not have access to this module',
      );
    }

    // -------------------------------------------------------
    // 2. Get lessons + total count
    // -------------------------------------------------------

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

    // -------------------------------------------------------
    // 3. Convert BigInt fileSize
    // -------------------------------------------------------

    const items = lessons.map((lesson) => ({
      ...lesson,

      files: lesson.files.map((file) => ({
        ...file,

        fileSize: file.fileSize !== null ? Number(file.fileSize) : null,
      })),
    }));

    // -------------------------------------------------------
    // 4. Pagination
    // -------------------------------------------------------

    const totalPages = Math.ceil(total / limit);

    return {
      items,

      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  async findOne(lessonId: string) {
    const lesson = await this.prisma.lesson.findFirst({
      where: {
        id: lessonId,
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
      throw new NotFoundException(
        'Lesson not found or you do not have access to this lesson',
      );
    }

    return {
      ...lesson,

      files: lesson.files.map((file) => ({
        ...file,

        fileSize: file.fileSize !== null ? Number(file.fileSize) : null,
      })),
    };
  }

  async remove(lessonId: string) {
    // -------------------------------------------------------
    // 1. Verify lesson exists
    // -------------------------------------------------------

    const existingLesson = await this.prisma.lesson.findFirst({
      where: {
        id: lessonId,
      },

      select: {
        id: true,
      },
    });

    if (!existingLesson) {
      throw new NotFoundException(
        'Lesson not found or you do not have access to this lesson',
      );
    }

    // -------------------------------------------------------
    // 2. Delete lesson
    // -------------------------------------------------------

    await this.prisma.lesson.delete({
      where: {
        id: lessonId,
      },
    });

    // -------------------------------------------------------
    // 3. Response
    // -------------------------------------------------------

    return {
      id: lessonId,
    };
  }
}
