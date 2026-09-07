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

    return this.prisma.course.create({
      data: {
        title: dto.title,
        description: dto.description,
        status: dto.status ?? CourseStatus.DRAFT,
        durationMinutes: dto.durationMinutes,
        schoolId,
        categoryId: dto.categoryId,
        createdById: userId,
      },
    });
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

    const [courses, total] = await this.prisma.$transaction([
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
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      items: courses,
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
  async findById(id: string, schoolId: string) {
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

    return course;
  }

  async update(id: string, dto: UpdateCourseDto, schoolId: string) {
    const course = await this.prisma.course.findFirst({
      where: {
        id,
        schoolId,
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return this.prisma.course.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
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

    category: {
      select: {
        id: true,
        name: true,
      },
    },
  };

  private readonly courseDetailSelect: Prisma.CourseSelect = {
    id: true,
    title: true,
    description: true,
    status: true,
    durationMinutes: true,

    category: {
      select: {
        id: true,
        name: true,
      },
    },

    modules: {
      orderBy: {
        orderIndex: 'asc',
      },
      select: {
        id: true,
        title: true,
        description: true,
        orderIndex: true,
      },
    },

    _count: {
      select: {
        modules: true,
        enrollments: true,
      },
    },
  };
}
