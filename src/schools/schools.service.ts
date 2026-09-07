import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class SchoolsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateSchoolDto) {
    const existingSchool = await this.prisma.school.findUnique({
      where: {
        code: dto.code,
      },
    });

    if (existingSchool) {
      throw new ConflictException('School code already exists');
    }

    return this.prisma.school.create({
      data: {
        name: dto.name,
        code: dto.code,
      },
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const limit = paginationDto.limit ?? 10;

    const skip = (page - 1) * limit;

    const where = {};

    const [schools, total] = await this.prisma.$transaction([
      this.prisma.school.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          name: true,
          code: true,
        },
        skip,
        take: limit,
      }),

      this.prisma.school.count({
        where,
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      items: schools,
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

  async findById(id: string) {
    const school = await this.prisma.school.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        code: true,
        _count: {
          select: {
            users: true,
            courses: true,
          },
        },
      },
    });

    if (!school) {
      throw new NotFoundException('School not found');
    }

    return school;
  }
}
