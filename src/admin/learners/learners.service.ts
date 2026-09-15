import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateLearnerDto } from './dto/create-learner.dto';
import { UpdateLearnerDto } from './dto/update-learner.dto';
import {
  AdminRole,
  LearnerStatus,
  Prisma,
} from '../../generated/prisma/client';
import { RejectLearnerDto } from './dto/reject-learner.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class LearnersService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly select = {
    id: true,
    schoolId: true,
    name: true,
    email: true,
    phone: true,
    passwordSet: true,
    learnerTypeId: true,
    employeeId: true,
    board: true,
    department: true,
    dateOfJoining: true,
    status: true,
    rejectionReason: true,
    rejectedAt: true,
    rejectedBy: true,
    approvedAt: true,
    approvedBy: true,
    createdAt: true,
    updatedAt: true,
  };

  async create(
    dto: CreateLearnerDto,
    adminRole: string,
    adminSchoolId: string | null,
  ) {
    /*
     * Determine school.
     *
     * SUPER_ADMIN:
     *   schoolId comes from request body.
     *
     * ADMIN:
     *   schoolId MUST come from JWT.
     */
    const schoolId = adminRole === 'SUPER_ADMIN' ? dto.schoolId : adminSchoolId;

    if (!schoolId) {
      throw new ConflictException('schoolId is required');
    }

    // Check school
    const school = await this.prisma.school.findUnique({
      where: {
        id: schoolId,
      },
    });

    if (!school) {
      throw new NotFoundException('School not found');
    }

    if (!school.isActive) {
      throw new ConflictException(
        'Cannot create learner for an inactive school',
      );
    }

    // Check email
    const existingEmail = await this.prisma.learner.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (existingEmail) {
      throw new ConflictException('A learner with this email already exists');
    }

    // Check phone
    if (dto.phone) {
      const existingPhone = await this.prisma.learner.findUnique({
        where: {
          phone: dto.phone,
        },
      });

      if (existingPhone) {
        throw new ConflictException(
          'A learner with this phone number already exists',
        );
      }
    }

    /*
     * IMPORTANT:
     * LearnerType is school-specific.
     *
     * We must make sure the selected learnerType
     * belongs to the same school.
     */
    const learnerType = await this.prisma.learnerType.findFirst({
      where: {
        id: dto.learnerTypeId,
        schoolId,
        isActive: true,
      },
    });

    if (!learnerType) {
      throw new NotFoundException('Learner type not found for this school');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const learner = await this.prisma.learner.create({
      data: {
        schoolId,

        name: dto.name,
        email: dto.email,
        phone: dto.phone,

        password: hashedPassword,
        passwordSet: true,

        learnerTypeId: dto.learnerTypeId,

        employeeId: dto.employeeId,
        board: dto.board,
        departmentId: dto.departmentId,

        dateOfJoining: dto.dateOfJoining
          ? new Date(dto.dateOfJoining)
          : undefined,

        /*
         * New learners require approval.
         */
        status: 'ACTIVE',
        approvedAt: new Date(),
        approvedBy: adminRole,
      },

      select: this.select,
    });

    return learner;
  }

  async findAll(
    adminRole: string,
    adminSchoolId: string | null,
    pagination: PaginationDto,
  ) {
    const page = pagination.page ?? 1;
    const limit = pagination.limit ?? 10;

    const skip = (page - 1) * limit;

    const where =
      adminRole === 'SUPER_ADMIN'
        ? {}
        : {
            schoolId: adminSchoolId!,
          };

    const [learners, total] = await this.prisma.$transaction([
      this.prisma.learner.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        select: this.select,
      }),

      this.prisma.learner.count({
        where,
      }),
    ]);

    return {
      message: 'Learners retrieved successfully',
      items: learners,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
  async findOne(id: string, adminRole: string, adminSchoolId: string | null) {
    const where =
      adminRole === 'SUPER_ADMIN'
        ? { id }
        : {
            id,
            schoolId: adminSchoolId!,
          };

    const learner = await this.prisma.learner.findFirst({
      where,
      select: this.select,
    });

    if (!learner) {
      throw new NotFoundException('Learner not found');
    }

    return learner;
  }

  async update(
    id: string,
    dto: UpdateLearnerDto,
    adminRole: string,
    adminSchoolId: string | null,
  ) {
    const existing = await this.findOne(id, adminRole, adminSchoolId);

    /*
     * Determine school.
     *
     * For ADMIN:
     * always keep the existing school.
     *
     * For SUPER_ADMIN:
     * schoolId can be changed if required.
     */
    const schoolId =
      adminRole === 'SUPER_ADMIN'
        ? (dto.schoolId ?? existing.schoolId)
        : existing.schoolId;

    // Check email uniqueness
    if (dto.email) {
      const duplicateEmail = await this.prisma.learner.findFirst({
        where: {
          email: dto.email,
          NOT: {
            id,
          },
        },
      });

      if (duplicateEmail) {
        throw new ConflictException('A learner with this email already exists');
      }
    }

    // Check phone uniqueness
    if (dto.phone) {
      const duplicatePhone = await this.prisma.learner.findFirst({
        where: {
          phone: dto.phone,
          NOT: {
            id,
          },
        },
      });

      if (duplicatePhone) {
        throw new ConflictException(
          'A learner with this phone number already exists',
        );
      }
    }

    // Validate new school
    if (schoolId !== existing.schoolId) {
      const school = await this.prisma.school.findUnique({
        where: {
          id: schoolId,
        },
      });

      if (!school) {
        throw new NotFoundException('School not found');
      }

      if (!school.isActive) {
        throw new ConflictException(
          'Cannot move learner to an inactive school',
        );
      }
    }

    // Validate learner type
    if (dto.learnerTypeId) {
      const learnerType = await this.prisma.learnerType.findFirst({
        where: {
          id: dto.learnerTypeId,
          schoolId,
          isActive: true,
        },
      });

      if (!learnerType) {
        throw new NotFoundException('Learner type not found for this school');
      }
    }

    const data: any = {
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      employeeId: dto.employeeId,
      board: dto.board,
      departmentId: dto.departmentId,
      learnerTypeId: dto.learnerTypeId,
      schoolId,
    };

    if (dto.dateOfJoining) {
      data.dateOfJoining = new Date(dto.dateOfJoining);
    }

    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);

      data.passwordSet = true;
    }

    return this.prisma.learner.update({
      where: {
        id,
      },
      data,
      select: this.select,
    });
  }

  async remove(id: string, adminRole: string, adminSchoolId: string | null) {
    await this.findOne(id, adminRole, adminSchoolId);

    await this.prisma.learner.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Learner deleted successfully',
    };
  }

  async approve(
    learnerId: string,
    adminId: string,
    adminRole: AdminRole,
    adminSchoolId: string | null,
  ) {
    const where: Prisma.LearnerWhereInput = {
      id: learnerId,
    };

    // ADMIN can only approve learners from their own school.
    if (adminRole === AdminRole.ADMIN) {
      if (!adminSchoolId) {
        throw new ForbiddenException('Admin is not assigned to a school');
      }

      where.schoolId = adminSchoolId;
    }

    const learner = await this.prisma.learner.findFirst({
      where,
    });

    if (!learner) {
      throw new NotFoundException('Learner not found');
    }

    if (learner.status === LearnerStatus.ACTIVE) {
      throw new BadRequestException('Learner is already active');
    }

    if (learner.status !== LearnerStatus.PENDING_APPROVAL) {
      throw new BadRequestException(
        `Learner cannot be approved from ${learner.status} status`,
      );
    }

    const updatedLearner = await this.prisma.learner.update({
      where: {
        id: learner.id,
      },
      data: {
        status: LearnerStatus.ACTIVE,
        approvedAt: new Date(),
        approvedBy: adminId,

        // Clear previous rejection information if applicable.
        rejectionReason: null,
        rejectedAt: null,
        rejectedBy: null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        schoolId: true,
        learnerTypeId: true,
        employeeId: true,
        status: true,
        approvedAt: true,
        approvedBy: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return {
      message: 'Learner approved successfully',
      learner: updatedLearner,
    };
  }

  async reject(
    learnerId: string,
    dto: RejectLearnerDto,
    adminId: string,
    adminRole: AdminRole,
    adminSchoolId: string | null,
  ) {
    const where: Prisma.LearnerWhereInput = {
      id: learnerId,
    };

    // ADMIN can only reject learners from their own school.
    if (adminRole === AdminRole.ADMIN) {
      if (!adminSchoolId) {
        throw new ForbiddenException('Admin is not assigned to a school');
      }

      where.schoolId = adminSchoolId;
    }

    const learner = await this.prisma.learner.findFirst({
      where,
    });

    if (!learner) {
      throw new NotFoundException('Learner not found');
    }

    if (learner.status === LearnerStatus.ACTIVE) {
      throw new BadRequestException('Active learner cannot be rejected');
    }

    if (learner.status === LearnerStatus.REJECTED) {
      throw new BadRequestException('Learner is already rejected');
    }

    if (learner.status !== LearnerStatus.PENDING_APPROVAL) {
      throw new BadRequestException(
        `Learner cannot be rejected from ${learner.status} status`,
      );
    }

    const updatedLearner = await this.prisma.learner.update({
      where: {
        id: learner.id,
      },
      data: {
        status: LearnerStatus.REJECTED,
        rejectionReason: dto.reason,
        rejectedAt: new Date(),
        rejectedBy: adminId,

        approvedAt: null,
        approvedBy: null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        schoolId: true,
        learnerTypeId: true,
        employeeId: true,
        status: true,
        rejectionReason: true,
        rejectedAt: true,
        rejectedBy: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return {
      message: 'Learner rejected successfully',
      learner: updatedLearner,
    };
  }
}
