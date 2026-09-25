import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Prisma } from '../generated/prisma/client';
import { UpdateSchoolDto } from './dto/update-school.dto';

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

    const data = await this.prisma.school.create({
      data: {
        name: dto.name,
        code: dto.code,
        board: dto.board,
        isActive: dto.isActive,
      },
      select: {
        id: true,
        name: true,
        code: true,
        board: true,
        isActive: true,
      },
    });
    return {
      message: 'School created successfully',
      data,
    };
  }

  async findAll(
    paginationDto: PaginationDto,
    search?: string,
    board?: string,
    isActive?: boolean,
  ) {
    const page = paginationDto.page ?? 1;
    const limit = paginationDto.limit ?? 10;

    const skip = (page - 1) * limit;

    const where: Prisma.SchoolWhereInput = {
      ...(search && {
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            code: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      }),

      ...(board && {
        board: {
          equals: board,
          mode: 'insensitive',
        },
      }),

      ...(isActive !== undefined && {
        isActive,
      }),
    };

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
          board: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,

          learners: {
            select: {
              id: true,
              status: true,
            },
          },
        },
        skip,
        take: limit,
      }),

      this.prisma.school.count({
        where,
      }),
    ]);

    const schoolIds = schools.map((school) => school.id);

    const enrollments = await this.prisma.enrollment.findMany({
      where: {
        learner: {
          schoolId: {
            in: schoolIds,
          },
        },
      },
      select: {
        completedAt: true,
        learner: {
          select: {
            schoolId: true,
          },
        },
      },
    });

    const enrollmentStats = new Map<
      string,
      {
        total: number;
        completed: number;
      }
    >();

    for (const enrollment of enrollments) {
      const schoolId = enrollment.learner.schoolId;

      const stats = enrollmentStats.get(schoolId) ?? {
        total: 0,
        completed: 0,
      };

      stats.total++;

      if (enrollment.completedAt) {
        stats.completed++;
      }

      enrollmentStats.set(schoolId, stats);
    }

    const items = schools.map((school) => {
      const learnerCount = school.learners.length;

      const activeLearnerCount = school.learners.filter(
        (learner) => learner.status === 'ACTIVE',
      ).length;

      const stats = enrollmentStats.get(school.id) ?? {
        total: 0,
        completed: 0,
      };

      const completionPercentage =
        stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

      return {
        id: school.id,
        name: school.name,
        code: school.code,
        board: school.board,

        learnerCount,
        activeLearnerCount,

        completionPercentage,

        status: school.isActive ? 'ACTIVE' : 'INACTIVE',

        createdAt: school.createdAt,
        updatedAt: school.updatedAt,
      };
    });

    const totalPages = Math.ceil(total / limit);

    return {
      message: 'Schools retrived successfully',
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

  async findById(id: string) {
    const school = await this.prisma.school.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        code: true,
        board: true,
        isActive: true,

        // ------------------------------------------
        // Learners
        // ------------------------------------------
        learners: {
          select: {
            id: true,
            status: true,

            learnerRole: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },

            department: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },

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

        // ------------------------------------------
        // Departments assigned to school
        // ------------------------------------------
        departments: {
          where: {
            department: {
              isActive: true,
            },
          },
          select: {
            department: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },
          },
        },

        // ------------------------------------------
        // Learner roles assigned to school
        // ------------------------------------------
        learnerRoles: {
          where: {
            learnerRole: {
              isActive: true,
            },
          },
          select: {
            learnerRole: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },
          },
        },
      },
    });

    if (!school) {
      throw new NotFoundException('School not found');
    }

    // ------------------------------------------
    // Statistics
    // ------------------------------------------

    const totalLearners = school.learners.length;

    const activeLearners = school.learners.filter(
      (learner) => learner.status === 'ACTIVE',
    ).length;

    const certifiedLearners = school.learners.filter(
      (learner) => learner.certificates.length > 0,
    ).length;

    const totalEnrollments = school.learners.reduce(
      (total, learner) => total + learner.enrollments.length,
      0,
    );

    const completedEnrollments = school.learners.reduce(
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

    const overdueLearners = school.learners.filter((learner) =>
      learner.enrollments.some(
        (enrollment) =>
          enrollment.course.dueDate &&
          enrollment.course.dueDate < new Date() &&
          enrollment.completedAt === null,
      ),
    ).length;

    // ------------------------------------------
    // Assigned learner roles
    // ------------------------------------------

    const assignedRoles = school.learnerRoles.map(
      (mapping) => mapping.learnerRole,
    );

    // ------------------------------------------
    // Assigned departments
    // ------------------------------------------

    const assignedDepartments = school.departments.map(
      (mapping) => mapping.department,
    );

    // ------------------------------------------
    // Response
    // ------------------------------------------

    const data = {
      id: school.id,
      name: school.name,
      code: school.code,
      board: school.board,

      statistics: {
        totalLearners,
        activeLearners,
        completionPercentage,
        certifiedLearners,
        overdueLearners,
      },

      publishingStatus: school.isActive ? 'ACTIVE' : 'INACTIVE',

      assignedRoles,

      assignedDepartments,

      overallCompletion: completionPercentage,
    };
    return {
      message: 'School retrived successfully',
      data,
    };
  }

  async update(id: string, dto: UpdateSchoolDto) {
    const existingSchool = await this.prisma.school.findUnique({
      where: {
        id,
      },
    });

    if (!existingSchool) {
      throw new NotFoundException('School not found');
    }

    // Check duplicate code only when code is being changed
    if (dto.code && dto.code !== existingSchool.code) {
      const schoolWithSameCode = await this.prisma.school.findUnique({
        where: {
          code: dto.code,
        },
      });

      if (schoolWithSameCode) {
        throw new ConflictException('School code already exists');
      }
    }

    const data = await this.prisma.school.update({
      where: {
        id,
      },
      data: {
        ...(dto.name !== undefined && {
          name: dto.name,
        }),

        ...(dto.code !== undefined && {
          code: dto.code,
        }),

        ...(dto.board !== undefined && {
          board: dto.board,
        }),

        ...(dto.isActive !== undefined && {
          isActive: dto.isActive,
        }),
      },
      select: {
        id: true,
        name: true,
        code: true,
        board: true,
        isActive: true,
      },
    });

    return {
      message: 'School updated successfully',
      data,
    };
  }

  async remove(id: string) {
    const existingSchool = await this.prisma.school.findUnique({
      where: {
        id,
      },
    });

    if (!existingSchool) {
      throw new NotFoundException('School not found');
    }

    const data = await this.prisma.school.delete({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        code: true,
        board: true,
        isActive: true,
      },
    });

    return {
      message: 'School deleted successfully',
      data,
    };
  }
}
