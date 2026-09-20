import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateCourseAssignmentDto } from './dto/create-course-assignment.dto';
import { UpdateCourseAssignmentDto } from './dto/update-course-assignment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CourseAssignmentsService {
  constructor(private readonly prisma: PrismaService) {}

  // ==================================================
  // RESOLVE COURSES
  // ==================================================

  private async resolveCourseIds(
    categoryIds: string[] = [],
    courseIds: string[] = [],
  ): Promise<string[]> {
    const ids = new Set<string>(courseIds);

    if (categoryIds.length > 0) {
      const categoryCourses = await this.prisma.courseCategory.findMany({
        where: {
          categoryId: {
            in: categoryIds,
          },
        },
        select: {
          courseId: true,
        },
      });

      for (const item of categoryCourses) {
        ids.add(item.courseId);
      }
    }

    return [...ids];
  }

  // ==================================================
  // CREATE
  // ==================================================

  async create(dto: CreateCourseAssignmentDto) {
    const {
      schoolIds = [],
      roleIds = [],
      departmentIds = [],
      categoryIds = [],
      courseIds = [],
    } = dto;

    // --------------------------------------------------
    // 1. Resolve courses
    // --------------------------------------------------

    const resolvedCourseIds = await this.resolveCourseIds(
      categoryIds,
      courseIds,
    );

    if (resolvedCourseIds.length === 0) {
      throw new ConflictException(
        'At least one course or category must be selected',
      );
    }

    // --------------------------------------------------
    // 2. Remove duplicate IDs
    // --------------------------------------------------

    const uniqueSchoolIds = [...new Set(schoolIds)];
    const uniqueRoleIds = [...new Set(roleIds)];
    const uniqueDepartmentIds = [...new Set(departmentIds)];
    const uniqueCategoryIds = [...new Set(categoryIds)];
    const uniqueCourseIds = [...new Set(resolvedCourseIds)];

    // --------------------------------------------------
    // 3. Validate schools
    // --------------------------------------------------

    if (uniqueSchoolIds.length > 0) {
      const schools = await this.prisma.school.findMany({
        where: {
          id: {
            in: uniqueSchoolIds,
          },
          isActive: true,
        },
        select: {
          id: true,
        },
      });

      if (schools.length !== uniqueSchoolIds.length) {
        throw new NotFoundException(
          'One or more selected schools were not found or inactive',
        );
      }
    }

    // --------------------------------------------------
    // 4. Validate learner roles
    // --------------------------------------------------

    if (uniqueRoleIds.length > 0) {
      const roles = await this.prisma.learnerRole.findMany({
        where: {
          id: {
            in: uniqueRoleIds,
          },
          isActive: true,
        },

        select: {
          id: true,

          schoolMappings: {
            where: {
              schoolId: {
                in: uniqueSchoolIds,
              },
            },

            select: {
              schoolId: true,
            },
          },
        },
      });

      if (roles.length !== uniqueRoleIds.length) {
        throw new NotFoundException(
          'One or more selected learner roles were not found or inactive',
        );
      }

      // ------------------------------------------------
      // Validate role-school mapping
      // ------------------------------------------------

      if (uniqueSchoolIds.length > 0) {
        for (const role of roles) {
          const mappedSchoolIds = new Set(
            role.schoolMappings.map((mapping) => mapping.schoolId),
          );

          for (const schoolId of uniqueSchoolIds) {
            if (!mappedSchoolIds.has(schoolId)) {
              throw new ConflictException(
                `Learner role ${role.id} is not assigned to school ${schoolId}`,
              );
            }
          }
        }
      }
    }

    // --------------------------------------------------
    // 5. Validate departments
    // --------------------------------------------------

    if (uniqueDepartmentIds.length > 0) {
      const departments = await this.prisma.department.findMany({
        where: {
          id: {
            in: uniqueDepartmentIds,
          },
          isActive: true,
        },

        select: {
          id: true,

          schoolMappings: {
            where: {
              schoolId: {
                in: uniqueSchoolIds,
              },
            },

            select: {
              schoolId: true,
            },
          },
        },
      });

      if (departments.length !== uniqueDepartmentIds.length) {
        throw new NotFoundException(
          'One or more selected departments were not found or inactive',
        );
      }

      // ------------------------------------------------
      // Validate department-school mapping
      // ------------------------------------------------

      if (uniqueSchoolIds.length > 0) {
        for (const department of departments) {
          const mappedSchoolIds = new Set(
            department.schoolMappings.map((mapping) => mapping.schoolId),
          );

          for (const schoolId of uniqueSchoolIds) {
            if (!mappedSchoolIds.has(schoolId)) {
              throw new ConflictException(
                `Department ${department.id} is not assigned to school ${schoolId}`,
              );
            }
          }
        }
      }
    }

    // --------------------------------------------------
    // 6. Validate categories
    // --------------------------------------------------

    if (uniqueCategoryIds.length > 0) {
      const categories = await this.prisma.category.findMany({
        where: {
          id: {
            in: uniqueCategoryIds,
          },
        },

        select: {
          id: true,
        },
      });

      if (categories.length !== uniqueCategoryIds.length) {
        throw new NotFoundException(
          'One or more selected categories were not found',
        );
      }
    }

    // --------------------------------------------------
    // 7. Validate courses
    // --------------------------------------------------

    const courses = await this.prisma.course.findMany({
      where: {
        id: {
          in: uniqueCourseIds,
        },
      },

      select: {
        id: true,
      },
    });

    if (courses.length !== uniqueCourseIds.length) {
      throw new NotFoundException(
        'One or more selected courses were not found',
      );
    }

    // --------------------------------------------------
    // 8. Create assignment
    // --------------------------------------------------

    const assignment = await this.prisma.courseAssignment.create({
      data: {
        dueDate: dto.dueDate ? new Date(dto.dueDate) : null,

        status: dto.status ?? 'ACTIVE',

        // ----------------------------------------------
        // Schools
        // ----------------------------------------------

        schools: {
          create: uniqueSchoolIds.map((schoolId) => ({
            school: {
              connect: {
                id: schoolId,
              },
            },
          })),
        },

        // ----------------------------------------------
        // Learner Roles
        // ----------------------------------------------

        roles: {
          create: uniqueRoleIds.map((roleId) => ({
            learnerRole: {
              connect: {
                id: roleId,
              },
            },
          })),
        },

        // ----------------------------------------------
        // Departments
        // ----------------------------------------------

        departments: {
          create: uniqueDepartmentIds.map((departmentId) => ({
            department: {
              connect: {
                id: departmentId,
              },
            },
          })),
        },

        // ----------------------------------------------
        // Categories
        // ----------------------------------------------

        categories: {
          create: uniqueCategoryIds.map((categoryId) => ({
            category: {
              connect: {
                id: categoryId,
              },
            },
          })),
        },

        // ----------------------------------------------
        // Courses
        // ----------------------------------------------

        courses: {
          create: uniqueCourseIds.map((courseId) => ({
            course: {
              connect: {
                id: courseId,
              },
            },
          })),
        },
      },

      select: this.getAssignmentSelect(),
    });

    return this.formatAssignment(assignment);
  }

  // ==================================================
  // SELECT
  // ==================================================
  private getAssignmentSelect() {
    return {
      id: true,
      status: true,
      dueDate: true,
      createdAt: true,
      updatedAt: true,

      // ----------------------------------------------
      // Schools
      // ----------------------------------------------

      schools: {
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

      // ----------------------------------------------
      // Learner Roles
      // ----------------------------------------------

      roles: {
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

      // ----------------------------------------------
      // Departments
      // ----------------------------------------------

      departments: {
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

      // ----------------------------------------------
      // Categories
      // ----------------------------------------------

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

      // ----------------------------------------------
      // Courses
      // ----------------------------------------------

      courses: {
        select: {
          course: {
            select: {
              id: true,
              title: true,
              dueDate: true,
            },
          },
        },
      },
    };
  }

  // ==================================================
  // FORMAT
  // ==================================================

  private formatAssignment(assignment: any) {
    return {
      id: assignment.id,
      status: assignment.status,
      dueDate: assignment.dueDate,

      schools: assignment.schools.map((item: any) => item.school),

      roles: assignment.roles.map((item: any) => item.learnerRole),

      departments: assignment.departments.map((item: any) => item.department),

      categories: assignment.categories.map((item: any) => item.category),

      courses: assignment.courses.map((item: any) => item.course),

      createdAt: assignment.createdAt,
      updatedAt: assignment.updatedAt,
    };
  }

  // ==================================================
  // Find
  // ==================================================

  async findAll(status?: string) {
    const assignments = await this.prisma.courseAssignment.findMany({
      where: status
        ? {
            status: status as any,
          }
        : undefined,

      orderBy: {
        createdAt: 'desc',
      },

      select: this.getAssignmentSelect(),
    });

    return {
      message: 'Course assignments retrieved successfully',
      items: assignments.map((assignment) => this.formatAssignment(assignment)),
    };
  }

  // ==================================================
  // Find by Id
  // ==================================================

  async findOne(id: string) {
    const assignment = await this.prisma.courseAssignment.findUnique({
      where: {
        id,
      },

      select: this.getAssignmentSelect(),
    });

    if (!assignment) {
      throw new NotFoundException('Course assignment not found');
    }

    return this.formatAssignment(assignment);
  }

  // ==================================================
  // UPDATE
  // ==================================================

  async update(id: string, dto: UpdateCourseAssignmentDto) {
    // --------------------------------------------------
    // 1. Check assignment
    // --------------------------------------------------

    const existing = await this.prisma.courseAssignment.findUnique({
      where: {
        id,
      },
    });

    if (!existing) {
      throw new NotFoundException('Course assignment not found');
    }

    // --------------------------------------------------
    // 2. Get unique IDs
    // --------------------------------------------------

    const schoolIds = [...new Set(dto.schoolIds ?? [])];
    const roleIds = [...new Set(dto.roleIds ?? [])];
    const departmentIds = [...new Set(dto.departmentIds ?? [])];
    const categoryIds = [...new Set(dto.categoryIds ?? [])];
    const courseIds = [...new Set(dto.courseIds ?? [])];

    // --------------------------------------------------
    // 3. Resolve courses from categories
    // --------------------------------------------------

    const resolvedCourseIds = await this.resolveCourseIds(
      categoryIds,
      courseIds,
    );

    if (resolvedCourseIds.length === 0) {
      throw new ConflictException(
        'At least one course or category must be selected',
      );
    }

    const uniqueCourseIds = [...new Set(resolvedCourseIds)];

    // --------------------------------------------------
    // 4. Validate schools
    // --------------------------------------------------

    if (schoolIds.length > 0) {
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
          'One or more selected schools were not found or inactive',
        );
      }
    }

    // --------------------------------------------------
    // 5. Validate learner roles
    // --------------------------------------------------

    if (roleIds.length > 0) {
      const roles = await this.prisma.learnerRole.findMany({
        where: {
          id: {
            in: roleIds,
          },
          isActive: true,
        },
        select: {
          id: true,

          schoolMappings: {
            where: {
              schoolId: {
                in: schoolIds,
              },
            },
            select: {
              schoolId: true,
            },
          },
        },
      });

      if (roles.length !== roleIds.length) {
        throw new NotFoundException(
          'One or more selected learner roles were not found or inactive',
        );
      }

      // If schools are selected, every role must
      // be assigned to every selected school.
      if (schoolIds.length > 0) {
        for (const role of roles) {
          if (role.schoolMappings.length !== schoolIds.length) {
            throw new ConflictException(
              `Learner role ${role.id} is not assigned to all selected schools`,
            );
          }
        }
      }
    }

    // --------------------------------------------------
    // 6. Validate departments
    // --------------------------------------------------

    if (departmentIds.length > 0) {
      const departments = await this.prisma.department.findMany({
        where: {
          id: {
            in: departmentIds,
          },
          isActive: true,
        },
        select: {
          id: true,

          schoolMappings: {
            where: {
              schoolId: {
                in: schoolIds,
              },
            },
            select: {
              schoolId: true,
            },
          },
        },
      });

      if (departments.length !== departmentIds.length) {
        throw new NotFoundException(
          'One or more selected departments were not found or inactive',
        );
      }

      // If schools are selected, every department must
      // be assigned to every selected school.
      if (schoolIds.length > 0) {
        for (const department of departments) {
          if (department.schoolMappings.length !== schoolIds.length) {
            throw new ConflictException(
              `Department ${department.id} is not assigned to all selected schools`,
            );
          }
        }
      }
    }

    // --------------------------------------------------
    // 7. Validate categories
    // --------------------------------------------------

    if (categoryIds.length > 0) {
      const categories = await this.prisma.category.findMany({
        where: {
          id: {
            in: categoryIds,
          },
        },
        select: {
          id: true,
        },
      });

      if (categories.length !== categoryIds.length) {
        throw new NotFoundException(
          'One or more selected categories were not found',
        );
      }
    }

    // --------------------------------------------------
    // 8. Validate courses
    // --------------------------------------------------

    const courses = await this.prisma.course.findMany({
      where: {
        id: {
          in: uniqueCourseIds,
        },
      },
      select: {
        id: true,
      },
    });

    if (courses.length !== uniqueCourseIds.length) {
      throw new NotFoundException(
        'One or more selected courses were not found',
      );
    }

    // --------------------------------------------------
    // 9. Update assignment
    // --------------------------------------------------

    const assignment = await this.prisma.$transaction(async (tx) => {
      // ------------------------------------------------
      // Remove old mappings
      // ------------------------------------------------

      await tx.courseAssignmentSchool.deleteMany({
        where: {
          assignmentId: id,
        },
      });

      await tx.courseAssignmentRole.deleteMany({
        where: {
          assignmentId: id,
        },
      });

      await tx.courseAssignmentDepartment.deleteMany({
        where: {
          assignmentId: id,
        },
      });

      await tx.courseAssignmentCategory.deleteMany({
        where: {
          assignmentId: id,
        },
      });

      await tx.courseAssignmentCourse.deleteMany({
        where: {
          assignmentId: id,
        },
      });

      // ------------------------------------------------
      // Update assignment + create new mappings
      // ------------------------------------------------

      return tx.courseAssignment.update({
        where: {
          id,
        },

        data: {
          ...(dto.status !== undefined && {
            status: dto.status,
          }),

          ...(dto.dueDate !== undefined && {
            dueDate: dto.dueDate ? new Date(dto.dueDate) : null,
          }),

          // Schools
          schools: {
            create: schoolIds.map((schoolId) => ({
              school: {
                connect: {
                  id: schoolId,
                },
              },
            })),
          },

          // Learner roles
          roles: {
            create: roleIds.map((roleId) => ({
              learnerRole: {
                connect: {
                  id: roleId,
                },
              },
            })),
          },

          // Departments
          departments: {
            create: departmentIds.map((departmentId) => ({
              department: {
                connect: {
                  id: departmentId,
                },
              },
            })),
          },

          // Categories
          categories: {
            create: categoryIds.map((categoryId) => ({
              category: {
                connect: {
                  id: categoryId,
                },
              },
            })),
          },

          // Courses
          courses: {
            create: uniqueCourseIds.map((courseId) => ({
              course: {
                connect: {
                  id: courseId,
                },
              },
            })),
          },
        },

        select: this.getAssignmentSelect(),
      });
    });

    return this.formatAssignment(assignment);
  }

  // ==================================================
  // Remove
  // ==================================================

  async remove(id: string) {
    // --------------------------------------------------
    // 1. Check assignment exists
    // --------------------------------------------------

    const existing = await this.prisma.courseAssignment.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    if (!existing) {
      throw new NotFoundException('Course assignment not found');
    }

    // --------------------------------------------------
    // 2. Delete assignment + all mappings
    // --------------------------------------------------

    await this.prisma.$transaction(async (tx) => {
      await tx.courseAssignmentSchool.deleteMany({
        where: {
          assignmentId: id,
        },
      });

      await tx.courseAssignmentRole.deleteMany({
        where: {
          assignmentId: id,
        },
      });

      await tx.courseAssignmentDepartment.deleteMany({
        where: {
          assignmentId: id,
        },
      });

      await tx.courseAssignmentCategory.deleteMany({
        where: {
          assignmentId: id,
        },
      });

      await tx.courseAssignmentCourse.deleteMany({
        where: {
          assignmentId: id,
        },
      });

      await tx.courseAssignment.delete({
        where: {
          id,
        },
      });
    });

    return {
      message: 'Course assignment deleted successfully',
    };
  }
}
