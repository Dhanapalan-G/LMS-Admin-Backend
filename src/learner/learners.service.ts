import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { CreateLearnerDto } from './dto/create-learner.dto';
import { UpdateLearnerDto } from './dto/update-learner.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { AdminRole, LearnerStatus } from '../generated/prisma/enums';
import { RejectLearnerDto } from './dto/reject-learner.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma/client';

@Injectable()
export class LearnersService {
  constructor(private readonly prisma: PrismaService) {}

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
     *   schoolId comes from JWT.
     */
    const schoolId = adminRole === 'SUPER_ADMIN' ? dto.schoolId : adminSchoolId;

    if (!schoolId) {
      throw new ConflictException('schoolId is required');
    }

    // --------------------------------------------
    // 1. Check school
    // --------------------------------------------
    const school = await this.prisma.school.findUnique({
      where: {
        id: schoolId,
      },
      select: {
        id: true,
        isActive: true,
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

    // --------------------------------------------
    // 2. Check email
    // --------------------------------------------
    const existingEmail = await this.prisma.learner.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (existingEmail) {
      throw new ConflictException('A learner with this email already exists');
    }

    // --------------------------------------------
    // 3. Check phone
    // --------------------------------------------
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

    // --------------------------------------------
    // 4. Validate learner role
    // --------------------------------------------
    const learnerRole = await this.prisma.learnerRole.findUnique({
      where: {
        id: dto.learnerRoleId,
      },

      select: {
        id: true,
        isActive: true,

        schoolMappings: {
          where: {
            schoolId,
          },

          select: {
            id: true,
          },
        },
      },
    });

    if (!learnerRole) {
      throw new NotFoundException('Learner role not found');
    }

    if (!learnerRole.isActive) {
      throw new ConflictException('Selected learner role is inactive');
    }

    /*
     * LearnerRole is global, but it must be assigned
     * to the selected school before it can be used.
     */
    if (learnerRole.schoolMappings.length === 0) {
      throw new ConflictException(
        'Selected learner role is not assigned to this school',
      );
    }

    // --------------------------------------------
    // 5. Validate department
    // --------------------------------------------
    if (dto.departmentId) {
      const department = await this.prisma.department.findUnique({
        where: {
          id: dto.departmentId,
        },

        select: {
          id: true,
          isActive: true,

          schoolMappings: {
            where: {
              schoolId,
            },

            select: {
              id: true,
            },
          },
        },
      });

      if (!department) {
        throw new NotFoundException('Department not found');
      }

      if (!department.isActive) {
        throw new ConflictException('Selected department is inactive');
      }

      if (department.schoolMappings.length === 0) {
        throw new ConflictException(
          'Selected department is not assigned to this school',
        );
      }
    }

    // --------------------------------------------
    // 6. Hash password
    // --------------------------------------------
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // --------------------------------------------
    // 7. Create learner
    // --------------------------------------------
    const learner = await this.prisma.learner.create({
      data: {
        schoolId,

        name: dto.name,
        email: dto.email,
        phone: dto.phone,

        password: hashedPassword,
        passwordSet: true,

        // Single learner role
        learnerRoleId: dto.learnerRoleId,

        employeeId: dto.employeeId,

        departmentId: dto.departmentId,

        dateOfJoining: dto.dateOfJoining
          ? new Date(dto.dateOfJoining)
          : undefined,

        status: 'ACTIVE',
        approvedAt: new Date(),
        approvedBy: adminRole,
      },

      select: this.select,
    });

    return {
      message: 'Learner created successfully',
      data: learner,
    };
  }

  async findAll(
    adminRole: string,
    adminSchoolId: string | null,
    pagination: PaginationDto,
    search?: string,
    roleId?: string,
    schoolId?: string,
    status?: string,
  ) {
    const page = pagination.page ?? 1;
    const limit = pagination.limit ?? 10;
    const skip = (page - 1) * limit;

    // SUPER_ADMIN can filter by school.
    // ADMIN is restricted to the school from JWT.
    const selectedSchoolId =
      adminRole === 'SUPER_ADMIN' ? schoolId : adminSchoolId;

    const where: Prisma.LearnerWhereInput = {
      ...(selectedSchoolId && {
        schoolId: selectedSchoolId,
      }),

      // --------------------------------------------
      // Filter by learner role
      // --------------------------------------------
      ...(roleId && {
        learnerRoleId: roleId,
      }),

      // --------------------------------------------
      // Filter by status
      // --------------------------------------------
      ...(status && {
        status: status as Prisma.LearnerWhereInput['status'],
      }),

      // --------------------------------------------
      // Search
      // --------------------------------------------
      ...(search?.trim() && {
        OR: [
          {
            name: {
              contains: search.trim(),
              mode: 'insensitive',
            },
          },
          {
            employeeId: {
              contains: search.trim(),
              mode: 'insensitive',
            },
          },
          {
            email: {
              contains: search.trim(),
              mode: 'insensitive',
            },
          },
          {
            department: {
              is: {
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
              },
            },
          },
        ],
      }),
    };

    const [learners, total] = await this.prisma.$transaction([
      this.prisma.learner.findMany({
        where,

        skip,
        take: limit,

        orderBy: {
          createdAt: 'desc',
        },

        select: {
          id: true,
          name: true,
          email: true,
          employeeId: true,
          status: true,

          // ----------------------------------------
          // Department
          // ----------------------------------------
          department: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },

          // ----------------------------------------
          // Single learner role
          // ----------------------------------------
          learnerRole: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },

          // ----------------------------------------
          // School
          // ----------------------------------------
          school: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },

          // ----------------------------------------
          // Progress
          // ----------------------------------------
          progress: {
            select: {
              percentage: true,
              status: true,
              completedAt: true,
            },
          },

          // ----------------------------------------
          // Enrollments
          // ----------------------------------------
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

          // ----------------------------------------
          // Certificates
          // ----------------------------------------
          _count: {
            select: {
              certificates: true,
            },
          },
        },
      }),

      this.prisma.learner.count({
        where,
      }),
    ]);

    const now = new Date();

    const items = learners.map((learner) => {
      // --------------------------------------------
      // Calculate overall progress
      // --------------------------------------------
      const progressRecords = learner.progress;

      const progress =
        progressRecords.length > 0
          ? Math.round(
              progressRecords.reduce((sum, item) => sum + item.percentage, 0) /
                progressRecords.length,
            )
          : 0;

      // --------------------------------------------
      // Check overdue courses
      // --------------------------------------------
      const isOverdue = learner.enrollments.some((enrollment) => {
        const dueDate = enrollment.course.dueDate;

        if (!dueDate) {
          return false;
        }

        // Not completed and due date passed
        if (!enrollment.completedAt) {
          return dueDate < now;
        }

        // Completed after due date
        return enrollment.completedAt > dueDate;
      });

      // --------------------------------------------
      // Completion status
      // --------------------------------------------
      const completionStatus = isOverdue
        ? 'OVERDUE'
        : learner.enrollments.length > 0 &&
            learner.enrollments.every(
              (enrollment) => enrollment.completedAt !== null,
            )
          ? 'COMPLETED'
          : progress > 0
            ? 'IN_PROGRESS'
            : 'NOT_STARTED';

      return {
        id: learner.id,
        name: learner.name,
        employeeId: learner.employeeId,

        department: learner.department
          ? {
              id: learner.department.id,
              name: learner.department.name,
              code: learner.department.code,
            }
          : null,

        // ------------------------------------------
        // Single learner role
        // ------------------------------------------
        role: learner.learnerRole
          ? {
              id: learner.learnerRole.id,
              name: learner.learnerRole.name,
              code: learner.learnerRole.code,
            }
          : null,

        school: {
          id: learner.school.id,
          name: learner.school.name,
          code: learner.school.code,
        },

        progress,

        completionStatus,

        isOverdue,

        certified: learner._count.certificates > 0,

        status: learner.status,
      };
    });
    const totalPages = Math.ceil(total / limit);

    return {
      message: 'Learners retrieved successfully',
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

  async findOne(id: string, adminRole: string, adminSchoolId: string | null) {
    try {
      const where: Prisma.LearnerWhereInput =
        adminRole === 'SUPER_ADMIN'
          ? {
              id,
            }
          : {
              id,
              schoolId: adminSchoolId!,
            };

      const learner = await this.prisma.learner.findFirst({
        where,

        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          employeeId: true,
          dateOfJoining: true,
          status: true,

          // --------------------------------------------
          // Department
          // --------------------------------------------
          department: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },

          // --------------------------------------------
          // Single learner role
          // --------------------------------------------
          learnerRole: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },

          // --------------------------------------------
          // School
          // --------------------------------------------
          school: {
            select: {
              id: true,
              name: true,
              code: true,
              board: true,
            },
          },

          // --------------------------------------------
          // Lesson progress
          // --------------------------------------------
          progress: {
            select: {
              id: true,
              position: true,
              startedAt: true,
              updatedAt: true,

              lesson: {
                select: {
                  id: true,
                  moduleId: true,

                  module: {
                    select: {
                      id: true,
                      courseId: true,
                    },
                  },
                },
              },
            },
          },

          // --------------------------------------------
          // Course enrollments
          // --------------------------------------------
          enrollments: {
            select: {
              id: true,
              completedAt: true,

              course: {
                select: {
                  id: true,
                  title: true,
                  dueDate: true,
                },
              },
            },
          },

          // --------------------------------------------
          // Certificates
          // --------------------------------------------
          certificates: {
            select: {
              id: true,
              courseId: true,
            },
          },

          // --------------------------------------------
          // Completed quiz attempts
          // --------------------------------------------
          quizAttempts: {
            where: {
              completed: true,
            },

            orderBy: {
              completedAt: 'desc',
            },

            select: {
              id: true,
              score: true,
              passed: true,
              completed: true,
              completedAt: true,

              quiz: {
                select: {
                  id: true,
                  courseId: true,

                  questions: {
                    select: {
                      marks: true,
                    },
                  },
                },
              },
            },
          },

          _count: {
            select: {
              certificates: true,
            },
          },
        },
      });

      if (!learner) {
        throw new NotFoundException('Learner not found');
      }

      const now = new Date();

      // ==================================================
      // Course overview
      // ==================================================

      const courses = learner.enrollments.map((enrollment) => {
        const course = enrollment.course;

        // Progress records belonging to this course
        const courseProgressRecords = learner.progress.filter(
          (progress) => progress.lesson.module.courseId === course.id,
        );

        /*
         * Course progress:
         *
         * Completed enrollment = 100%
         * Has lesson progress = 1%
         * No progress = 0%
         *
         * If you later add proper lesson completion tracking,
         * this can be changed to calculate the exact percentage.
         */
        const progressPercentage = enrollment.completedAt
          ? 100
          : courseProgressRecords.length > 0
            ? 1
            : 0;

        // ==================================================
        // Latest assessment for this course
        // ==================================================

        const courseAttempt = learner.quizAttempts.find(
          (attempt) => attempt.quiz.courseId === course.id,
        );

        const totalMarks =
          courseAttempt?.quiz.questions.reduce(
            (sum, question) => sum + question.marks,
            0,
          ) ?? 0;

        let assessmentScore: string | null = null;
        let assessmentScorePercentage: number | null = null;

        if (
          courseAttempt?.score !== null &&
          courseAttempt?.score !== undefined
        ) {
          assessmentScore = `${courseAttempt.score}/${totalMarks}`;

          assessmentScorePercentage =
            totalMarks > 0
              ? Math.round((courseAttempt.score / totalMarks) * 100)
              : 0;
        }

        // ==================================================
        // Course overdue
        // ==================================================

        const isCourseOverdue =
          !!course.dueDate &&
          (enrollment.completedAt
            ? enrollment.completedAt > course.dueDate
            : course.dueDate < now);

        // ==================================================
        // Completion status
        // ==================================================

        let completionStatus: string;

        if (isCourseOverdue) {
          completionStatus = 'OVERDUE';
        } else if (enrollment.completedAt) {
          completionStatus = 'COMPLETED';
        } else if (courseProgressRecords.length > 0) {
          completionStatus = 'IN_PROGRESS';
        } else {
          completionStatus = 'NOT_STARTED';
        }

        // ==================================================
        // Certification
        // ==================================================

        const isCertified = learner.certificates.some(
          (certificate) => certificate.courseId === course.id,
        );

        return {
          id: course.id,
          name: course.title,

          assigned: true,

          completionStatus,

          assessmentScore,

          assessmentScorePercentage,

          progress: progressPercentage,

          certification: isCertified ? 'CERTIFIED' : null,

          dueDate: course.dueDate,

          completedAt: enrollment.completedAt,
        };
      });

      // ==================================================
      // Overall progress
      // ==================================================

      const overallProgress =
        courses.length > 0
          ? Math.round(
              courses.reduce((sum, course) => sum + course.progress, 0) /
                courses.length,
            )
          : 0;

      // ==================================================
      // Overall assessment
      // ==================================================

      let totalAssessmentScore = 0;
      let totalAssessmentMarks = 0;

      for (const attempt of learner.quizAttempts) {
        if (attempt.score !== null && attempt.score !== undefined) {
          const totalMarks = attempt.quiz.questions.reduce(
            (sum, question) => sum + question.marks,
            0,
          );

          totalAssessmentScore += attempt.score;
          totalAssessmentMarks += totalMarks;
        }
      }

      const assessmentScore =
        totalAssessmentMarks > 0
          ? `${totalAssessmentScore}/${totalAssessmentMarks}`
          : null;

      const assessmentScorePercentage =
        totalAssessmentMarks > 0
          ? Math.round((totalAssessmentScore / totalAssessmentMarks) * 100)
          : null;

      // ==================================================
      // Overall overdue
      // ==================================================

      const isOverdue = courses.some(
        (course) => course.completionStatus === 'OVERDUE',
      );

      // ==================================================
      // Response
      // ==================================================

      const data = {
        id: learner.id,

        name: learner.name,
        email: learner.email,
        phone: learner.phone,
        employeeId: learner.employeeId,

        // Single role
        role: learner.learnerRole
          ? {
              id: learner.learnerRole.id,
              name: learner.learnerRole.name,
              code: learner.learnerRole.code,
            }
          : null,

        status: learner.status,

        school: {
          id: learner.school.id,
          name: learner.school.name,
          code: learner.school.code,
          board: learner.school.board,
        },

        department: learner.department
          ? {
              id: learner.department.id,
              name: learner.department.name,
              code: learner.department.code,
            }
          : null,

        dateOfJoining: learner.dateOfJoining,

        overallProgress,

        assessmentScore,

        assessmentScorePercentage,

        certifications: learner._count.certificates,

        isOverdue,

        courses,
      };
      return {
        message: 'Learner retrived successfully',
        data,
      };
    } catch (err) {
      console.error('Error fetching learner:', err);

      if (err instanceof NotFoundException) {
        throw err;
      }

      throw new InternalServerErrorException('Failed to retrieve learner');
    }
  }

  async update(
    id: string,
    dto: UpdateLearnerDto,
    adminRole: string,
    adminSchoolId: string | null,
  ) {
    // --------------------------------------------------
    // 1. Get existing learner
    // --------------------------------------------------
    const existing = await this.prisma.learner.findFirst({
      where:
        adminRole === 'SUPER_ADMIN'
          ? {
              id,
            }
          : {
              id,
              schoolId: adminSchoolId!,
            },

      select: {
        id: true,
        schoolId: true,
        departmentId: true,
        learnerRoleId: true,
      },
    });

    if (!existing) {
      throw new NotFoundException('Learner not found');
    }

    // --------------------------------------------------
    // 2. Determine school
    // --------------------------------------------------
    const schoolId =
      adminRole === 'SUPER_ADMIN'
        ? (dto.schoolId ?? existing.schoolId)
        : existing.schoolId;

    // --------------------------------------------------
    // 3. Check email uniqueness
    // --------------------------------------------------
    if (dto.email) {
      const duplicateEmail = await this.prisma.learner.findFirst({
        where: {
          email: dto.email,
          NOT: {
            id,
          },
        },
        select: {
          id: true,
        },
      });

      if (duplicateEmail) {
        throw new ConflictException('A learner with this email already exists');
      }
    }

    // --------------------------------------------------
    // 4. Check phone uniqueness
    // --------------------------------------------------
    if (dto.phone) {
      const duplicatePhone = await this.prisma.learner.findFirst({
        where: {
          phone: dto.phone,
          NOT: {
            id,
          },
        },
        select: {
          id: true,
        },
      });

      if (duplicatePhone) {
        throw new ConflictException(
          'A learner with this phone number already exists',
        );
      }
    }

    // --------------------------------------------------
    // 5. Validate school
    // --------------------------------------------------
    const school = await this.prisma.school.findUnique({
      where: {
        id: schoolId,
      },
      select: {
        id: true,
        isActive: true,
      },
    });

    if (!school) {
      throw new NotFoundException('School not found');
    }

    if (!school.isActive) {
      throw new ConflictException(
        'Cannot assign learner to an inactive school',
      );
    }

    // --------------------------------------------------
    // 6. Validate learner role
    // --------------------------------------------------
    if (dto.learnerRoleId !== undefined) {
      const learnerRole = await this.prisma.learnerRole.findFirst({
        where: {
          id: dto.learnerRoleId,
          isActive: true,

          schoolMappings: {
            some: {
              schoolId,
            },
          },
        },

        select: {
          id: true,
        },
      });

      if (!learnerRole) {
        throw new ConflictException(
          'Selected learner role is not found, inactive, or not assigned to this school',
        );
      }
    }

    // --------------------------------------------------
    // 7. Validate department
    // --------------------------------------------------
    if (dto.departmentId) {
      const department = await this.prisma.department.findUnique({
        where: {
          id: dto.departmentId,
        },

        select: {
          id: true,
          isActive: true,

          schoolMappings: {
            where: {
              schoolId,
            },

            select: {
              id: true,
            },
          },
        },
      });

      if (!department) {
        throw new NotFoundException('Department not found');
      }

      if (!department.isActive) {
        throw new ConflictException('Selected department is inactive');
      }

      if (department.schoolMappings.length === 0) {
        throw new ConflictException(
          'Selected department is not assigned to this school',
        );
      }
    }

    // --------------------------------------------------
    // 8. Prepare learner update
    // --------------------------------------------------
    const data: Prisma.LearnerUpdateInput = {
      ...(dto.name !== undefined && {
        name: dto.name,
      }),

      ...(dto.email !== undefined && {
        email: dto.email,
      }),

      ...(dto.phone !== undefined && {
        phone: dto.phone,
      }),

      ...(dto.employeeId !== undefined && {
        employeeId: dto.employeeId,
      }),

      school: {
        connect: {
          id: schoolId,
        },
      },
    };

    // --------------------------------------------------
    // Learner role
    // --------------------------------------------------
    if (dto.learnerRoleId !== undefined) {
      data.learnerRole = {
        connect: {
          id: dto.learnerRoleId,
        },
      };
    }

    // --------------------------------------------------
    // Department
    // --------------------------------------------------
    if (dto.departmentId !== undefined) {
      if (dto.departmentId) {
        data.department = {
          connect: {
            id: dto.departmentId,
          },
        };
      } else {
        data.department = {
          disconnect: true,
        };
      }
    }

    // --------------------------------------------------
    // Date of joining
    // --------------------------------------------------
    if (dto.dateOfJoining !== undefined) {
      data.dateOfJoining = dto.dateOfJoining
        ? new Date(dto.dateOfJoining)
        : null;
    }

    // --------------------------------------------------
    // Password
    // --------------------------------------------------
    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
      data.passwordSet = true;
    }

    // --------------------------------------------------
    // 9. Update learner
    // --------------------------------------------------
    const learner = await this.prisma.learner.update({
      where: {
        id,
      },

      data,

      select: this.select,
    });
    return {
      message: 'Learner updated successfully',
      data: learner,
    };
  }

  async remove(id: string, adminRole: string, adminSchoolId: string | null) {
    await this.findOne(id, adminRole, adminSchoolId);

    const data = await await this.prisma.learner.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Learner deleted successfully',
      data,
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
        learnerRoleeId: true,
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
        learnerRoleeId: true,
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

  private readonly select = {
    id: true,
    schoolId: true,
    name: true,
    email: true,
    phone: true,
    passwordSet: true,
    learnerRoleId: true,
    employeeId: true,
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
}
