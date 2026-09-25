import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { ReportQueryDto } from './dto/report-query.dto';
import { Prisma } from '../generated/prisma/client';
import { IndividualUserReportQueryDto } from './dto/Individual-user-report-query.dto';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async getSchoolWiseReport(query: ReportQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 5;

    const skip = (page - 1) * limit;

    const now = new Date();

    // ============================================================
    // SCHOOL FILTER
    // ============================================================

    const schoolWhere = {
      ...(query.schoolIds?.length && {
        id: {
          in: query.schoolIds,
        },
      }),

      ...(query.board && {
        board: query.board,
      }),

      ...(query.search?.trim() && {
        OR: [
          {
            name: {
              contains: query.search.trim(),
              mode: 'insensitive' as const,
            },
          },
          {
            code: {
              contains: query.search.trim(),
              mode: 'insensitive' as const,
            },
          },
        ],
      }),
    };

    // ============================================================
    // GET SCHOOLS
    // ============================================================

    const [schools, total] = await Promise.all([
      this.prisma.school.findMany({
        where: schoolWhere,

        orderBy: {
          name: 'asc',
        },

        skip,

        take: limit,

        select: {
          id: true,
          name: true,
          code: true,
          board: true,

          // ======================================================
          // LEARNERS
          // ======================================================

          learners: {
            where: {
              ...(query.roleIds?.length && {
                learnerRoleId: {
                  in: query.roleIds,
                },
              }),

              ...(query.departmentIds?.length && {
                departmentId: {
                  in: query.departmentIds,
                },
              }),
            },

            select: {
              id: true,

              // ==================================================
              // ENROLLMENTS
              // ==================================================

              enrollments: {
                where: {
                  ...(query.courseIds?.length && {
                    courseId: {
                      in: query.courseIds,
                    },
                  }),

                  ...(query.fromDate && {
                    enrolledAt: {
                      gte: new Date(query.fromDate),
                    },
                  }),

                  ...(query.toDate && {
                    enrolledAt: {
                      lte: new Date(`${query.toDate}T23:59:59.999Z`),
                    },
                  }),

                  ...(query.isMandatory !== undefined && {
                    course: {
                      isMandatory: query.isMandatory,
                    },
                  }),

                  ...(query.categoryIds?.length && {
                    course: {
                      categories: {
                        some: {
                          categoryId: {
                            in: query.categoryIds,
                          },
                        },
                      },
                    },
                  }),
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
                      isMandatory: true,

                      _count: {
                        select: {
                          modules: true,
                        },
                      },
                    },
                  },
                },
              },

              // ==================================================
              // PROGRESS
              // ==================================================

              progress: {
                select: {
                  status: true,
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

              // ==================================================
              // CERTIFICATES
              // ==================================================

              certificates: {
                select: {
                  id: true,
                  courseId: true,
                },
              },

              // ==================================================
              // QUIZ ATTEMPTS
              // ==================================================

              quizAttempts: {
                where: {
                  completed: true,

                  ...(query.fromDate && {
                    completedAt: {
                      gte: new Date(query.fromDate),
                    },
                  }),

                  ...(query.toDate && {
                    completedAt: {
                      lte: new Date(`${query.toDate}T23:59:59.999Z`),
                    },
                  }),
                },

                select: {
                  score: true,
                  completed: true,
                },
              },
            },
          },
        },
      }),

      this.prisma.school.count({
        where: schoolWhere,
      }),
    ]);

    // ============================================================
    // BUILD SCHOOL REPORT
    // ============================================================

    const schoolReports = schools
      .map((school) => {
        let users = school.learners.length;

        let assigned = 0;
        let modulesAssigned = 0;

        let completed = 0;
        let inProgress = 0;
        let notStarted = 0;
        let overdue = 0;

        const quizScores: number[] = [];

        // ========================================================
        // PROCESS LEARNERS
        // ========================================================

        for (const learner of school.learners) {
          // ------------------------------------------------------
          // QUIZ SCORES
          // ------------------------------------------------------

          for (const attempt of learner.quizAttempts) {
            if (attempt.score !== null) {
              quizScores.push(attempt.score);
            }
          }

          // ------------------------------------------------------
          // COURSE ASSIGNMENTS
          // ------------------------------------------------------

          for (const enrollment of learner.enrollments) {
            // ====================================================
            // COURSE PROGRESS
            // ====================================================

            const courseProgress = learner.progress.filter(
              (progress) =>
                progress.lesson.module.courseId === enrollment.courseId,
            );

            // ====================================================
            // COMPLETION STATUS
            // ====================================================

            const isCompleted = enrollment.completedAt !== null;

            const isOverdue =
              !isCompleted &&
              enrollment.dueDate !== null &&
              enrollment.dueDate < now;

            const hasStarted = courseProgress.some(
              (progress) =>
                progress.status === 'IN_PROGRESS' ||
                progress.status === 'COMPLETED' ||
                (progress.percentage ?? 0) > 0,
            );

            let completionStatus:
              'COMPLETED' | 'IN_PROGRESS' | 'NOT_STARTED' | 'OVERDUE';

            if (isCompleted) {
              completionStatus = 'COMPLETED';
            } else if (isOverdue) {
              completionStatus = 'OVERDUE';
            } else if (hasStarted) {
              completionStatus = 'IN_PROGRESS';
            } else {
              completionStatus = 'NOT_STARTED';
            }

            // ====================================================
            // CERTIFICATION STATUS
            // ====================================================

            const isCertified = learner.certificates.some(
              (certificate) => certificate.courseId === enrollment.courseId,
            );

            const certificationStatus = isCertified
              ? 'CERTIFIED'
              : 'NOT_CERTIFIED';

            // ====================================================
            // COMPLETION STATUS FILTER
            // ====================================================

            if (
              query.completionStatuses?.length &&
              !query.completionStatuses.includes(completionStatus)
            ) {
              continue;
            }

            // ====================================================
            // CERTIFICATION STATUS FILTER
            // ====================================================

            if (
              query.certificationStatuses?.length &&
              !query.certificationStatuses.includes(certificationStatus)
            ) {
              continue;
            }

            // ====================================================
            // ASSIGNED
            // ====================================================

            assigned++;

            // ====================================================
            // MODULES ASSIGNED
            // ====================================================

            modulesAssigned += enrollment.course._count.modules;

            // ====================================================
            // STATUS COUNTS
            // ====================================================

            switch (completionStatus) {
              case 'COMPLETED':
                completed++;
                break;

              case 'IN_PROGRESS':
                inProgress++;
                break;

              case 'NOT_STARTED':
                notStarted++;
                break;

              case 'OVERDUE':
                overdue++;
                break;
            }
          }
        }

        // ========================================================
        // REMOVE SCHOOL WHEN NO LEARNING RECORD MATCHES FILTER
        // ========================================================

        if (
          query.completionStatuses?.length ||
          query.certificationStatuses?.length ||
          query.courseIds?.length ||
          query.categoryIds?.length
        ) {
          if (assigned === 0) {
            return null;
          }
        }

        // ========================================================
        // COMPLETION PERCENTAGE
        // ========================================================

        const completionPercentage =
          assigned > 0 ? Math.round((completed / assigned) * 100) : 0;

        // ========================================================
        // AVERAGE QUIZ
        // ========================================================

        const avgQuiz =
          quizScores.length > 0
            ? Math.round(
                quizScores.reduce((sum, score) => sum + score, 0) /
                  quizScores.length,
              )
            : 0;

        // ========================================================
        // RESPONSE
        // ========================================================

        return {
          school: {
            id: school.id,
            name: school.name,
            code: school.code,
            board: school.board,
          },

          users,

          assigned,

          modulesAssigned,

          completed,

          inProgress,

          notStarted,

          overdue,

          avgQuiz,

          completionPercentage,
        };
      })
      .filter(
        (school): school is NonNullable<typeof school> => school !== null,
      );
    // ============================================================
    // SORTING
    // ============================================================

    const allowedSortFields = [
      'name',
      'users',
      'coursesAssigned',
      'completed',
      'inProgress',
      'notStarted',
      'overdue',
      'avgQuiz',
      'completionPercentage',
    ];

    const sortBy = allowedSortFields.includes(query.sortBy ?? '')
      ? query.sortBy!
      : 'completionPercentage';

    const sortOrder = query.sortOrder ?? 'desc';

    schoolReports.sort((a, b) => {
      let aValue: number | string;
      let bValue: number | string;

      switch (sortBy) {
        case 'school':
        case 'schoolName':
          aValue = a.school.name;
          bValue = b.school.name;
          break;

        case 'users':
          aValue = a.users;
          bValue = b.users;
          break;

        case 'assigned':
          aValue = a.assigned;
          bValue = b.assigned;
          break;

        case 'modulesAssigned':
          aValue = a.modulesAssigned;
          bValue = b.modulesAssigned;
          break;

        case 'completed':
          aValue = a.completed;
          bValue = b.completed;
          break;

        case 'inProgress':
          aValue = a.inProgress;
          bValue = b.inProgress;
          break;

        case 'notStarted':
          aValue = a.notStarted;
          bValue = b.notStarted;
          break;

        case 'overdue':
          aValue = a.overdue;
          bValue = b.overdue;
          break;

        case 'avgQuiz':
          aValue = a.avgQuiz;
          bValue = b.avgQuiz;
          break;

        case 'completionPercentage':
        default:
          aValue = a.completionPercentage;
          bValue = b.completionPercentage;
          break;
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return sortOrder === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
    // ============================================================
    // SUMMARY
    // ============================================================

    const summary = schoolReports.reduce(
      (result, school) => {
        result.learners += school.users;

        result.coursesAssigned += school.assigned;

        result.modulesAssigned += school.modulesAssigned;

        result.completed += school.completed;

        result.inProgress += school.inProgress;

        result.notStarted += school.notStarted;

        result.overdue += school.overdue;

        return result;
      },
      {
        learners: 0,
        coursesAssigned: 0,
        modulesAssigned: 0,
        completed: 0,
        inProgress: 0,
        notStarted: 0,
        overdue: 0,
      },
    );

    // ============================================================
    // COMPLETION RATE
    // ============================================================

    const completionRate =
      summary.coursesAssigned > 0
        ? Math.round((summary.completed / summary.coursesAssigned) * 100)
        : 0;

    // ============================================================
    // RESPONSE
    // ============================================================

    return {
      message: 'School-wise report retrived successfully',
      summary: {
        schools: schoolReports.length,

        learners: summary.learners,

        coursesAssigned: summary.coursesAssigned,

        modulesAssigned: summary.modulesAssigned,

        completed: summary.completed,

        inProgress: summary.inProgress,

        notStarted: summary.notStarted,

        overdue: summary.overdue,

        completionRate,
      },

      schools: schoolReports,

      meta: {
        page,

        limit,

        total,

        totalPages: Math.ceil(total / limit),
      },
    };
  }
  // ============================================================
  // SCHOOL WISE REPORT
  // ============================================================

  async getSchoolReport(schoolId: string, query: ReportQueryDto) {
    // ============================================================
    // SCHOOL
    // ============================================================

    const school = await this.prisma.school.findUnique({
      where: {
        id: schoolId,
      },

      select: {
        id: true,
        name: true,
        code: true,
        board: true,

        learners: {
          where: {
            // ----------------------------------------------------
            // ROLE FILTER
            // ----------------------------------------------------

            ...(query.roleIds?.length && {
              learnerRoleId: {
                in: query.roleIds,
              },
            }),

            // ----------------------------------------------------
            // DEPARTMENT FILTER
            // ----------------------------------------------------

            ...(query.departmentIds?.length && {
              departmentId: {
                in: query.departmentIds,
              },
            }),
          },

          select: {
            id: true,
            departmentId: true,
            learnerRoleId: true,

            department: {
              select: {
                id: true,
                name: true,
              },
            },

            learnerRole: {
              select: {
                id: true,
                name: true,
              },
            },

            // ==================================================
            // ENROLLMENTS
            // ==================================================

            enrollments: {
              where: {
                // ------------------------------------------------
                // COURSE FILTER
                // ------------------------------------------------

                ...(query.courseIds?.length && {
                  courseId: {
                    in: query.courseIds,
                  },
                }),

                // ------------------------------------------------
                // DATE FILTER
                // ------------------------------------------------

                ...(query.fromDate && {
                  enrolledAt: {
                    gte: new Date(query.fromDate),
                  },
                }),

                ...(query.toDate && {
                  enrolledAt: {
                    lte: new Date(`${query.toDate}T23:59:59.999Z`),
                  },
                }),

                // ------------------------------------------------
                // MANDATORY FILTER
                // ------------------------------------------------

                ...(query.isMandatory !== undefined && {
                  course: {
                    isMandatory: query.isMandatory,
                  },
                }),

                // ------------------------------------------------
                // CATEGORY FILTER
                //
                // IMPORTANT:
                // Change this relation name if your Course model
                // uses a different category relation.
                // ------------------------------------------------

                ...(query.categoryIds?.length && {
                  course: {
                    categories: {
                      some: {
                        categoryId: {
                          in: query.categoryIds,
                        },
                      },
                    },
                  },
                }),
              },

              select: {
                id: true,
                courseId: true,
                completedAt: true,
                dueDate: true,

                course: {
                  select: {
                    id: true,
                    isMandatory: true,

                    modules: {
                      select: {
                        id: true,
                      },
                    },
                  },
                },
              },
            },

            // ==================================================
            // PROGRESS
            // ==================================================

            progress: {
              select: {
                percentage: true,
                status: true,

                lesson: {
                  select: {
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

            // ==================================================
            // CERTIFICATES
            // ==================================================

            certificates: {
              select: {
                id: true,
                courseId: true,
              },
            },
          },
        },
      },
    });

    // ============================================================
    // SCHOOL NOT FOUND
    // ============================================================

    if (!school) {
      throw new NotFoundException('School not found');
    }

    const now = new Date();

    // ============================================================
    // HELPER: GET COMPLETION STATUS
    // ============================================================

    const getCompletionStatus = (
      learner: (typeof school.learners)[number],
      enrollment: (typeof school.learners)[number]['enrollments'][number],
    ): 'COMPLETED' | 'IN_PROGRESS' | 'NOT_STARTED' | 'OVERDUE' => {
      // ----------------------------------------------------------
      // COMPLETED
      // ----------------------------------------------------------

      if (enrollment.completedAt) {
        return 'COMPLETED';
      }

      // ----------------------------------------------------------
      // OVERDUE
      // ----------------------------------------------------------

      if (enrollment.dueDate && enrollment.dueDate < now) {
        return 'OVERDUE';
      }

      // ----------------------------------------------------------
      // COURSE PROGRESS
      // ----------------------------------------------------------

      const courseProgress = learner.progress.filter(
        (progress) => progress.lesson.module.courseId === enrollment.courseId,
      );

      const hasStarted = courseProgress.some(
        (progress) =>
          progress.status === 'IN_PROGRESS' ||
          progress.status === 'COMPLETED' ||
          (progress.percentage ?? 0) > 0,
      );

      // ----------------------------------------------------------
      // IN PROGRESS
      // ----------------------------------------------------------

      if (hasStarted) {
        return 'IN_PROGRESS';
      }

      // ----------------------------------------------------------
      // NOT STARTED
      // ----------------------------------------------------------

      return 'NOT_STARTED';
    };

    // ============================================================
    // HELPER: GET CERTIFICATION STATUS
    // ============================================================

    const getCertificationStatus = (
      learner: (typeof school.learners)[number],
      enrollment: (typeof school.learners)[number]['enrollments'][number],
    ) => {
      const certified = learner.certificates.some(
        (certificate) => certificate.courseId === enrollment.courseId,
      );

      return certified ? 'CERTIFIED' : 'NOT_CERTIFIED';
    };

    // ============================================================
    // HELPER: CHECK WHETHER ENROLLMENT PASSES FILTERS
    // ============================================================

    const enrollmentMatchesFilters = (
      learner: (typeof school.learners)[number],
      enrollment: (typeof school.learners)[number]['enrollments'][number],
    ) => {
      // ----------------------------------------------------------
      // COMPLETION STATUS
      // ----------------------------------------------------------

      const completionStatus = getCompletionStatus(learner, enrollment);

      if (
        query.completionStatuses?.length &&
        !query.completionStatuses.includes(completionStatus)
      ) {
        return false;
      }

      // ----------------------------------------------------------
      // CERTIFICATION STATUS
      // ----------------------------------------------------------

      const certificationStatus = getCertificationStatus(learner, enrollment);

      if (
        query.certificationStatuses?.length &&
        !query.certificationStatuses.includes(certificationStatus)
      ) {
        return false;
      }

      return true;
    };

    // ============================================================
    // FILTERED LEARNERS
    // ============================================================

    const filteredLearners = school.learners
      .map((learner) => {
        const filteredEnrollments = learner.enrollments.filter((enrollment) =>
          enrollmentMatchesFilters(learner, enrollment),
        );

        return {
          ...learner,
          enrollments: filteredEnrollments,
        };
      })
      .filter((learner) =>
        // If learning-level filters are selected,
        // remove learners with no matching assignment.
        query.completionStatuses?.length ||
        query.certificationStatuses?.length ||
        query.courseIds?.length ||
        query.categoryIds?.length
          ? learner.enrollments.length > 0
          : true,
      );

    // ============================================================
    // SUMMARY
    // ============================================================

    const totalLearners = filteredLearners.length;

    let totalAssignments = 0;
    let completedAssignments = 0;
    let overdueLearners = 0;
    let modulesCompleted = 0;

    const overdueLearnerIds = new Set<string>();

    // ============================================================
    // PROCESS SUMMARY
    // ============================================================

    for (const learner of filteredLearners) {
      let learnerHasOverdue = false;

      for (const enrollment of learner.enrollments) {
        totalAssignments++;

        // --------------------------------------------------------
        // COMPLETED
        // --------------------------------------------------------

        if (enrollment.completedAt) {
          completedAssignments++;
        }

        // --------------------------------------------------------
        // OVERDUE
        // --------------------------------------------------------

        if (
          !enrollment.completedAt &&
          enrollment.dueDate &&
          enrollment.dueDate < now
        ) {
          learnerHasOverdue = true;
        }

        // --------------------------------------------------------
        // MODULES COMPLETED
        // --------------------------------------------------------

        for (const module of enrollment.course.modules) {
          const moduleProgress = learner.progress.filter(
            (progress) => progress.lesson.module.id === module.id,
          );

          const moduleCompleted =
            moduleProgress.length > 0 &&
            moduleProgress.every(
              (progress) =>
                progress.status === 'COMPLETED' ||
                (progress.percentage ?? 0) >= 100,
            );

          if (moduleCompleted) {
            modulesCompleted++;
          }
        }
      }

      if (learnerHasOverdue) {
        overdueLearnerIds.add(learner.id);
      }
    }

    // ============================================================
    // COMPLETION PERCENTAGE
    // ============================================================

    const completionPercentage =
      totalAssignments > 0
        ? Math.round((completedAssignments / totalAssignments) * 100)
        : 0;

    // ============================================================
    // CERTIFIED LEARNERS
    // ============================================================

    const certifiedLearnerIds = new Set<string>();

    for (const learner of filteredLearners) {
      const hasCertifiedCourse = learner.enrollments.some((enrollment) =>
        learner.certificates.some(
          (certificate) => certificate.courseId === enrollment.courseId,
        ),
      );

      if (hasCertifiedCourse) {
        certifiedLearnerIds.add(learner.id);
      }
    }

    // ============================================================
    // DEPARTMENT PERFORMANCE
    // ============================================================

    const departmentMap = new Map<
      string,
      {
        id: string;
        name: string;
        learners: typeof filteredLearners;
      }
    >();

    for (const learner of filteredLearners) {
      if (!learner.department) {
        continue;
      }

      const departmentId = learner.department.id;

      if (!departmentMap.has(departmentId)) {
        departmentMap.set(departmentId, {
          id: learner.department.id,
          name: learner.department.name,
          learners: [],
        });
      }

      departmentMap.get(departmentId)!.learners.push(learner);
    }

    // ============================================================
    // BUILD DEPARTMENTS
    // ============================================================

    const departments = Array.from(departmentMap.values()).map((department) => {
      let assigned = 0;
      let completed = 0;

      const departmentOverdueLearners = new Set<string>();

      // ========================================================
      // ROLE BREAKDOWN
      // ========================================================

      const roleMap = new Map<
        string,
        {
          id: string;
          name: string;
          learners: typeof filteredLearners;
        }
      >();

      for (const learner of department.learners) {
        // ------------------------------------------------------
        // ROLE
        // ------------------------------------------------------

        if (learner.learnerRole) {
          const roleId = learner.learnerRole.id;

          if (!roleMap.has(roleId)) {
            roleMap.set(roleId, {
              id: learner.learnerRole.id,
              name: learner.learnerRole.name,
              learners: [],
            });
          }

          roleMap.get(roleId)!.learners.push(learner);
        }

        // ------------------------------------------------------
        // DEPARTMENT ASSIGNMENTS
        // ------------------------------------------------------

        for (const enrollment of learner.enrollments) {
          assigned++;

          if (enrollment.completedAt) {
            completed++;
          }

          if (
            !enrollment.completedAt &&
            enrollment.dueDate &&
            enrollment.dueDate < now
          ) {
            departmentOverdueLearners.add(learner.id);
          }
        }
      }

      // ========================================================
      // DEPARTMENT COMPLETION
      // ========================================================

      const departmentCompletion =
        assigned > 0 ? Math.round((completed / assigned) * 100) : 0;

      // ========================================================
      // ROLES
      // ========================================================

      const roles = Array.from(roleMap.values()).map((role) => {
        let roleAssigned = 0;
        let roleCompleted = 0;

        for (const learner of role.learners) {
          for (const enrollment of learner.enrollments) {
            roleAssigned++;

            if (enrollment.completedAt) {
              roleCompleted++;
            }
          }
        }

        const roleCompletion =
          roleAssigned > 0
            ? Math.round((roleCompleted / roleAssigned) * 100)
            : 0;

        return {
          id: role.id,
          name: role.name,
          users: role.learners.length,
          completionPercentage: roleCompletion,
        };
      });

      // ========================================================
      // DEPARTMENT RESPONSE
      // ========================================================

      return {
        id: department.id,
        name: department.name,

        users: department.learners.length,

        completionPercentage: departmentCompletion,

        overdue: departmentOverdueLearners.size,

        status: departmentCompletion >= 80 ? 'ON_TRACK' : 'AT_RISK',

        roles,
      };
    });

    // ============================================================
    // RETURN
    // ============================================================

    return {
      message: 'School listing report retrived successfully',
      school: {
        id: school.id,
        name: school.name,
        code: school.code,
        board: school.board,
      },

      summary: {
        totalLearners,

        completionPercentage,

        coursesAssigned: totalAssignments,

        modulesCompleted,

        overdueLearners: overdueLearnerIds.size,

        certified: certifiedLearnerIds.size,
      },

      departments,
    };
  }

  // ============================================================
  // ROLE WISE REPORT
  // ============================================================

  async getRoleWiseReport(query: ReportQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 5;
    const skip = (page - 1) * limit;

    const now = new Date();

    // ============================================================
    // 1. LEARNER FILTER
    // ============================================================

    const learnerWhere = {
      ...(query.schoolIds?.length && {
        schoolId: {
          in: query.schoolIds,
        },
      }),

      ...(query.departmentIds?.length && {
        departmentId: {
          in: query.departmentIds,
        },
      }),

      ...(query.board && {
        school: {
          board: query.board,
        },
      }),

      // Report period is based on enrollment date.
      ...(query.fromDate || query.toDate
        ? {
            enrollments: {
              some: {
                enrolledAt: {
                  ...(query.fromDate && {
                    gte: new Date(query.fromDate),
                  }),
                  ...(query.toDate && {
                    lte: new Date(`${query.toDate}T23:59:59.999Z`),
                  }),
                },
              },
            },
          }
        : {}),
    };

    // ============================================================
    // 2. GET ROLES + LEARNERS
    // ============================================================

    const roles = await this.prisma.learnerRole.findMany({
      where: {
        isActive: true,

        ...(query.roleIds?.length && {
          id: {
            in: query.roleIds,
          },
        }),
      },

      orderBy: {
        name: 'asc',
      },

      select: {
        id: true,
        name: true,
        code: true,

        learners: {
          where: learnerWhere,

          select: {
            id: true,
            schoolId: true,
            departmentId: true,

            enrollments: {
              where:
                query.fromDate || query.toDate
                  ? {
                      enrolledAt: {
                        ...(query.fromDate && {
                          gte: new Date(query.fromDate),
                        }),
                        ...(query.toDate && {
                          lte: new Date(`${query.toDate}T23:59:59.999Z`),
                        }),
                      },
                    }
                  : undefined,

              select: {
                id: true,
                courseId: true,
                enrolledAt: true,
                completedAt: true,
                dueDate: true,

                course: {
                  select: {
                    id: true,
                    dueDate: true,
                    isMandatory: true,

                    modules: {
                      select: {
                        id: true,
                      },
                    },
                  },
                },
              },
            },

            progress: {
              select: {
                status: true,
                percentage: true,

                lesson: {
                  select: {
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

            certificates: {
              select: {
                id: true,
                courseId: true,
              },
            },

            quizAttempts: {
              where: {
                completed: true,
                score: {
                  not: null,
                },
              },

              select: {
                score: true,
              },
            },
          },
        },
      },
    });

    // ============================================================
    // 3. GET COURSE ASSIGNMENTS
    // ============================================================

    const assignments = await this.prisma.courseAssignment.findMany({
      select: {
        id: true,
        status: true,
        dueDate: true,

        schools: {
          select: {
            schoolId: true,
          },
        },

        roles: {
          select: {
            learnerRoleId: true,
          },
        },

        departments: {
          select: {
            departmentId: true,
          },
        },

        categories: {
          select: {
            categoryId: true,
          },
        },

        courses: {
          select: {
            courseId: true,
          },
        },
      },
    });

    // ============================================================
    // 4. GET COURSE INFORMATION
    //
    // Needed for:
    // - category filter
    // - mandatory filter
    // - module count
    // ============================================================

    const explicitCourseIds = [
      ...new Set(
        assignments.flatMap((assignment) =>
          assignment.courses.map((course) => course.courseId),
        ),
      ),
    ];

    const assignmentCategoryIds = [
      ...new Set(
        assignments.flatMap((assignment) =>
          assignment.categories.map((category) => category.categoryId),
        ),
      ),
    ];

    const courses = await this.prisma.course.findMany({
      where: {
        OR: [
          ...(explicitCourseIds.length > 0
            ? [
                {
                  id: {
                    in: explicitCourseIds,
                  },
                },
              ]
            : []),

          ...(assignmentCategoryIds.length > 0
            ? [
                {
                  categories: {
                    some: {
                      categoryId: {
                        in: assignmentCategoryIds,
                      },
                    },
                  },
                },
              ]
            : []),
        ],
      },

      select: {
        id: true,
        isMandatory: true,

        categories: {
          select: {
            category: {
              select: {
                id: true,
              },
            },
          },
        },

        modules: {
          select: {
            id: true,
          },
        },
      },
    });

    const courseMap = new Map(courses.map((course) => [course.id, course]));

    // ============================================================
    // 5. ROLE REPORT CALCULATOR
    // ============================================================

    const allRoleReports = roles.map((role) => {
      let users = 0;
      let coursesAssigned = 0;
      let modules = 0;
      let completed = 0;
      let inProgress = 0;
      let notStarted = 0;
      let overdue = 0;
      let modulesCompleted = 0;

      const quizScores: number[] = [];

      let totalLearningUnits = 0;
      let totalLearningPercentage = 0;

      // ==========================================================
      // LEARNERS
      // ==========================================================

      for (const learner of role.learners) {
        // --------------------------------------------------------
        // FIND ASSIGNED COURSES
        // --------------------------------------------------------

        const assignedCourseIds = new Set<string>();

        for (const assignment of assignments) {
          // ------------------------------------------------------
          // SCHOOL MATCH
          // ------------------------------------------------------

          const schoolMatches =
            assignment.schools.length === 0 ||
            assignment.schools.some(
              (school) => school.schoolId === learner.schoolId,
            );

          if (!schoolMatches) {
            continue;
          }

          // ------------------------------------------------------
          // ROLE MATCH
          // ------------------------------------------------------

          const roleMatches =
            assignment.roles.length === 0 ||
            assignment.roles.some(
              (assignmentRole) => assignmentRole.learnerRoleId === role.id,
            );

          if (!roleMatches) {
            continue;
          }

          // ------------------------------------------------------
          // DEPARTMENT MATCH
          // ------------------------------------------------------

          const departmentMatches =
            assignment.departments.length === 0 ||
            assignment.departments.some(
              (department) => department.departmentId === learner.departmentId,
            );

          if (!departmentMatches) {
            continue;
          }

          // ------------------------------------------------------
          // DIRECT COURSE ASSIGNMENTS
          // ------------------------------------------------------

          for (const course of assignment.courses) {
            assignedCourseIds.add(course.courseId);
          }

          // ------------------------------------------------------
          // CATEGORY ASSIGNMENTS
          // ------------------------------------------------------

          if (assignment.categories.length > 0) {
            for (const course of courses) {
              const courseCategoryIds = course.categories.map(
                (item) => item.category.id,
              );

              const categoryMatches = assignment.categories.some(
                (assignmentCategory) =>
                  courseCategoryIds.includes(assignmentCategory.categoryId),
              );

              if (categoryMatches) {
                assignedCourseIds.add(course.id);
              }
            }
          }
        }

        // --------------------------------------------------------
        // COURSE FILTER
        // --------------------------------------------------------

        let finalCourseIds = [...assignedCourseIds];

        // Multi-select course filter
        if (query.courseIds?.length) {
          finalCourseIds = finalCourseIds.filter((courseId) =>
            query.courseIds!.includes(courseId),
          );
        }

        // --------------------------------------------------------
        // CATEGORY FILTER
        // --------------------------------------------------------

        if (query.categoryIds?.length) {
          finalCourseIds = finalCourseIds.filter((courseId) => {
            const course = courseMap.get(courseId);

            if (!course) {
              return false;
            }

            return course.categories.some((item) =>
              query.categoryIds!.includes(item.category.id),
            );
          });
        }

        // --------------------------------------------------------
        // MANDATORY FILTER
        // --------------------------------------------------------

        if (query.isMandatory !== undefined) {
          finalCourseIds = finalCourseIds.filter((courseId) => {
            const course = courseMap.get(courseId);

            return course && course.isMandatory === query.isMandatory;
          });
        }

        // --------------------------------------------------------
        // NO ASSIGNED COURSE
        // --------------------------------------------------------

        if (finalCourseIds.length === 0) {
          continue;
        }

        // --------------------------------------------------------
        // PROCESS COURSES
        // --------------------------------------------------------

        let learnerHasMatchingCourse = false;

        for (const courseId of finalCourseIds) {
          const courseMeta = courseMap.get(courseId);

          if (!courseMeta) {
            continue;
          }

          const enrollment = learner.enrollments.find(
            (item) => item.courseId === courseId,
          );

          const courseProgress = learner.progress.filter(
            (progress) => progress.lesson.module.courseId === courseId,
          );

          // ------------------------------------------------------
          // STATUS
          // ------------------------------------------------------

          const dueDate =
            enrollment?.dueDate ?? enrollment?.course.dueDate ?? null;

          const isOverdue =
            !!dueDate && dueDate < now && !enrollment?.completedAt;

          let completionStatus:
            'COMPLETED' | 'IN_PROGRESS' | 'NOT_STARTED' | 'OVERDUE';

          if (isOverdue) {
            completionStatus = 'OVERDUE';
          } else if (enrollment?.completedAt) {
            completionStatus = 'COMPLETED';
          } else if (courseProgress.length > 0) {
            completionStatus = 'IN_PROGRESS';
          } else {
            completionStatus = 'NOT_STARTED';
          }

          // ------------------------------------------------------
          // CERTIFICATION STATUS
          // ------------------------------------------------------

          const isCertified = learner.certificates.some(
            (certificate) => certificate.courseId === courseId,
          );

          const certificationStatus = isCertified
            ? 'CERTIFIED'
            : 'NOT_CERTIFIED';

          // ------------------------------------------------------
          // COMPLETION STATUS FILTER
          // ------------------------------------------------------

          if (
            query.completionStatuses?.length &&
            !query.completionStatuses.includes(completionStatus)
          ) {
            continue;
          }

          // ------------------------------------------------------
          // CERTIFICATION STATUS FILTER
          // ------------------------------------------------------

          if (
            query.certificationStatuses?.length &&
            !query.certificationStatuses.includes(certificationStatus)
          ) {
            continue;
          }

          learnerHasMatchingCourse = true;

          // ------------------------------------------------------
          // COURSE COUNT
          // ------------------------------------------------------

          coursesAssigned++;

          // ------------------------------------------------------
          // MODULE COUNT
          // ------------------------------------------------------

          modules += courseMeta.modules.length;

          // ------------------------------------------------------
          // STATUS COUNTS
          // ------------------------------------------------------

          if (completionStatus === 'COMPLETED') {
            completed++;
          }

          if (completionStatus === 'IN_PROGRESS') {
            inProgress++;
          }

          if (completionStatus === 'NOT_STARTED') {
            notStarted++;
          }

          if (completionStatus === 'OVERDUE') {
            overdue++;
          }

          // ------------------------------------------------------
          // LESSON PROGRESS
          // ------------------------------------------------------

          for (const progress of courseProgress) {
            totalLearningUnits++;

            totalLearningPercentage += Math.min(
              Math.max(progress.percentage ?? 0, 0),
              100,
            );
          }

          // ------------------------------------------------------
          // MODULE COMPLETION
          // ------------------------------------------------------

          for (const module of courseMeta.modules) {
            const moduleProgress = courseProgress.filter(
              (progress) => progress.lesson.moduleId === module.id,
            );

            if (
              moduleProgress.length > 0 &&
              moduleProgress.every(
                (progress) =>
                  progress.status === 'COMPLETED' ||
                  (progress.percentage ?? 0) >= 100,
              )
            ) {
              modulesCompleted++;
            }
          }
        }

        // --------------------------------------------------------
        // COUNT LEARNER ONLY WHEN THEY HAVE A MATCHING COURSE
        // --------------------------------------------------------

        if (learnerHasMatchingCourse) {
          users++;
        }

        // --------------------------------------------------------
        // QUIZ
        // --------------------------------------------------------

        for (const attempt of learner.quizAttempts) {
          if (attempt.score !== null) {
            quizScores.push(attempt.score);
          }
        }
      }

      // ==========================================================
      // COMPLETION %
      // ==========================================================

      const completionPercentage =
        totalLearningUnits > 0
          ? Math.round(totalLearningPercentage / totalLearningUnits)
          : 0;

      // ==========================================================
      // AVG QUIZ
      // ==========================================================

      const avgQuiz =
        quizScores.length > 0
          ? Math.round(
              quizScores.reduce((sum, score) => sum + score, 0) /
                quizScores.length,
            )
          : 0;

      return {
        id: role.id,
        name: role.name,
        code: role.code,

        users,

        coursesAssigned,

        modules,

        completed,

        inProgress,

        notStarted,

        overdue,

        modulesCompleted,

        avgQuiz,

        completionPercentage,
      };
    });

    // ============================================================
    // 6. SEARCH
    // ============================================================

    let filteredRoleReports = allRoleReports;

    if (query.search?.trim()) {
      const search = query.search.trim().toLowerCase();

      filteredRoleReports = filteredRoleReports.filter(
        (role) =>
          role.name.toLowerCase().includes(search) ||
          role.code?.toLowerCase().includes(search),
      );
    }
    // ============================================================
    // SORT
    // ============================================================

    const allowedSortFields = [
      'name',
      'users',
      'coursesAssigned',
      'completed',
      'inProgress',
      'notStarted',
      'overdue',
      'avgQuiz',
      'completionPercentage',
    ];

    const sortBy = allowedSortFields.includes(query.sortBy ?? '')
      ? query.sortBy!
      : 'completionPercentage';

    const sortOrder = query.sortOrder ?? 'desc';

    filteredRoleReports.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case 'role':
        case 'roleName':
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;

        case 'code':
          aValue = a.code;
          bValue = b.code;
          break;

        case 'users':
          aValue = a.users;
          bValue = b.users;
          break;

        case 'coursesAssigned':
          aValue = a.coursesAssigned;
          bValue = b.coursesAssigned;
          break;

        case 'modules':
          aValue = a.modules;
          bValue = b.modules;
          break;

        case 'completed':
          aValue = a.completed;
          bValue = b.completed;
          break;

        case 'inProgress':
          aValue = a.inProgress;
          bValue = b.inProgress;
          break;

        case 'notStarted':
          aValue = a.notStarted;
          bValue = b.notStarted;
          break;

        case 'overdue':
          aValue = a.overdue;
          bValue = b.overdue;
          break;

        case 'modulesCompleted':
          aValue = a.modulesCompleted;
          bValue = b.modulesCompleted;
          break;

        case 'avgQuiz':
          aValue = a.avgQuiz;
          bValue = b.avgQuiz;
          break;

        case 'completionPercentage':
        default:
          aValue = a.completionPercentage;
          bValue = b.completionPercentage;
          break;
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return sortOrder === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
    // ============================================================
    // 8. ROLE COMPARISON
    //
    // IMPORTANT:
    // This respects all selected filters.
    // ============================================================

    const roleComparison = filteredRoleReports.map((role) => ({
      id: role.id,
      name: role.name,
      completionPercentage: role.completionPercentage,
    }));

    // ============================================================
    // 9. SUMMARY
    // ============================================================

    const summary = filteredRoleReports.reduce(
      (result, role) => {
        result.totalUsers += role.users;

        result.coursesAssigned += role.coursesAssigned;

        result.modules += role.modules;

        result.completed += role.completed;

        result.inProgress += role.inProgress;

        result.notStarted += role.notStarted;

        result.overdue += role.overdue;

        return result;
      },
      {
        totalUsers: 0,
        coursesAssigned: 0,
        modules: 0,
        completed: 0,
        inProgress: 0,
        notStarted: 0,
        overdue: 0,
      },
    );

    // ============================================================
    // 10. SUMMARY COMPLETION
    // ============================================================

    const completionPercentage =
      filteredRoleReports.length > 0
        ? Math.round(
            filteredRoleReports.reduce(
              (sum, role) => sum + role.completionPercentage,
              0,
            ) / filteredRoleReports.length,
          )
        : 0;

    // ============================================================
    // 11. PAGINATION
    // ============================================================

    const total = filteredRoleReports.length;

    const paginatedRoles = filteredRoleReports.slice(skip, skip + limit);

    // ============================================================
    // 12. RESPONSE
    // ============================================================

    return {
      message: 'Role-wise reports retrived successfully',

      summary: {
        roles: filteredRoleReports.length,

        totalUsers: summary.totalUsers,

        coursesAssigned: summary.coursesAssigned,

        modules: summary.modules,

        completed: summary.completed,

        inProgress: summary.inProgress,

        notStarted: summary.notStarted,

        overdue: summary.overdue,

        completionPercentage,
      },

      roleComparison,

      roles: paginatedRoles,

      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // ============================================================
  // DEPARTMENT WISE REPORT
  // ============================================================

  async getDepartmentWiseReport(query: ReportQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 5;
    const skip = (page - 1) * limit;

    const now = new Date();

    // ============================================================
    // LEARNER FILTER
    // ============================================================

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

      ...(query.departmentIds?.length && {
        departmentId: {
          in: query.departmentIds,
        },
      }),
    };

    // ============================================================
    // GET DEPARTMENTS
    //
    // IMPORTANT:
    // Fetch departments independently so departments with
    // zero learners are also included.
    // ============================================================

    const departments = await this.prisma.department.findMany({
      where: {
        ...(query.departmentIds?.length && {
          id: {
            in: query.departmentIds,
          },
        }),

        ...(query.search && {
          name: {
            contains: query.search,
            mode: 'insensitive',
          },
        }),
      },

      select: {
        id: true,
        name: true,
      },
    });

    // ============================================================
    // GET LEARNERS
    // ============================================================

    const learners = await this.prisma.learner.findMany({
      where: learnerWhere,

      select: {
        id: true,
        departmentId: true,

        department: {
          select: {
            id: true,
            name: true,
          },
        },

        learnerRole: {
          select: {
            id: true,
            name: true,
          },
        },

        // ========================================================
        // ENROLLMENTS
        // ========================================================

        enrollments: {
          where: {
            ...(query.courseIds?.length && {
              courseId: {
                in: query.courseIds,
              },
            }),

            ...(query.fromDate && {
              enrolledAt: {
                gte: new Date(query.fromDate),
              },
            }),

            ...(query.toDate && {
              enrolledAt: {
                lte: new Date(`${query.toDate}T23:59:59.999Z`),
              },
            }),

            ...(query.isMandatory !== undefined && {
              course: {
                isMandatory: query.isMandatory,
              },
            }),
          },

          select: {
            id: true,
            courseId: true,
            completedAt: true,
            dueDate: true,

            course: {
              select: {
                id: true,
                isMandatory: true,

                modules: {
                  select: {
                    id: true,
                  },
                },
              },
            },
          },
        },

        // ========================================================
        // PROGRESS
        // ========================================================

        progress: {
          select: {
            percentage: true,
            status: true,

            lesson: {
              select: {
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

        // ========================================================
        // CERTIFICATES
        // ========================================================

        certificates: {
          select: {
            id: true,
            courseId: true,
          },
        },

        // ========================================================
        // QUIZ ATTEMPTS
        // ========================================================

        quizAttempts: {
          where: {
            completed: true,
          },

          select: {
            score: true,
          },
        },
      },
    });

    // ============================================================
    // HELPER: COMPLETION STATUS
    // ============================================================

    const getCompletionStatus = (
      learner: (typeof learners)[number],
      enrollment: (typeof learners)[number]['enrollments'][number],
    ): 'COMPLETED' | 'IN_PROGRESS' | 'NOT_STARTED' | 'OVERDUE' => {
      // ----------------------------------------------------------
      // COMPLETED
      // ----------------------------------------------------------

      if (enrollment.completedAt) {
        return 'COMPLETED';
      }

      // ----------------------------------------------------------
      // OVERDUE
      // ----------------------------------------------------------

      if (enrollment.dueDate && enrollment.dueDate < now) {
        return 'OVERDUE';
      }

      // ----------------------------------------------------------
      // COURSE PROGRESS
      // ----------------------------------------------------------

      const courseProgress = learner.progress.filter(
        (progress) => progress.lesson.module.courseId === enrollment.courseId,
      );

      if (courseProgress.length === 0) {
        return 'NOT_STARTED';
      }

      const averageProgress =
        courseProgress.reduce(
          (sum, progress) => sum + Number(progress.percentage ?? 0),
          0,
        ) / courseProgress.length;

      if (averageProgress >= 100) {
        return 'COMPLETED';
      }

      if (averageProgress > 0) {
        return 'IN_PROGRESS';
      }

      return 'NOT_STARTED';
    };

    // ============================================================
    // HELPER: CERTIFICATION STATUS
    // ============================================================

    const getCertificationStatus = (
      learner: (typeof learners)[number],
      enrollment: (typeof learners)[number]['enrollments'][number],
    ): 'CERTIFIED' | 'NOT_CERTIFIED' => {
      const certified = learner.certificates.some(
        (certificate) => certificate.courseId === enrollment.courseId,
      );

      return certified ? 'CERTIFIED' : 'NOT_CERTIFIED';
    };

    // ============================================================
    // BUILD LEARNER ENROLLMENTS AFTER STATUS FILTERS
    // ============================================================

    const filteredLearners = learners
      .map((learner) => {
        const filteredEnrollments = learner.enrollments.filter((enrollment) => {
          // --------------------------------------------------
          // COMPLETION STATUS
          // --------------------------------------------------

          const completionStatus = getCompletionStatus(learner, enrollment);

          if (
            query.completionStatuses?.length &&
            !query.completionStatuses.includes(completionStatus)
          ) {
            return false;
          }

          // --------------------------------------------------
          // CERTIFICATION STATUS
          // --------------------------------------------------

          const certificationStatus = getCertificationStatus(
            learner,
            enrollment,
          );

          if (
            query.certificationStatuses?.length &&
            !query.certificationStatuses.includes(certificationStatus)
          ) {
            return false;
          }

          return true;
        });

        return {
          ...learner,
          enrollments: filteredEnrollments,
        };
      })
      .filter((learner) => {
        // When learning-level filters are used,
        // remove learners that have no matching enrollment.

        if (
          query.courseIds?.length ||
          query.completionStatuses?.length ||
          query.certificationStatuses?.length
        ) {
          return learner.enrollments.length > 0;
        }

        return true;
      });

    // ============================================================
    // GROUP LEARNERS BY DEPARTMENT
    // ============================================================

    const departmentLearnerMap = new Map<string, typeof filteredLearners>();

    for (const department of departments) {
      departmentLearnerMap.set(department.id, []);
    }

    for (const learner of filteredLearners) {
      if (!learner.departmentId) {
        continue;
      }

      if (!departmentLearnerMap.has(learner.departmentId)) {
        continue;
      }

      departmentLearnerMap.get(learner.departmentId)!.push(learner);
    }

    // ============================================================
    // CALCULATE DEPARTMENT REPORT
    // ============================================================

    const departmentReports = departments.map((department) => {
      const departmentLearners = departmentLearnerMap.get(department.id) ?? [];

      let coursesAssigned = 0;
      let completed = 0;
      let inProgress = 0;
      let notStarted = 0;
      let overdue = 0;

      const quizScores: number[] = [];

      // --------------------------------------------------------
      // LEARNERS
      // --------------------------------------------------------

      for (const learner of departmentLearners) {
        // ======================================================
        // QUIZ SCORES
        // ======================================================

        for (const attempt of learner.quizAttempts) {
          if (attempt.score !== null) {
            quizScores.push(Number(attempt.score));
          }
        }

        // ======================================================
        // ENROLLMENTS
        // ======================================================

        for (const enrollment of learner.enrollments) {
          coursesAssigned++;

          const completionStatus = getCompletionStatus(learner, enrollment);

          switch (completionStatus) {
            case 'COMPLETED':
              completed++;
              break;

            case 'IN_PROGRESS':
              inProgress++;
              break;

            case 'NOT_STARTED':
              notStarted++;
              break;

            case 'OVERDUE':
              overdue++;
              break;
          }
        }
      }

      // ========================================================
      // COMPLETION PERCENTAGE
      // ========================================================

      const completionPercentage =
        coursesAssigned > 0
          ? Math.round((completed / coursesAssigned) * 100)
          : 0;

      // ========================================================
      // AVG QUIZ
      // ========================================================

      const avgQuiz =
        quizScores.length > 0
          ? Math.round(
              quizScores.reduce((sum, score) => sum + score, 0) /
                quizScores.length,
            )
          : 0;

      return {
        id: department.id,
        name: department.name,

        users: departmentLearners.length,

        coursesAssigned,

        completed,

        inProgress,

        notStarted,

        overdue,

        avgQuiz,

        completionPercentage,
      };
    });

    // ============================================================
    // SORT
    // ============================================================
    const allowedSortFields = [
      'name',
      'users',
      'coursesAssigned',
      'completed',
      'inProgress',
      'notStarted',
      'overdue',
      'avgQuiz',
      'completionPercentage',
    ];

    const sortBy = allowedSortFields.includes(query.sortBy ?? '')
      ? query.sortBy!
      : 'completionPercentage';

    const sortOrder = query.sortOrder ?? 'desc';

    departmentReports.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case 'department':
        case 'departmentName':
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;

        case 'users':
          aValue = a.users;
          bValue = b.users;
          break;

        case 'coursesAssigned':
          aValue = a.coursesAssigned;
          bValue = b.coursesAssigned;
          break;

        case 'completed':
          aValue = a.completed;
          bValue = b.completed;
          break;

        case 'inProgress':
          aValue = a.inProgress;
          bValue = b.inProgress;
          break;

        case 'notStarted':
          aValue = a.notStarted;
          bValue = b.notStarted;
          break;

        case 'overdue':
          aValue = a.overdue;
          bValue = b.overdue;
          break;

        case 'avgQuiz':
          aValue = a.avgQuiz;
          bValue = b.avgQuiz;
          break;

        case 'completionPercentage':
        default:
          aValue = a.completionPercentage;
          bValue = b.completionPercentage;
          break;
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return sortOrder === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
    // ============================================================
    // SUMMARY
    // ============================================================

    const summary = departmentReports.reduce(
      (acc, department) => {
        acc.totalUsers += department.users;

        acc.coursesAssigned += department.coursesAssigned;

        acc.completed += department.completed;

        acc.inProgress += department.inProgress;

        acc.notStarted += department.notStarted;

        acc.overdue += department.overdue;

        if (department.avgQuiz > 0) {
          acc.quizScores.push(department.avgQuiz);
        }

        return acc;
      },
      {
        totalUsers: 0,
        coursesAssigned: 0,
        completed: 0,
        inProgress: 0,
        notStarted: 0,
        overdue: 0,
        quizScores: [] as number[],
      },
    );

    // ============================================================
    // AVG QUIZ
    // ============================================================

    const avgQuiz =
      summary.quizScores.length > 0
        ? Math.round(
            summary.quizScores.reduce((sum, score) => sum + score, 0) /
              summary.quizScores.length,
          )
        : 0;

    // ============================================================
    // PAGINATION
    // ============================================================

    const total = departmentReports.length;

    const paginatedDepartments = departmentReports.slice(skip, skip + limit);

    const totalPages = total > 0 ? Math.ceil(total / limit) : 0;

    // ============================================================
    // DEPARTMENT COMPARISON
    //
    // Should represent ALL departments,
    // not only the current pagination page.
    // ============================================================

    const departmentComparison = departmentReports.map((department) => ({
      id: department.id,
      name: department.name,
      completionPercentage: department.completionPercentage,
    }));

    // ============================================================
    // RESPONSE
    // ============================================================

    return {
      message: 'Department-wise reports retrived successfully',
      summary: {
        departments: total,

        totalUsers: summary.totalUsers,

        coursesAssigned: summary.coursesAssigned,

        completed: summary.completed,

        inProgress: summary.inProgress,

        notStarted: summary.notStarted,

        overdue: summary.overdue,

        avgQuiz,
      },

      departmentComparison,

      departments: paginatedDepartments,

      meta: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  // ============================================================
  // INDIVIDUAL USER REPORT
  // ============================================================

  async getIndividualUserReport(query: IndividualUserReportQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    const skip = (page - 1) * limit;

    const now = new Date();

    // ------------------------------------------------------------
    // LEARNER FILTER
    // ------------------------------------------------------------

    const learnerWhere: Prisma.LearnerWhereInput = {
      ...(query.schoolId && {
        schoolId: query.schoolId,
      }),

      ...(query.learnerRoleId && {
        learnerRoleId: query.learnerRoleId,
      }),

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
    };

    // ------------------------------------------------------------
    // GET LEARNERS
    // ------------------------------------------------------------

    const learners = await this.prisma.learner.findMany({
      where: learnerWhere,

      select: {
        id: true,
        name: true,
        email: true,
        employeeId: true,

        department: {
          select: {
            id: true,
            name: true,
          },
        },

        learnerRole: {
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

        enrollments: {
          select: {
            id: true,
            courseId: true,
            completedAt: true,
            dueDate: true,

            course: {
              select: {
                id: true,
                title: true,

                modules: {
                  select: {
                    id: true,
                  },
                },
              },
            },
          },
        },

        progress: {
          select: {
            percentage: true,
            status: true,

            lesson: {
              select: {
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
      },
    });

    // ------------------------------------------------------------
    // CALCULATE USER REPORT
    // ------------------------------------------------------------

    const users = learners.map((learner) => {
      let totalCourses = 0;

      let totalProgress = 0;

      let completedCourses = 0;

      let inProgressCourses = 0;

      let notStartedCourses = 0;

      let overdueCourses = 0;

      // ----------------------------------------------------------
      // COURSE PROGRESS
      // ----------------------------------------------------------

      for (const enrollment of learner.enrollments) {
        totalCourses++;

        // --------------------------------------------------------
        // COURSE COMPLETED
        // --------------------------------------------------------

        if (enrollment.completedAt) {
          completedCourses++;

          totalProgress += 100;

          continue;
        }

        // --------------------------------------------------------
        // FIND PROGRESS FOR THIS COURSE
        // --------------------------------------------------------

        const courseProgress = learner.progress.filter(
          (progress) => progress.lesson.module.courseId === enrollment.courseId,
        );

        let coursePercentage = 0;

        if (courseProgress.length > 0) {
          coursePercentage =
            courseProgress.reduce(
              (sum, progress) => sum + Number(progress.percentage ?? 0),
              0,
            ) / courseProgress.length;
        }

        totalProgress += coursePercentage;

        // --------------------------------------------------------
        // OVERDUE
        // --------------------------------------------------------

        if (enrollment.dueDate && enrollment.dueDate < now) {
          overdueCourses++;

          continue;
        }

        // --------------------------------------------------------
        // COURSE STATUS
        // --------------------------------------------------------

        if (coursePercentage >= 100) {
          completedCourses++;
        } else if (coursePercentage > 0) {
          inProgressCourses++;
        } else {
          notStartedCourses++;
        }
      }

      // ----------------------------------------------------------
      // OVERALL PROGRESS
      // ----------------------------------------------------------

      const progress =
        totalCourses > 0 ? Math.round(totalProgress / totalCourses) : 0;

      // ----------------------------------------------------------
      // OVERALL STATUS
      // ----------------------------------------------------------

      let status: 'COMPLETED' | 'IN_PROGRESS' | 'NOT_STARTED' | 'OVERDUE';

      if (totalCourses === 0) {
        status = 'NOT_STARTED';
      } else if (overdueCourses > 0) {
        status = 'OVERDUE';
      } else if (completedCourses === totalCourses) {
        status = 'COMPLETED';
      } else if (inProgressCourses > 0) {
        status = 'IN_PROGRESS';
      } else {
        status = 'NOT_STARTED';
      }

      return {
        id: learner.id,

        name: learner.name,

        email: learner.email,

        employeeId: learner.employeeId,

        department: learner.department
          ? {
              id: learner.department.id,
              name: learner.department.name,
            }
          : null,

        learnerRole: learner.learnerRole
          ? {
              id: learner.learnerRole.id,
              name: learner.learnerRole.name,
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

        progress,

        status,
      };
    });

    // ------------------------------------------------------------
    // STATUS FILTER
    // ------------------------------------------------------------

    let filteredUsers = users;

    if (query.status) {
      filteredUsers = filteredUsers.filter(
        (user) => user.status === query.status,
      );
    }

    // ------------------------------------------------------------
    // SORT
    // ------------------------------------------------------------

    const sortBy = query.sortBy ?? 'progress';

    const sortOrder = query.sortOrder ?? 'desc';

    filteredUsers.sort((a, b) => {
      switch (sortBy) {
        case 'name': {
          const result = a.name.localeCompare(b.name);

          return sortOrder === 'asc' ? result : -result;
        }

        case 'email': {
          const result = a.email.localeCompare(b.email);

          return sortOrder === 'asc' ? result : -result;
        }

        case 'employeeId': {
          const result = String(a.employeeId ?? '').localeCompare(
            String(b.employeeId ?? ''),
          );

          return sortOrder === 'asc' ? result : -result;
        }

        case 'status': {
          const result = a.status.localeCompare(b.status);

          return sortOrder === 'asc' ? result : -result;
        }

        case 'progress':
        default:
          return sortOrder === 'asc'
            ? a.progress - b.progress
            : b.progress - a.progress;
      }
    });

    // ------------------------------------------------------------
    // PAGINATION
    // ------------------------------------------------------------

    const total = filteredUsers.length;

    const paginatedUsers = filteredUsers.slice(skip, skip + limit);

    const totalPages = total > 0 ? Math.ceil(total / limit) : 0;

    // ------------------------------------------------------------
    // RESPONSE
    // ------------------------------------------------------------

    return {
      message: 'Overdue learners retrived successfully',
      items: paginatedUsers,
      meta: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  // ============================================================
  // INDIVIDUAL USER REPORT DETAILS
  // ============================================================

  async getIndividualUserReportDetails(learnerId: string) {
    const learner = await this.prisma.learner.findUnique({
      where: {
        id: learnerId,
      },

      select: {
        id: true,
        name: true,
        email: true,
        employeeId: true,

        department: {
          select: {
            id: true,
            name: true,
          },
        },

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
            code: true,
            board: true,
          },
        },

        enrollments: {
          select: {
            id: true,
            courseId: true,
            completedAt: true,
            dueDate: true,

            course: {
              select: {
                id: true,
                title: true,
                isMandatory: true,

                modules: {
                  select: {
                    id: true,
                    title: true,
                  },
                },
              },
            },
          },
        },

        progress: {
          select: {
            percentage: true,
            status: true,

            lesson: {
              select: {
                id: true,
                title: true,

                module: {
                  select: {
                    id: true,
                    title: true,
                    courseId: true,
                  },
                },
              },
            },
          },
        },

        quizAttempts: {
          where: {
            completed: true,
            score: {
              not: null,
            },
          },

          select: {
            id: true,
            score: true,
            completedAt: true,

            quiz: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },

        certificates: {
          select: {
            id: true,
            courseId: true,
            issuedAt: true,
          },
        },
      },
    });

    if (!learner) {
      throw new NotFoundException('Learner not found');
    }

    const now = new Date();

    // ------------------------------------------------------------
    // COURSE REPORT
    // ------------------------------------------------------------

    const courses = learner.enrollments.map((enrollment) => {
      const courseProgress = learner.progress.filter(
        (progress) => progress.lesson.module.courseId === enrollment.courseId,
      );

      let progressPercentage = 0;

      if (courseProgress.length > 0) {
        progressPercentage =
          courseProgress.reduce(
            (sum, progress) => sum + Number(progress.percentage ?? 0),
            0,
          ) / courseProgress.length;
      }

      if (enrollment.completedAt) {
        progressPercentage = 100;
      }

      let status: 'COMPLETED' | 'IN_PROGRESS' | 'NOT_STARTED' | 'OVERDUE';

      if (enrollment.completedAt) {
        status = 'COMPLETED';
      } else if (enrollment.dueDate && enrollment.dueDate < now) {
        status = 'OVERDUE';
      } else if (progressPercentage > 0) {
        status = 'IN_PROGRESS';
      } else {
        status = 'NOT_STARTED';
      }

      const modules = enrollment.course.modules.map((module) => {
        const moduleProgress = courseProgress.filter(
          (progress) => progress.lesson.module.id === module.id,
        );

        const modulePercentage =
          moduleProgress.length > 0
            ? Math.round(
                moduleProgress.reduce(
                  (sum, progress) => sum + Number(progress.percentage ?? 0),
                  0,
                ) / moduleProgress.length,
              )
            : 0;

        return {
          id: module.id,
          title: module.title,
          progress: modulePercentage,
          status:
            modulePercentage >= 100
              ? 'COMPLETED'
              : modulePercentage > 0
                ? 'IN_PROGRESS'
                : 'NOT_STARTED',
        };
      });

      return {
        id: enrollment.course.id,

        title: enrollment.course.title,

        isMandatory: enrollment.course.isMandatory,

        dueDate: enrollment.dueDate,

        completedAt: enrollment.completedAt,

        progress: Math.round(progressPercentage),

        status,

        modules,
      };
    });

    // ------------------------------------------------------------
    // OVERALL PROGRESS
    // ------------------------------------------------------------

    const overallProgress =
      courses.length > 0
        ? Math.round(
            courses.reduce((sum, course) => sum + course.progress, 0) /
              courses.length,
          )
        : 0;

    // ------------------------------------------------------------
    // CERTIFICATES
    // ------------------------------------------------------------

    const certificates = learner.certificates.map((certificate) => ({
      id: certificate.id,
      courseId: certificate.courseId,
      issuedAt: certificate.issuedAt,
    }));

    // ------------------------------------------------------------
    // QUIZ
    // ------------------------------------------------------------

    const quizScores = learner.quizAttempts
      .map((attempt) => (attempt.score === null ? null : Number(attempt.score)))
      .filter((score): score is number => score !== null);

    const avgQuiz =
      quizScores.length > 0
        ? Math.round(
            quizScores.reduce((sum, score) => sum + score, 0) /
              quizScores.length,
          )
        : 0;

    // ------------------------------------------------------------
    // SUMMARY
    // ------------------------------------------------------------

    const completed = courses.filter(
      (course) => course.status === 'COMPLETED',
    ).length;

    const inProgress = courses.filter(
      (course) => course.status === 'IN_PROGRESS',
    ).length;

    const notStarted = courses.filter(
      (course) => course.status === 'NOT_STARTED',
    ).length;

    const overdue = courses.filter(
      (course) => course.status === 'OVERDUE',
    ).length;

    const data = await {
      learner: {
        id: learner.id,
        name: learner.name,
        email: learner.email,
        employeeId: learner.employeeId,

        department: learner.department,

        learnerRole: learner.learnerRole,

        school: learner.school,
      },

      summary: {
        totalCourses: courses.length,

        completed,

        inProgress,

        notStarted,

        overdue,

        overallProgress,

        avgQuiz,

        certified: certificates.length > 0,
      },

      courses,

      certificates,

      quizAttempts: learner.quizAttempts,
    };

    return {
      message: 'Overdue learner details retrived successfully',
      data,
    };
  }
}
