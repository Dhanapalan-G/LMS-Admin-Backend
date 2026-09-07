import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { CategoryStatus } from '../generated/prisma/enums';
import { isUUID } from 'class-validator';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly categorySelect = {
    id: true,
    name: true,
    description: true,
    status: true,
  };

  async create(createCategoryDto: CreateCategoryDto) {
    const existingCategory = await this.prisma.category.findUnique({
      where: {
        name: createCategoryDto.name,
      },
    });

    if (existingCategory) {
      throw new ConflictException('Category already exists');
    }

    return this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
        description: createCategoryDto.description,
      },
      select: this.categorySelect,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const limit = paginationDto.limit ?? 10;

    const skip = (page - 1) * limit;

    const where = {
      status: CategoryStatus.ACTIVE,
    };

    const [categories, total] = await this.prisma.$transaction([
      this.prisma.category.findMany({
        where,
        select: this.categorySelect,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),

      this.prisma.category.count({
        where,
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      items: categories,
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
  async findOne(id: string) {
    if (!isUUID(id)) {
      throw new NotFoundException('Category not found');
    }
    const category = await this.prisma.category.findUnique({
      where: {
        id,
      },
      select: this.categorySelect,
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id);

    if (updateCategoryDto.name) {
      const existingCategory = await this.prisma.category.findFirst({
        where: {
          name: updateCategoryDto.name,
          NOT: {
            id,
          },
        },
      });

      if (existingCategory) {
        throw new ConflictException('Category already exists');
      }
    }

    return this.prisma.category.update({
      where: {
        id,
      },
      data: {
        ...(updateCategoryDto.name !== undefined && {
          name: updateCategoryDto.name,
        }),
        ...(updateCategoryDto.description !== undefined && {
          description: updateCategoryDto.description,
        }),
      },
      select: this.categorySelect,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.category.update({
      where: {
        id,
      },
      data: {
        status: 'INACTIVE',
      },
      select: this.categorySelect,
    });
  }
}
