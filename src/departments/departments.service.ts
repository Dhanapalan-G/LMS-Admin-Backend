import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(private readonly prisma: PrismaService) {}

  // =========================================================
  // CREATE
  // =========================================================

  async create(schoolId: string, dto: CreateDepartmentDto) {
    // Verify school
    const school = await this.prisma.school.findUnique({
      where: {
        id: schoolId,
      },
      select: {
        id: true,
      },
    });

    if (!school) {
      throw new NotFoundException('School not found');
    }

    // Check duplicate department
    const existing = await this.prisma.department.findUnique({
      where: {
        schoolId_name: {
          schoolId,
          name: dto.name,
        },
      },
    });

    if (existing) {
      throw new BadRequestException(
        'Department already exists for this school',
      );
    }

    return this.prisma.department.create({
      data: {
        schoolId,
        name: dto.name,
        code: dto.code,
        description: dto.description,
      },
      select: {
        id: true,
        schoolId: true,
        name: true,
        code: true,
        description: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  // =========================================================
  // GET ALL
  // =========================================================

  async findAll(schoolId: string) {
    return this.prisma.department.findMany({
      where: {
        schoolId,
        isActive: true,
      },
      orderBy: {
        name: 'asc',
      },
      select: {
        id: true,
        schoolId: true,
        name: true,
        code: true,
        description: true,
        isActive: true,
      },
    });
  }

  // =========================================================
  // GET ONE
  // =========================================================

  async findOne(schoolId: string, id: string) {
    const department = await this.prisma.department.findFirst({
      where: {
        id,
        schoolId,
      },
      select: {
        id: true,
        schoolId: true,
        name: true,
        code: true,
        description: true,
        isActive: true,

        _count: {
          select: {
            learners: true,
          },
        },
      },
    });

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    return department;
  }

  // =========================================================
  // UPDATE
  // =========================================================

  async update(schoolId: string, id: string, dto: UpdateDepartmentDto) {
    const department = await this.prisma.department.findFirst({
      where: {
        id,
        schoolId,
      },
    });

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    // If name is being changed, check duplicate
    if (dto.name && dto.name !== department.name) {
      const existing = await this.prisma.department.findUnique({
        where: {
          schoolId_name: {
            schoolId,
            name: dto.name,
          },
        },
      });

      if (existing) {
        throw new BadRequestException(
          'Department already exists for this school',
        );
      }
    }

    return this.prisma.department.update({
      where: {
        id,
      },
      data: {
        name: dto.name,
        code: dto.code,
        description: dto.description,
      },
      select: {
        id: true,
        schoolId: true,
        name: true,
        code: true,
        description: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  // =========================================================
  // DELETE
  // =========================================================

  async remove(schoolId: string, id: string) {
    const department = await this.prisma.department.findFirst({
      where: {
        id,
        schoolId,
      },
      select: {
        id: true,
        _count: {
          select: {
            learners: true,
          },
        },
      },
    });

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    if (department._count.learners > 0) {
      throw new BadRequestException(
        'Department cannot be deleted because learners or users are assigned to it',
      );
    }

    await this.prisma.department.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Department deleted successfully',
    };
  }
}
