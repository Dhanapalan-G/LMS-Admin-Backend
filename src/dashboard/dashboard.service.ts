import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DashboardQueryDto } from './dto/dashboard-query.dto';
import {
  CourseStatus,
  LearnerStatus,
  Prisma,
} from '../generated/prisma/client';
import { OverdueLearnerQueryDto } from './dto/learner-query.dto';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboard(query: DashboardQueryDto) {
    const learnerWhere: Prisma.LearnerWhereInput = {
      ...(query.schoolId && {
        schoolId: query.schoolId,
      }),

      ...(query.roleId && {
        learnerRoleId: query.roleId,
      }),

      ...(query.board && {
        school: {
          board: query.board,
        },
      }),
    };

    const enrollmentWhere: Prisma.EnrollmentWhereInput = {
      learner: learnerWhere,
    };

    // --------------------------------------------
    // SUMMARY
    // --------------------------------------------

    const [
      totalSchools,
      totalLearners,
      activeLearners,
      totalCourses,
      publishedCourses,
      draftCourses,
      mandatoryCourses,
      totalEnrollments,
      completedEnrollments,
      overdueLearners,
    ] = await Promise.all([
      this.prisma.school.count({
        where: {
          isActive: true,
          ...(query.board && {
            board: query.board,
          }),
          ...(query.schoolId && {
            id: query.schoolId,
          }),
        },
      }),

      this.prisma.learner.count({
        where: learnerWhere,
      }),

      this.prisma.learner.count({
        where: {
          ...learnerWhere,
          status: LearnerStatus.ACTIVE,
        },
      }),

      this.prisma.course.count(),

      this.prisma.course.count({
        where: {
          status: CourseStatus.PUBLISHED,
        },
      }),

      this.prisma.course.count({
        where: {
          status: CourseStatus.DRAFT,
        },
      }),

      this.prisma.course.count({
        where: {
          isMandatory: true,
        },
      }),

      this.prisma.enrollment.count({
        where: enrollmentWhere,
      }),

      this.prisma.enrollment.count({
        where: {
          ...enrollmentWhere,
          completedAt: {
            not: null,
          },
        },
      }),

      this.prisma.enrollment.count({
        where: {
          ...enrollmentWhere,
          completedAt: null,
          dueDate: {
            lt: new Date(),
          },
        },
      }),
    ]);

    const learningCompletion =
      totalEnrollments > 0
        ? Math.round((completedEnrollments / totalEnrollments) * 100)
        : 0;

    // --------------------------------------------
    // CONTINUE WITH OTHER DASHBOARD SECTIONS
    // --------------------------------------------

    const [
      roleWiseCompletion,
      boardWiseCompletion,
      certificationStatus,
      schoolPerformance,
    ] = await Promise.all([
      this.getRoleWiseCompletion(learnerWhere),

      this.getBoardWiseCompletion(learnerWhere),

      this.getCertificationStatus(learnerWhere),

      this.getSchoolPerformance(learnerWhere),
    ]);

    return {
      summary: {
        totalSchools,
        totalLearners,
        activeLearners,
        learningCompletion,

        totalCourses,
        publishedCourses,
        draftCourses,
        mandatoryCourses,

        certifiedLearners: certificationStatus.certified,
        overdueLearners,
      },

      roleWiseCompletion,

      boardWiseCompletion,

      certificationStatus,

      schoolPerformance,
    };
  }

  private async getRoleWiseCompletion(learnerWhere: Prisma.LearnerWhereInput) {
    const roles = await this.prisma.learnerRole.findMany({
      where: {
        learners: {
          some: learnerWhere,
        },
      },
      select: {
        id: true,
        name: true,
        code: true,

        learners: {
          where: learnerWhere,
          select: {
            enrollments: {
              select: {
                completedAt: true,
              },
            },
          },
        },
      },

      orderBy: {
        name: 'asc',
      },
    });

    return roles.map((role) => {
      const enrollments = role.learners.flatMap(
        (learner) => learner.enrollments,
      );

      const total = enrollments.length;

      const completed = enrollments.filter(
        (enrollment) => enrollment.completedAt !== null,
      ).length;

      const completion = total > 0 ? Math.round((completed / total) * 100) : 0;

      return {
        roleId: role.id,
        role: role.name,
        code: role.code,
        completion,
        totalLearners: role.learners.length,
      };
    });
  }

  private async getBoardWiseCompletion(learnerWhere: Prisma.LearnerWhereInput) {
    const learners = await this.prisma.learner.findMany({
      where: learnerWhere,

      select: {
        school: {
          select: {
            board: true,
          },
        },

        enrollments: {
          select: {
            completedAt: true,
          },
        },
      },
    });

    const boardMap = new Map<
      string,
      {
        total: number;
        completed: number;
      }
    >();

    for (const learner of learners) {
      const board = learner.school?.board;

      if (!board) {
        continue;
      }

      if (!boardMap.has(board)) {
        boardMap.set(board, {
          total: 0,
          completed: 0,
        });
      }

      const data = boardMap.get(board)!;

      data.total += learner.enrollments.length;

      data.completed += learner.enrollments.filter(
        (enrollment) => enrollment.completedAt !== null,
      ).length;
    }

    return Array.from(boardMap.entries()).map(([board, data]) => ({
      board,
      completion:
        data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0,
      totalEnrollments: data.total,
    }));
  }

  private async getCertificationStatus(learnerWhere: Prisma.LearnerWhereInput) {
    const learners = await this.prisma.learner.findMany({
      where: learnerWhere,

      select: {
        id: true,

        _count: {
          select: {
            certificates: true,
          },
        },

        enrollments: {
          select: {
            completedAt: true,
          },
        },
      },
    });

    const total = learners.length;

    const certified = learners.filter(
      (learner) => learner._count.certificates > 0,
    ).length;

    const inProgress = learners.filter(
      (learner) =>
        learner._count.certificates === 0 &&
        learner.enrollments.some(
          (enrollment) => enrollment.completedAt === null,
        ),
    ).length;

    const notCertified = total - certified - inProgress;

    return {
      total,
      certified,
      inProgress,
      notCertified,
    };
  }

  private async getSchoolPerformance(learnerWhere: Prisma.LearnerWhereInput) {
    const schools = await this.prisma.school.findMany({
      where: {
        isActive: true,

        ...(learnerWhere.schoolId && {
          id: learnerWhere.schoolId as string,
        }),
      },

      select: {
        id: true,
        name: true,

        learners: {
          where: learnerWhere,

          select: {
            enrollments: {
              select: {
                completedAt: true,
              },
            },
          },
        },
      },

      orderBy: {
        name: 'asc',
      },
    });

    return schools.map((school) => {
      const enrollments = school.learners.flatMap(
        (learner) => learner.enrollments,
      );

      const completed = enrollments.filter(
        (enrollment) => enrollment.completedAt !== null,
      ).length;

      const completion =
        enrollments.length > 0
          ? Math.round((completed / enrollments.length) * 100)
          : 0;

      return {
        schoolId: school.id,
        school: school.name,
        completion,
        totalUsers: school.learners.length,
      };
    });
  }
  async getOverdueLearners(query: OverdueLearnerQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const now = new Date();

    const where: Prisma.LearnerWhereInput = {
      ...(query.search && {
        OR: [
          {
            name: {
              contains: query.search,
              mode: 'insensitive',
            },
          },
          {
            email: {
              contains: query.search,
              mode: 'insensitive',
            },
          },
          {
            employeeId: {
              contains: query.search,
              mode: 'insensitive',
            },
          },
        ],
      }),

      ...(query.roleId && {
        learnerRoleId: query.roleId,
      }),

      ...(query.schoolId && {
        schoolId: query.schoolId,
      }),

      ...(query.departmentId && {
        departmentId: query.departmentId,
      }),

      enrollments: {
        some: {
          completedAt: null,
          dueDate: {
            not: null,
            lt: now,
          },
        },
      },
    };

    const [total, learners] = await Promise.all([
      this.prisma.learner.count({
        where,
      }),

      this.prisma.learner.findMany({
        where,

        skip,
        take: limit,

        orderBy: {
          name: 'asc',
        },

        select: {
          id: true,
          name: true,
          email: true,
          employeeId: true,

          learnerRole: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },

          school: {
            select: {
              id: true,
              name: true,
            },
          },

          department: {
            select: {
              id: true,
              name: true,
            },
          },

          enrollments: {
            where: {
              completedAt: null,
              dueDate: {
                not: null,
                lt: now,
              },
            },

            select: {
              id: true,
              courseId: true,
              dueDate: true,
            },
          },

          progress: {
            select: {
              percentage: true,

              lesson: {
                select: {
                  module: {
                    select: {
                      courseId: true,
                    },
                  },
                },
              },
            },
          },
        },
      }),
    ]);

    const data = learners.map((learner) => {
      const overdueCourses = learner.enrollments;

      const overdueCourseIds = new Set(
        overdueCourses.map((enrollment) => enrollment.courseId),
      );

      const courseProgress = learner.progress.filter((progress) =>
        overdueCourseIds.has(progress.lesson.module.courseId),
      );

      const progress =
        courseProgress.length > 0
          ? Math.round(
              courseProgress.reduce(
                (sum, item) => sum + Number(item.percentage ?? 0),
                0,
              ) / courseProgress.length,
            )
          : 0;

      return {
        id: learner.id,

        name: learner.name,

        email: learner.email,

        employeeId: learner.employeeId,

        role: learner.learnerRole
          ? {
              id: learner.learnerRole.id,
              name: learner.learnerRole.name,
              code: learner.learnerRole.code,
            }
          : null,

        school: learner.school
          ? {
              id: learner.school.id,
              name: learner.school.name,
            }
          : null,

        department: learner.department
          ? {
              id: learner.department.id,
              name: learner.department.name,
            }
          : null,

        status: 'OVERDUE',

        progress,

        overdueCourses: overdueCourses.length,

        dueDates: overdueCourses.map((enrollment) => enrollment.dueDate),
      };
    });
    const totalPages = Math.ceil(total / limit);

    return {
      items: data,

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
}
