import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateLearnerRoleDto } from './dto/create-learner-role.dto';
import { UpdateLearnerRoleDto } from './dto/update-learner-role.dto';

import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Prisma } from '../generated/prisma/client';

@Injectable()
export class LearnerRolesService {
  constructor(private readonly prisma: PrismaService) {}

  // ============================================================
  // CREATE
  // ============================================================

  async create(
    dto: CreateLearnerRoleDto,
    user: {
      role: string;
      schoolId: string | null;
    },
  ) {
    const schoolIds = [...new Set(dto.schoolIds ?? [])];

    if (schoolIds.length === 0) {
      throw new ConflictException('At least one school is required');
    }

    // ----------------------------------------------------------
    // 1. Global role code uniqueness
    // ----------------------------------------------------------

    const existing = await this.prisma.learnerRole.findUnique({
      where: {
        code: dto.code,
      },

      select: {
        id: true,
      },
    });

    if (existing) {
      throw new ConflictException('Learner role code already exists');
    }

    // ----------------------------------------------------------
    // 2. ADMIN can only assign own school
    // ----------------------------------------------------------

    if (user.role === 'ADMIN') {
      if (!user.schoolId) {
        throw new ConflictException('Admin is not assigned to a school');
      }

      const invalidSchool = schoolIds.some(
        (schoolId) => schoolId !== user.schoolId,
      );

      if (invalidSchool) {
        throw new ConflictException(
          'You can assign the learner role only to your own school',
        );
      }
    }

    // ----------------------------------------------------------
    // 3. Validate schools
    // ----------------------------------------------------------

    const schools = await this.prisma.school.findMany({
      where: {
        id: {
          in: schoolIds,
        },
        isActive: true,
      },

      select: {
        id: true,
      },
    });

    if (schools.length !== schoolIds.length) {
      throw new NotFoundException(
        'One or more schools were not found or inactive',
      );
    }

    // ----------------------------------------------------------
    // 4. Create learner role + school mappings
    // ----------------------------------------------------------

    return this.prisma.$transaction(async (tx) => {
      const learnerRole = await tx.learnerRole.create({
        data: {
          name: dto.name,
          code: dto.code,
          isActive: dto.isActive ?? true,

          // Create school mappings through the relation
          schoolMappings: {
            create: schoolIds.map((schoolId) => ({
              school: {
                connect: {
                  id: schoolId,
                },
              },
            })),
          },
        },

        select: {
          id: true,
          name: true,
          code: true,
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
        },
      });

      // --------------------------------------------------------
      // 5. Return response
      // --------------------------------------------------------

      return {
        id: learnerRole.id,
        name: learnerRole.name,
        code: learnerRole.code,
        isActive: learnerRole.isActive,

        schools: learnerRole.schoolMappings.map((mapping) => mapping.school),
      };
    });
  }
  // ============================================================
  // FIND ALL
  // ============================================================

  async findAll(
    user: {
      role: string;
      schoolId: string | null;
    },
    paginationDto: PaginationDto,
    search?: string,
    schoolId?: string,
    isActive?: boolean,
  ) {
    const page = paginationDto.page ?? 1;
    const limit = paginationDto.limit ?? 10;

    const selectedSchoolId =
      user.role === 'SUPER_ADMIN' ? schoolId : user.schoolId;

    // ADMIN must always be restricted to JWT school
    if (user.role === 'ADMIN' && !user.schoolId) {
      throw new ConflictException('Admin is not assigned to a school');
    }

    const where: Prisma.LearnerRoleWhereInput = {
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

      ...(selectedSchoolId && {
        schoolMappings: {
          some: {
            schoolId: selectedSchoolId,
          },
        },
      }),
    };

    const [roles, total] = await Promise.all([
      this.prisma.learnerRole.findMany({
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

      this.prisma.learnerRole.count({
        where,
      }),
    ]);
    const totalPages = Math.ceil(total / limit);

    return {
      items: roles.map((role) => ({
        id: role.id,
        name: role.name,
        code: role.code,
        isActive: role.isActive,

        schools: role.schoolMappings.map((mapping) => mapping.school),

        learnersCount: role._count.learners,
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

  // ============================================================
  // FIND ONE
  // ============================================================

  async findOne(id: string) {
    const learnerRole = await this.prisma.learnerRole.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        name: true,
        code: true,
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

    if (!learnerRole) {
      throw new NotFoundException('Learner role not found');
    }

    // ----------------------------------------------------------
    // Statistics
    // ----------------------------------------------------------

    const totalLearners = learnerRole.learners.length;

    const activeLearners = learnerRole.learners.filter(
      (learner) => learner.status === 'ACTIVE',
    ).length;

    const completedLearners = learnerRole.learners.filter((learner) => {
      if (learner.enrollments.length === 0) {
        return false;
      }

      return learner.enrollments.every(
        (enrollment) => enrollment.completedAt !== null,
      );
    }).length;

    const completionPercentage =
      totalLearners > 0
        ? Math.round((completedLearners / totalLearners) * 100)
        : 0;

    const certifiedLearners = learnerRole.learners.filter(
      (learner) => learner.certificates.length > 0,
    ).length;

    const now = new Date();

    const overdueLearners = learnerRole.learners.filter((learner) =>
      learner.enrollments.some(
        (enrollment) =>
          enrollment.course.dueDate &&
          enrollment.course.dueDate < now &&
          enrollment.completedAt === null,
      ),
    ).length;

    return {
      id: learnerRole.id,
      name: learnerRole.name,
      code: learnerRole.code,

      statistics: {
        totalLearners,
        activeLearners,
        completionPercentage,
        certifiedLearners,
        overdueLearners,
      },

      publishingStatus: learnerRole.isActive ? 'ACTIVE' : 'INACTIVE',

      schoolsAssigned: learnerRole.schoolMappings.map(
        (mapping) => mapping.school,
      ),

      overallCompletion: completionPercentage,
    };
  }

  // ============================================================
  // UPDATE
  // ============================================================
  async update(
    id: string,
    dto: UpdateLearnerRoleDto,
    user: {
      role: string;
      schoolId: string | null;
    },
  ) {
    // ----------------------------------------------------------
    // 1. Find existing learner role
    // ----------------------------------------------------------

    const existing = await this.prisma.learnerRole.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        name: true,
        code: true,
        isActive: true,

        schoolMappings: {
          select: {
            schoolId: true,
          },
        },
      },
    });

    if (!existing) {
      throw new NotFoundException('Learner role not found');
    }

    // ----------------------------------------------------------
    // 2. ADMIN authorization
    // ----------------------------------------------------------

    if (user.role === 'ADMIN') {
      if (!user.schoolId) {
        throw new ConflictException('Admin is not assigned to a school');
      }

      const assignedToAdminSchool = existing.schoolMappings.some(
        (mapping) => mapping.schoolId === user.schoolId,
      );

      if (!assignedToAdminSchool) {
        throw new ConflictException(
          'You can update only learner roles assigned to your school',
        );
      }
    }

    // ----------------------------------------------------------
    // 3. Validate code uniqueness
    // ----------------------------------------------------------

    if (dto.code !== undefined && dto.code !== existing.code) {
      const duplicate = await this.prisma.learnerRole.findUnique({
        where: {
          code: dto.code,
        },

        select: {
          id: true,
        },
      });

      if (duplicate) {
        throw new ConflictException('Learner role code already exists');
      }
    }

    // ----------------------------------------------------------
    // 4. Validate schools
    // ----------------------------------------------------------

    let schoolIds: string[] | undefined;

    if (dto.schoolIds !== undefined) {
      schoolIds = [...new Set(dto.schoolIds)];

      if (schoolIds.length === 0) {
        throw new ConflictException('At least one school is required');
      }

      // ADMIN can only assign the role to his own school
      if (user.role === 'ADMIN') {
        if (!user.schoolId) {
          throw new ConflictException('Admin is not assigned to a school');
        }

        const invalidSchool = schoolIds.some(
          (schoolId) => schoolId !== user.schoolId,
        );

        if (invalidSchool) {
          throw new ConflictException(
            'Admin can assign learner roles only to their own school',
          );
        }
      }

      const schools = await this.prisma.school.findMany({
        where: {
          id: {
            in: schoolIds,
          },
          isActive: true,
        },

        select: {
          id: true,
        },
      });

      if (schools.length !== schoolIds.length) {
        throw new NotFoundException(
          'One or more schools were not found or are inactive',
        );
      }
    }

    // ----------------------------------------------------------
    // 5. Update learner role
    // ----------------------------------------------------------

    const updated = await this.prisma.$transaction(async (tx) => {
      const learnerRole = await tx.learnerRole.update({
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

          ...(dto.isActive !== undefined && {
            isActive: dto.isActive,
          }),

          // ------------------------------------------------
          // Replace school mappings
          // ------------------------------------------------
          ...(schoolIds !== undefined && {
            schoolMappings: {
              deleteMany: {},

              create: schoolIds.map((schoolId) => ({
                school: {
                  connect: {
                    id: schoolId,
                  },
                },
              })),
            },
          }),
        },

        select: {
          id: true,
          name: true,
          code: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,

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
        },
      });

      return learnerRole;
    });

    // ----------------------------------------------------------
    // 6. Response
    // ----------------------------------------------------------

    return {
      id: updated.id,
      name: updated.name,
      code: updated.code,
      isActive: updated.isActive,

      schools: updated.schoolMappings.map((mapping) => mapping.school),

      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
    };
  }

  // ============================================================
  // DEACTIVATE
  // ============================================================

  async deactivate(
    id: string,
    user: {
      role: string;
      schoolId: string | null;
    },
  ) {
    const existing = await this.prisma.learnerRole.findUnique({
      where: {
        id,
      },

      select: {
        id: true,

        schoolMappings: {
          select: {
            schoolId: true,
          },
        },
      },
    });

    if (!existing) {
      throw new NotFoundException('Learner role not found');
    }

    // ADMIN can deactivate only a role assigned to own school
    if (user.role === 'ADMIN') {
      if (!user.schoolId) {
        throw new ConflictException('Admin is not assigned to a school');
      }

      const assignedToAdminSchool = existing.schoolMappings.some(
        (mapping) => mapping.schoolId === user.schoolId,
      );

      if (!assignedToAdminSchool) {
        throw new ConflictException(
          'You can deactivate only learner roles assigned to your school',
        );
      }
    }

    return this.prisma.learnerRole.update({
      where: {
        id,
      },

      data: {
        isActive: false,
      },

      select: {
        id: true,
        name: true,
        code: true,
        isActive: true,
      },
    });
  }
}
