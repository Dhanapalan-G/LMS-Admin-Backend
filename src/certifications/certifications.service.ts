import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CertificationQueryDto } from './dto/certification-query.dto';

@Injectable()
export class CertificationsService {
  constructor(private readonly prisma: PrismaService) {}

  // ============================================================
  // FIND ALL
  // ============================================================

  async findAll(query: CertificationQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    const skip = (page - 1) * limit;

    const search = query.search?.trim();

    // ============================================================
    // LEARNER FILTER
    // ============================================================

    const learnerWhere = {
      ...(query.schoolId && {
        schoolId: query.schoolId,
      }),

      ...(query.learnerRoleId && {
        learnerRoleId: query.learnerRoleId,
      }),

      ...(query.departmentId && {
        departmentId: query.departmentId,
      }),

      ...(search && {
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive' as const,
            },
          },
          {
            employeeId: {
              contains: search,
              mode: 'insensitive' as const,
            },
          },
          {
            email: {
              contains: search,
              mode: 'insensitive' as const,
            },
          },
          {
            enrollments: {
              some: {
                course: {
                  title: {
                    contains: search,
                    mode: 'insensitive' as const,
                  },
                },
              },
            },
          },
          {
            certificates: {
              some: {
                certificateNumber: {
                  contains: search,
                  mode: 'insensitive' as const,
                },
              },
            },
          },
        ],
      }),
    };

    // ============================================================
    // GET LEARNERS
    // ============================================================

    const learners = await this.prisma.learner.findMany({
      where: learnerWhere,

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
          },
        },

        school: {
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

        enrollments: {
          select: {
            id: true,
            courseId: true,
            completedAt: true,

            course: {
              select: {
                id: true,
                title: true,
                code: true,

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

        certificates: {
          select: {
            id: true,
            courseId: true,
            certificateNumber: true,
            fileUrl: true,
            issuedAt: true,
          },
        },
      },
    });

    // ============================================================
    // BUILD CERTIFICATION RECORDS
    // ============================================================

    const records = learners.flatMap((learner) => {
      return learner.enrollments.map((enrollment) => {
        const certificate = learner.certificates.find(
          (item) => item.courseId === enrollment.courseId,
        );

        let status: 'CERTIFIED' | 'IN_PROGRESS' | 'NOT_CERTIFIED';

        if (certificate) {
          status = 'CERTIFIED';
        } else if (enrollment.completedAt) {
          status = 'NOT_CERTIFIED';
        } else {
          status = 'IN_PROGRESS';
        }

        return {
          id: enrollment.id,

          learner: {
            id: learner.id,
            name: learner.name,
            employeeId: learner.employeeId,
            email: learner.email,
          },

          role: learner.learnerRole,

          school: learner.school,

          department: learner.department,

          course: enrollment.course,

          categories: enrollment.course.categories.map((item) => item.category),

          completedAt: enrollment.completedAt,

          certificate: certificate
            ? {
                id: certificate.id,
                certificateNumber: certificate.certificateNumber,
                fileUrl: certificate.fileUrl,
                issuedAt: certificate.issuedAt,
              }
            : null,

          status,
        };
      });
    });

    // ============================================================
    // STATUS FILTER
    // ============================================================

    const filteredRecords = query.status
      ? records.filter((record) => record.status === query.status)
      : records;

    // ============================================================
    // SUMMARY
    // ============================================================

    const certified = filteredRecords.filter(
      (item) => item.status === 'CERTIFIED',
    ).length;

    const inProgress = filteredRecords.filter(
      (item) => item.status === 'IN_PROGRESS',
    ).length;

    const notCertified = filteredRecords.filter(
      (item) => item.status === 'NOT_CERTIFIED',
    ).length;

    const totalRecords = filteredRecords.length;

    // ============================================================
    // PAGINATION
    // ============================================================

    const paginatedRecords = filteredRecords.slice(skip, skip + limit);

    const totalPages = Math.ceil(totalRecords / limit);

    return {
      message: 'Certification records retrieved successfully',
      summary: {
        certified,
        inProgress,
        notCertified,
        totalRecords,
      },
      items: paginatedRecords,
      meta: {
        page,
        limit,
        total: totalRecords,
        totalPages,
      },
    };
  }

  // ============================================================
  // FIND ONE
  // ============================================================

  async findOne(id: string) {
    const result = await this.prisma.enrollment.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        courseId: true,
        completedAt: true,

        learner: {
          select: {
            id: true,
            name: true,
            email: true,
            employeeId: true,

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
              },
            },

            department: {
              select: {
                id: true,
                name: true,
              },
            },

            certificates: {
              select: {
                id: true,
                courseId: true,
                certificateNumber: true,
                fileUrl: true,
                issuedAt: true,
              },
            },
          },
        },

        course: {
          select: {
            id: true,
            title: true,
            code: true,

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
    });

    if (!result) {
      throw new NotFoundException('Certification record not found');
    }
    const certificate =
      result.learner.certificates.find(
        (item) => item.courseId === result.courseId,
      ) ?? null;

    let status: 'CERTIFIED' | 'IN_PROGRESS' | 'NOT_CERTIFIED';

    if (certificate) {
      status = 'CERTIFIED';
    } else if (result.completedAt) {
      status = 'NOT_CERTIFIED';
    } else {
      status = 'IN_PROGRESS';
    }

    return {
      id: result.id,

      learner: {
        id: result.learner.id,
        name: result.learner.name,
        employeeId: result.learner.employeeId,
        email: result.learner.email,
      },

      role: result.learner.learnerRole,

      school: result.learner.school,

      department: result.learner.department,

      course: result.course,

      categories: result.course.categories.map((item) => item.category),

      completedAt: result.completedAt,

      certificate,

      status,
    };
  }
}
