import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { PrismaService } from '../prisma/prisma.service';

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

    const lesson = await this.prisma.lesson.create({
      data: {
        moduleId,
        title: dto.title,
        description: dto.description,
        type: dto.type,
        content: dto.content,
        position: dto.position,
        duration: dto.duration,
        isRequired: dto.isRequired ?? true,
      },
      select: {
        id: true,
        moduleId: true,
        title: true,
        description: true,
        type: true,
        content: true,
        position: true,
        duration: true,
        isRequired: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return lesson;
  }

  async findAll(
    courseId: string,
    moduleId: string,
    paginationDto: PaginationDto,
  ) {
    const { page = 1, limit = 10 } = paginationDto;

    const skip = (page - 1) * limit;

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
          type: true,
          content: true,
          position: true,
          duration: true,
          isRequired: true,
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

    return {
      items: lessons,
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
        type: true,
        content: true,
        position: true,
        duration: true,
        isRequired: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    return lesson;
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

    return this.prisma.lesson.update({
      where: {
        id: lessonId,
      },
      data: {
        ...(dto.title !== undefined && {
          title: dto.title,
        }),
        ...(dto.description !== undefined && {
          description: dto.description,
        }),
        ...(dto.type !== undefined && {
          type: dto.type,
        }),
        ...(dto.content !== undefined && {
          content: dto.content,
        }),
        ...(dto.position !== undefined && {
          position: dto.position,
        }),
        ...(dto.duration !== undefined && {
          duration: dto.duration,
        }),
        ...(dto.isRequired !== undefined && {
          isRequired: dto.isRequired,
        }),
      },
      select: {
        id: true,
        moduleId: true,
        title: true,
        description: true,
        type: true,
        content: true,
        position: true,
        duration: true,
        isRequired: true,
        createdAt: true,
        updatedAt: true,
      },
    });
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
