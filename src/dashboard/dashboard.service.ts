import { Injectable, NotFoundException } from '@nestjs/common';
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
    // --------------------------------------------------
    // LEARNER FILTER
    // --------------------------------------------------
    const learnerWhere: Prisma.LearnerWhereInput = {
      ...(query.schoolIds?.length && {
        schoolId: {
          in: query.schoolIds,
        },
      }),

      ...(query.roleIds?.length && {
        learnerRoleId: {
          in: query.roleIds,
        },
      }),

      ...(query.boards?.length && {
        school: {
          board: {
            in: query.boards,
          },
        },
      }),
    };

    // --------------------------------------------------
    // ENROLLMENT FILTER
    // --------------------------------------------------

    const enrollmentWhere: Prisma.EnrollmentWhereInput = {
      learner: learnerWhere,
    };

    // --------------------------------------------------
    // SUMMARY
    // --------------------------------------------------

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
      // --------------------------------------------
      // TOTAL SCHOOLS
      // --------------------------------------------

      this.prisma.school.count({
        where: {
          isActive: true,

          ...(query.boards?.length && {
            board: {
              in: query.boards,
            },
          }),

          ...(query.schoolIds?.length && {
            id: {
              in: query.schoolIds,
            },
          }),
        },
      }),

      // --------------------------------------------
      // TOTAL LEARNERS
      // --------------------------------------------

      this.prisma.learner.count({
        where: learnerWhere,
      }),

      // --------------------------------------------
      // ACTIVE LEARNERS
      // --------------------------------------------

      this.prisma.learner.count({
        where: {
          ...learnerWhere,

          status: LearnerStatus.ACTIVE,
        },
      }),

      // --------------------------------------------
      // TOTAL COURSES
      // --------------------------------------------

      this.prisma.course.count({
        where: {
          ...(query.status && {
            status: query.status,
          }),

          ...(query.isMandatory !== undefined && {
            isMandatory: query.isMandatory,
          }),
        },
      }),

      // --------------------------------------------
      // PUBLISHED COURSES
      // --------------------------------------------

      this.prisma.course.count({
        where: {
          status: CourseStatus.PUBLISHED,

          ...(query.isMandatory !== undefined && {
            isMandatory: query.isMandatory,
          }),
        },
      }),

      // --------------------------------------------
      // DRAFT COURSES
      // --------------------------------------------

      this.prisma.course.count({
        where: {
          status: CourseStatus.DRAFT,

          ...(query.isMandatory !== undefined && {
            isMandatory: query.isMandatory,
          }),
        },
      }),

      // --------------------------------------------
      // MANDATORY COURSES
      // --------------------------------------------

      this.prisma.course.count({
        where: {
          isMandatory: true,

          ...(query.status && {
            status: query.status,
          }),
        },
      }),

      // --------------------------------------------
      // TOTAL ENROLLMENTS
      // --------------------------------------------

      this.prisma.enrollment.count({
        where: enrollmentWhere,
      }),

      // --------------------------------------------
      // COMPLETED ENROLLMENTS
      // --------------------------------------------

      this.prisma.enrollment.count({
        where: {
          ...enrollmentWhere,

          completedAt: {
            not: null,
          },
        },
      }),

      // --------------------------------------------
      // OVERDUE LEARNERS
      // --------------------------------------------

      this.prisma.enrollment.count({
        where: {
          ...enrollmentWhere,

          completedAt: null,

          dueDate: {
            not: null,
            lt: new Date(),
          },
        },
      }),
    ]);

    // --------------------------------------------------
    // LEARNING COMPLETION
    // --------------------------------------------------

    const learningCompletion =
      totalEnrollments > 0
        ? Math.round((completedEnrollments / totalEnrollments) * 100)
        : 0;

    // --------------------------------------------------
    // OTHER DASHBOARD SECTIONS
    // --------------------------------------------------

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

    // --------------------------------------------------
    // RESPONSE
    // --------------------------------------------------

    const data = {
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
    return {
      message: 'Dashboard retrived successfully',
      data,
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

        learners: {
          some: learnerWhere,
        },
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

    // --------------------------------------------------
    // LEARNER FILTER
    // --------------------------------------------------

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

      // Only learners having at least one overdue enrollment
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

    // --------------------------------------------------
    // TOTAL
    // --------------------------------------------------

    const total = await this.prisma.learner.count({
      where,
    });

    // --------------------------------------------------
    // PROGRESS SORTING
    // --------------------------------------------------
    // Progress is calculated from learner.progress,
    // so we cannot use Prisma orderBy directly.
    // Therefore fetch all matching learners first,
    // calculate progress, sort, then paginate.
    // --------------------------------------------------

    if (query.sortBy === 'progress') {
      const learners = await this.prisma.learner.findMany({
        where,

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
      });

      // --------------------------------------------------
      // CALCULATE DATA
      // --------------------------------------------------

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

      // --------------------------------------------------
      // SORT BY PROGRESS
      // --------------------------------------------------

      data.sort((a, b) => {
        if (query.sortOrder === 'desc') {
          return b.progress - a.progress;
        }

        return a.progress - b.progress;
      });

      // --------------------------------------------------
      // PAGINATION AFTER SORT
      // --------------------------------------------------

      const paginatedData = data.slice(skip, skip + limit);

      const totalPages = Math.ceil(total / limit);

      return {
        message: 'Overdue learners retrieved successfully',

        items: paginatedData,

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

    // --------------------------------------------------
    // NORMAL DATABASE SORTING
    // --------------------------------------------------

    const sortOrder: Prisma.SortOrder = query.sortOrder ?? 'asc';

    let orderBy: Prisma.LearnerOrderByWithRelationInput = {
      name: 'asc',
    };

    switch (query.sortBy) {
      case 'name':
        orderBy = {
          name: sortOrder,
        };
        break;

      case 'role':
        orderBy = {
          learnerRole: {
            name: sortOrder,
          },
        };
        break;

      case 'school':
        orderBy = {
          school: {
            name: sortOrder,
          },
        };
        break;

      case 'department':
        orderBy = {
          department: {
            name: sortOrder,
          },
        };
        break;

      default:
        orderBy = {
          name: 'asc',
        };
    }

    // --------------------------------------------------
    // FETCH LEARNERS
    // --------------------------------------------------

    const learners = await this.prisma.learner.findMany({
      where,

      skip,
      take: limit,

      orderBy,

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
    });

    // --------------------------------------------------
    // RESPONSE DATA
    // --------------------------------------------------

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

    // --------------------------------------------------
    // PAGINATION META
    // --------------------------------------------------

    const totalPages = Math.ceil(total / limit);

    return {
      message: 'Overdue learners retrieved successfully',

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

  async getOverdueLearnerById(learnerId: string) {
    const now = new Date();

    // --------------------------------------------------
    // 1. GET LEARNER
    // --------------------------------------------------

    const learner = await this.prisma.learner.findUnique({
      where: {
        id: learnerId,
      },

      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        employeeId: true,
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
          },
        },

        school: {
          select: {
            id: true,
            name: true,
            code: true,
            board: true,
          },
        },

        // ------------------------------------------------
        // ALL PROGRESS
        // ------------------------------------------------

        progress: {
          select: {
            percentage: true,

            lesson: {
              select: {
                moduleId: true,

                module: {
                  select: {
                    courseId: true,
                  },
                },
              },
            },
          },
        },

        // ------------------------------------------------
        // OVERDUE ENROLLMENTS
        // ------------------------------------------------

        enrollments: {
          where: {
            completedAt: null,

            dueDate: {
              not: null,
              lt: now,
            },
          },

          orderBy: {
            dueDate: 'asc',
          },

          select: {
            id: true,
            courseId: true,
            enrolledAt: true,
            completedAt: true,
            dueDate: true,

            course: {
              select: {
                id: true,
                title: true,

                categories: {
                  select: {
                    category: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    // --------------------------------------------------
    // 2. VALIDATE LEARNER
    // --------------------------------------------------

    if (!learner) {
      throw new NotFoundException('Learner not found');
    }

    // --------------------------------------------------
    // 3. VALIDATE OVERDUE COURSES
    // --------------------------------------------------

    if (learner.enrollments.length === 0) {
      throw new NotFoundException('No overdue courses found for this learner');
    }

    const overdueCourseIds = learner.enrollments.map(
      (enrollment) => enrollment.courseId,
    );

    // --------------------------------------------------
    // 4. GET QUIZ ATTEMPTS FOR OVERDUE COURSES
    // --------------------------------------------------

    const quizAttempts = await this.prisma.quizAttempt.findMany({
      where: {
        learnerId: learnerId,

        completed: true,

        score: {
          not: null,
        },

        quiz: {
          courseId: {
            in: overdueCourseIds,
          },
        },
      },

      orderBy: {
        completedAt: 'desc',
      },

      select: {
        id: true,
        score: true,
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
    });

    // --------------------------------------------------
    // 5. CALCULATE COURSE DETAILS
    // --------------------------------------------------

    const courses = learner.enrollments.map((enrollment) => {
      // ----------------------------------------------
      // COURSE PROGRESS
      // ----------------------------------------------

      const courseProgress = learner.progress.filter(
        (progress) => progress.lesson.module.courseId === enrollment.courseId,
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

      // ----------------------------------------------
      // QUIZ ATTEMPT
      // ----------------------------------------------

      const attempt = quizAttempts.find(
        (item) => item.quiz.courseId === enrollment.courseId,
      );

      let assessmentScore: number | null = null;
      let assessmentScorePercentage: number | null = null;

      if (attempt?.score !== null && attempt?.score !== undefined) {
        assessmentScore = Number(attempt.score);

        const totalMarks = attempt.quiz.questions.reduce(
          (sum, question) => sum + Number(question.marks ?? 0),
          0,
        );

        if (totalMarks > 0) {
          assessmentScorePercentage = Math.round(
            (assessmentScore / totalMarks) * 100,
          );
        }
      }

      // ----------------------------------------------
      // DAYS OVERDUE
      // ----------------------------------------------

      const daysOverdue = enrollment.dueDate
        ? Math.max(
            0,
            Math.floor(
              (now.getTime() - enrollment.dueDate.getTime()) /
                (1000 * 60 * 60 * 24),
            ),
          )
        : 0;

      return {
        enrollmentId: enrollment.id,

        courseId: enrollment.courseId,

        course: enrollment.course.title,

        learningCategory:
          enrollment.course.categories[0]?.category.name ?? null,

        dueDate: enrollment.dueDate,

        daysOverdue,

        status: 'OVERDUE',

        progress,

        assessmentScore,

        assessmentScorePercentage,
      };
    });

    // --------------------------------------------------
    // 6. OVERALL PROGRESS
    // --------------------------------------------------

    const overallProgress =
      learner.progress.length > 0
        ? Math.round(
            learner.progress.reduce(
              (sum, item) => sum + Number(item.percentage ?? 0),
              0,
            ) / learner.progress.length,
          )
        : 0;

    // --------------------------------------------------
    // 7. OVERALL ASSESSMENT
    // --------------------------------------------------

    const assessments = courses.filter(
      (course) =>
        course.assessmentScore !== null &&
        course.assessmentScorePercentage !== null,
    );

    let overallAssessmentScore: number | null = null;
    let overallAssessmentScorePercentage: number | null = null;

    if (assessments.length > 0) {
      const totalScore = assessments.reduce(
        (sum, course) => sum + Number(course.assessmentScore ?? 0),
        0,
      );

      const totalPercentage = assessments.reduce(
        (sum, course) => sum + Number(course.assessmentScorePercentage ?? 0),
        0,
      );

      overallAssessmentScore =
        Math.round((totalScore / assessments.length) * 10) / 10;

      overallAssessmentScorePercentage = Math.round(
        totalPercentage / assessments.length,
      );
    }

    // --------------------------------------------------
    // 8. FINAL RESPONSE
    // --------------------------------------------------

    const data = {
      id: learner.id,

      name: learner.name,

      email: learner.email,

      phone: learner.phone,

      employeeId: learner.employeeId,

      status: 'OVERDUE',

      role: learner.learnerRole
        ? {
            id: learner.learnerRole.id,
            name: learner.learnerRole.name,
            code: learner.learnerRole.code,
          }
        : null,

      department: learner.department
        ? {
            id: learner.department.id,
            name: learner.department.name,
          }
        : null,

      school: learner.school
        ? {
            id: learner.school.id,
            name: learner.school.name,
            code: learner.school.code,
            board: learner.school.board,
          }
        : null,

      overallProgress,

      overallAssessmentScore,

      overallAssessmentScorePercentage,

      overdueCourseCount: courses.length,

      overdueCourses: courses,
    };
    return {
      message: 'Overdue learner retrived successfully',
      data,
    };
  }
}
