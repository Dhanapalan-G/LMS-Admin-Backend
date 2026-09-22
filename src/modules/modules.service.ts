import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class ModulesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(courseId: string, dto: CreateModuleDto) {
    const course = await this.prisma.course.findFirst({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return this.prisma.courseModule.create({
      data: {
        title: dto.title,
        description: dto.description,
        status: dto.status,
        orderIndex: dto.orderIndex,
        courseId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        orderIndex: true,
      },
    });
  }

  async findAll(courseId: string, paginationDto: PaginationDto) {
    const course = await this.prisma.course.findFirst({
      where: {
        id: courseId,
      },
      select: {
        id: true,
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const page = paginationDto.page ?? 1;
    const limit = paginationDto.limit ?? 10;

    const skip = (page - 1) * limit;

    const where = {
      courseId,
    };

    const [modules, total] = await this.prisma.$transaction([
      this.prisma.courseModule.findMany({
        where,
        orderBy: {
          orderIndex: 'asc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          title: true,
          description: true,
          status: true,
          orderIndex: true,
        },
      }),

      this.prisma.courseModule.count({
        where,
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      items: modules,
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

  async update(id: string, dto: UpdateModuleDto) {
    const module = await this.prisma.courseModule.findFirst({
      where: {
        id,
      },
    });

    if (!module) {
      throw new NotFoundException('Module not found');
    }

    return this.prisma.courseModule.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        orderIndex: true,
      },
    });
  }

  async remove(id: string) {
    const module = await this.prisma.courseModule.findFirst({
      where: {
        id,
      },
    });

    if (!module) {
      throw new NotFoundException('Module not found');
    }

    await this.prisma.courseModule.delete({
      where: {
        id,
      },
    });
    return {
      id: module.id,
    };
  }
}
