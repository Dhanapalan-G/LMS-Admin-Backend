import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class AdminsService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly select = {
    id: true,
    schoolId: true,
    employeeId: true,
    name: true,
    email: true,
    phone: true,
    role: true,
    status: true,
    createdAt: true,
    updatedAt: true,
  };

  async create(dto: CreateAdminDto) {
    const existingEmployee = await this.prisma.adminUser.findUnique({
      where: {
        employeeId: dto.employeeId,
      },
    });

    if (existingEmployee) {
      throw new ConflictException('Employee ID already exists');
    }
    const existingEmail = await this.prisma.adminUser.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (existingEmail) {
      throw new ConflictException('An admin with this email already exists');
    }

    if (dto.phone) {
      const existingPhone = await this.prisma.adminUser.findUnique({
        where: {
          phone: dto.phone,
        },
      });

      if (existingPhone) {
        throw new ConflictException(
          'An admin with this phone number already exists',
        );
      }
    }

    // SUPER_ADMIN should not belong to a school
    if (dto.role === 'SUPER_ADMIN') {
      if (dto.schoolId) {
        throw new ConflictException(
          'SUPER_ADMIN cannot be assigned to a school',
        );
      }
    }

    // ADMIN must belong to a school
    if (dto.role === 'ADMIN') {
      if (!dto.schoolId) {
        throw new ConflictException('schoolId is required for ADMIN');
      }

      const school = await this.prisma.school.findUnique({
        where: {
          id: dto.schoolId,
        },
      });

      if (!school) {
        throw new NotFoundException('School not found');
      }

      if (!school.isActive) {
        throw new ConflictException(
          'Cannot create admin for an inactive school',
        );
      }
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.prisma.adminUser.create({
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        employeeId: dto.employeeId,
        password: hashedPassword,
        role: dto.role,
        schoolId: dto.schoolId ?? null,
      },
      select: this.select,
    });
  }

  async findAll(pagination: PaginationDto) {
    const page = pagination.page ?? 1;
    const limit = pagination.limit ?? 10;

    const skip = (page - 1) * limit;

    const [admins, total] = await this.prisma.$transaction([
      this.prisma.adminUser.findMany({
        skip,
        take: limit,

        orderBy: {
          createdAt: 'desc',
        },

        select: {
          id: true,
          employeeId: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          status: true,
          school: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },
          createdAt: true,
          updatedAt: true,
        },
      }),

      this.prisma.adminUser.count(),
    ]);

    return {
      message: 'Admins retrieved successfully',
      items: admins,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const admin = await this.prisma.adminUser.findUnique({
      where: {
        id,
      },
      select: this.select,
    });
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    return admin;
  }

  async update(id: string, dto: UpdateAdminDto) {
    await this.findOne(id);

    if (dto.email) {
      const existingEmail = await this.prisma.adminUser.findFirst({
        where: {
          email: dto.email,
          NOT: {
            id,
          },
        },
      });

      if (existingEmail) {
        throw new ConflictException('An admin with this email already exists');
      }
    }

    if (dto.phone) {
      const existingPhone = await this.prisma.adminUser.findFirst({
        where: {
          phone: dto.phone,
          NOT: {
            id,
          },
        },
      });

      if (existingPhone) {
        throw new ConflictException(
          'An admin with this phone number already exists',
        );
      }
    }

    const data: any = {
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      employeeId: dto.employeeId,
      role: dto.role,
      schoolId: dto.schoolId,
    };

    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }

    return this.prisma.adminUser.update({
      where: {
        id,
      },
      data,
      select: this.select,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.prisma.adminUser.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Admin deleted successfully',
    };
  }
}
