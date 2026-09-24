import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Prisma } from '../generated/prisma/client';

@Injectable()
export class DepartmentsService {
  constructor(private readonly prisma: PrismaService) {}

  // =========================================================
  // CREATE
  // =========================================================
  async create(dto: CreateDepartmentDto) {
    const existingDepartment = await this.prisma.department.findFirst({
      where: {
        OR: [{ name: dto.name }, { code: dto.code }],
      },
    });

    if (existingDepartment) {
      throw new ConflictException('Department name or code already exists');
    }

    const schools = await this.prisma.school.findMany({
      where: {
        id: {
          in: dto.schoolIds,
        },
        isActive: true,
      },
      select: {
        id: true,
      },
    });

    if (schools.length !== dto.schoolIds.length) {
      throw new BadRequestException(
        'One or more selected schools are invalid or inactive',
      );
    }

    return this.prisma.$transaction(async (tx) => {
      const department = await tx.department.create({
        data: {
          name: dto.name,
          code: dto.code,
          description: dto.description,
        },
      });

      await tx.schoolDepartment.createMany({
        data: dto.schoolIds.map((schoolId) => ({
          schoolId,
          departmentId: department.id,
        })),
        skipDuplicates: true,
      });

      return tx.department.findUnique({
        where: {
          id: department.id,
        },
        include: {
          schoolMappings: {
            include: {
              school: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });
    });
  }

  // =========================================================
  // GET ALL
  // =========================================================
  async findAll(
    schoolId: string | undefined,
    paginationDto: PaginationDto,
    search?: string,
    isActive?: boolean,
  ) {
    const page = paginationDto.page ?? 1;
    const limit = paginationDto.limit ?? 10;

    const where: Prisma.DepartmentWhereInput = {
      ...(schoolId && {
        schoolMappings: {
          some: {
            schoolId,
          },
        },
      }),

      ...(isActive !== undefined && {
        isActive,
      }),

      ...(search?.trim() && {
        OR: [
          {
            name: {
              contains: search.trim(),
              mode: 'insensitive',
            },
          },
          {
            code: {
              contains: search.trim(),
              mode: 'insensitive',
            },
          },
        ],
      }),
    };

    const [departments, total] = await Promise.all([
      this.prisma.department.findMany({
        where,
        orderBy: {
          name: 'asc',
        },
        skip: (page - 1) * limit,
        take: limit,

        select: {
          id: true,
          name: true,
          code: true,
          description: true,
          isActive: true,

          schoolMappings: {
            select: {
              school: {
                select: {
                  id: true,
                  name: true,
                  code: true,
                },
              },
            },
          },

          _count: {
            select: {
              learners: true,
            },
          },
        },
      }),

      this.prisma.department.count({
        where,
      }),
    ]);
    const totalPages = Math.ceil(total / limit);
    return {
      items: departments.map((department) => ({
        id: department.id,
        name: department.name,
        code: department.code,
        description: department.description,
        isActive: department.isActive,
        learnersCount: department._count.learners,
      })),

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

  // =========================================================
  // GET ONE
  // =========================================================
  async findOne(id: string) {
    try {
      const department = await this.prisma.department.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          code: true,
          description: true,
          isActive: true,

          schoolMappings: {
            select: {
              school: {
                select: {
                  id: true,
                  name: true,
                  code: true,
                },
              },
            },
          },

          learners: {
            select: {
              id: true,
              status: true,

              enrollments: {
                select: {
                  id: true,
                  completedAt: true,

                  course: {
                    select: {
                      id: true,
                      dueDate: true,
                    },
                  },
                },
              },

              certificates: {
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (!department) {
        throw new NotFoundException('Department not found');
      }

      const totalLearners = department.learners.length;

      const activeLearners = department.learners.filter(
        (learner) => learner.status === 'ACTIVE',
      ).length;

      const certifiedLearners = department.learners.filter(
        (learner) => learner.certificates.length > 0,
      ).length;

      const totalEnrollments = department.learners.reduce(
        (total, learner) => total + learner.enrollments.length,
        0,
      );

      const completedEnrollments = department.learners.reduce(
        (total, learner) =>
          total +
          learner.enrollments.filter(
            (enrollment) => enrollment.completedAt !== null,
          ).length,
        0,
      );

      const completionPercentage =
        totalEnrollments > 0
          ? Math.round((completedEnrollments / totalEnrollments) * 100)
          : 0;

      const overdueLearners = department.learners.filter((learner) =>
        learner.enrollments.some(
          (enrollment) =>
            enrollment.course.dueDate &&
            enrollment.course.dueDate < new Date() &&
            enrollment.completedAt === null,
        ),
      ).length;

      return {
        id: department.id,
        name: department.name,
        code: department.code,
        description: department.description,

        statistics: {
          totalLearners,
          activeLearners,
          completionPercentage,
          certifiedLearners,
          overdueLearners,
        },

        publishingStatus: department.isActive ? 'ACTIVE' : 'INACTIVE',

        schoolsAssigned: department.schoolMappings.map((mapping) => ({
          id: mapping.school.id,
          name: mapping.school.name,
          code: mapping.school.code,
        })),

        overallCompletion: completionPercentage,
      };
    } catch (err) {
      console.log('Department findOne error:', err);

      if (err instanceof NotFoundException) {
        throw err;
      }

      throw new InternalServerErrorException('Failed to get department');
    }
  }

  // =========================================================
  // UPDATE
  // =========================================================

  async update(id: string, dto: UpdateDepartmentDto) {
    const department = await this.prisma.department.findUnique({
      where: { id },
    });

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    if (dto.name || dto.code) {
      const existing = await this.prisma.department.findFirst({
        where: {
          OR: [
            dto.name ? { name: dto.name } : undefined,
            dto.code ? { code: dto.code } : undefined,
          ].filter(Boolean) as any,
          NOT: {
            id,
          },
        },
      });

      if (existing) {
        throw new ConflictException('Department name or code already exists');
      }
    }

    return this.prisma.$transaction(async (tx) => {
      const updatedDepartment = await tx.department.update({
        where: { id },
        data: {
          ...(dto.name !== undefined && {
            name: dto.name,
          }),
          ...(dto.code !== undefined && {
            code: dto.code,
          }),
          ...(dto.description !== undefined && {
            description: dto.description,
          }),
        },
      });

      if (dto.schoolIds !== undefined) {
        const schools = await tx.school.findMany({
          where: {
            id: {
              in: dto.schoolIds,
            },
            isActive: true,
          },
          select: {
            id: true,
          },
        });

        if (schools.length !== dto.schoolIds.length) {
          throw new BadRequestException(
            'One or more selected schools are invalid or inactive',
          );
        }

        await tx.schoolDepartment.deleteMany({
          where: {
            departmentId: id,
          },
        });

        await tx.schoolDepartment.createMany({
          data: dto.schoolIds.map((schoolId) => ({
            schoolId,
            departmentId: id,
          })),
          skipDuplicates: true,
        });
      }

      return tx.department.findUnique({
        where: {
          id,
        },
        include: {
          schoolMappings: {
            include: {
              school: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });
    });
  }
  // =========================================================
  // DELETE
  // =========================================================

  async remove(id: string) {
    const department = await this.prisma.department.findUnique({
      where: {
        id,
      },
      select: {
        id: true,

        _count: {
          select: {
            learners: true,
            courseAssignments: true,
          },
        },
      },
    });

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    if (department._count.learners > 0) {
      throw new BadRequestException(
        'Department cannot be deleted because learners are assigned to it',
      );
    }

    if (department._count.courseAssignments > 0) {
      throw new BadRequestException(
        'Department cannot be deleted because it is assigned to courses',
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
