import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { CategoryStatus } from '../generated/prisma/enums';
import { isUUID } from 'class-validator';
import { CategoryQueryDto } from './dto/category-query.dto';
import { Prisma } from '../generated/prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly categorySelect = {
    id: true,
    name: true,
    description: true,
    status: true,
  };
  async create(createCategoryDto: CreateCategoryDto) {
    // --------------------------------------------
    // 1. Check category already exists
    // --------------------------------------------
    const existingCategory = await this.prisma.category.findUnique({
      where: {
        name: createCategoryDto.name,
      },
    });

    if (existingCategory) {
      throw new ConflictException('Category already exists');
    }

    // --------------------------------------------
    // 2. Validate selected courses
    // --------------------------------------------
    if (
      createCategoryDto.courseIds !== undefined &&
      createCategoryDto.courseIds.length > 0
    ) {
      const courseCount = await this.prisma.course.count({
        where: {
          id: {
            in: createCategoryDto.courseIds,
          },
        },
      });

      if (courseCount !== createCategoryDto.courseIds.length) {
        throw new NotFoundException(
          'One or more selected courses were not found',
        );
      }
    }

    // --------------------------------------------
    // 3. Create category + course mappings
    // --------------------------------------------
    return this.prisma.$transaction(async (tx) => {
      const category = await tx.category.create({
        data: {
          name: createCategoryDto.name,
          description: createCategoryDto.description,
          status: createCategoryDto.status,
        },
      });

      // ------------------------------------------
      // 4. Assign courses to category
      // ------------------------------------------
      if (
        createCategoryDto.courseIds !== undefined &&
        createCategoryDto.courseIds.length > 0
      ) {
        await tx.courseCategory.createMany({
          data: createCategoryDto.courseIds.map((courseId) => ({
            categoryId: category.id,
            courseId,
          })),
          skipDuplicates: true,
        });
      }

      // ------------------------------------------
      // 5. Return created category
      // ------------------------------------------
      const data = await tx.category.findUnique({
        where: {
          id: category.id,
        },
        select: this.categorySelect,
      });

      return {
        message: 'Category created successfully',
        data,
      };
    });
  }

  async findAll(query: CategoryQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    const skip = (page - 1) * limit;

    const where: Prisma.CategoryWhereInput = {
      ...(query.status !== undefined && {
        status: query.status,
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
            description: {
              contains: query.search,
              mode: 'insensitive',
            },
          },
        ],
      }),

      ...(query.roleId && {
        courseAssignmentCategories: {
          some: {
            assignment: {
              roles: {
                some: {
                  learnerRoleId: query.roleId,
                },
              },
            },
          },
        },
      }),

      ...(query.schoolId && {
        courseAssignmentCategories: {
          some: {
            assignment: {
              schools: {
                some: {
                  schoolId: query.schoolId,
                },
              },
            },
          },
        },
      }),

      ...(query.departmentId && {
        courseAssignmentCategories: {
          some: {
            assignment: {
              departments: {
                some: {
                  departmentId: query.departmentId,
                },
              },
            },
          },
        },
      }),
    };

    const [categories, total] = await this.prisma.$transaction([
      this.prisma.category.findMany({
        where,

        select: {
          id: true,
          name: true,
          description: true,
          status: true,
          createdAt: true,
          updatedAt: true,

          courses: {
            select: {
              course: {
                select: {
                  id: true,

                  _count: {
                    select: {
                      modules: true,
                    },
                  },

                  modules: {
                    select: {
                      _count: {
                        select: {
                          lessons: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        skip,
        take: limit,

        orderBy: {
          createdAt: 'desc',
        },
      }),

      this.prisma.category.count({
        where,
      }),
    ]);
    const items = categories.map((category) => {
      const courses = category.courses.map((item) => item.course);

      const courseCount = courses.length;

      const moduleCount = courses.reduce(
        (total, course) => total + course._count.modules,
        0,
      );

      const lessonCount = courses.reduce(
        (total, course) =>
          total +
          course.modules.reduce(
            (moduleTotal, module) => moduleTotal + module._count.lessons,
            0,
          ),
        0,
      );

      return {
        id: category.id,
        name: category.name,
        description: category.description,
        status: category.status,

        courseCount,
        moduleCount,
        lessonCount,

        createdAt: category.createdAt,
        updatedAt: category.updatedAt,
      };
    });
    const totalPages = Math.ceil(total / limit);

    return {
      message: 'Categories retrived successfully',
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

  async findOne(id: string) {
    if (!isUUID(id)) {
      throw new NotFoundException('Category not found');
    }

    const category = await this.prisma.category.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        name: true,
        description: true,
        status: true,
        createdAt: true,
        updatedAt: true,

        // ============================================================
        // CATEGORY -> COURSES
        // ============================================================
        courses: {
          select: {
            course: {
              select: {
                id: true,
                title: true,
                code: true,

                _count: {
                  select: {
                    modules: true,
                  },
                },

                modules: {
                  select: {
                    _count: {
                      select: {
                        lessons: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },

        // ============================================================
        // CATEGORY -> COURSE ASSIGNMENTS
        // Used for target roles and departments
        // ============================================================
        courseAssignmentCategories: {
          select: {
            assignment: {
              select: {
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

                departments: {
                  select: {
                    department: {
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

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    // ============================================================
    // EXTRACT ACTUAL COURSES FROM COURSE-CATEGORY MAPPING
    // ============================================================
    const courses = category.courses.map(
      (courseCategory) => courseCategory.course,
    );

    // ============================================================
    // COURSE COUNT
    // ============================================================
    const courseCount = courses.length;

    // ============================================================
    // MODULE COUNT
    // ============================================================
    const moduleCount = courses.reduce(
      (total, course) => total + course._count.modules,
      0,
    );

    // ============================================================
    // LESSON COUNT
    // ============================================================
    const lessonCount = courses.reduce(
      (total, course) =>
        total +
        course.modules.reduce(
          (moduleTotal, module) => moduleTotal + module._count.lessons,
          0,
        ),
      0,
    );

    // ============================================================
    // LEARNER COUNT
    // ============================================================
    const courseIds = courses.map((course) => course.id);

    const learnerEnrollments =
      courseIds.length > 0
        ? await this.prisma.enrollment.findMany({
            where: {
              courseId: {
                in: courseIds,
              },
            },
            select: {
              learnerId: true,
            },
            distinct: ['learnerId'],
          })
        : [];

    const learnerCount = learnerEnrollments.length;

    // ============================================================
    // TARGET ROLES
    // Remove duplicates
    // ============================================================
    const roleMap = new Map<
      string,
      {
        id: string;
        name: string;
        code: string;
      }
    >();

    // ============================================================
    // DEPARTMENTS
    // Remove duplicates
    // ============================================================
    const departmentMap = new Map<
      string,
      {
        id: string;
        name: string;
      }
    >();

    for (const categoryAssignment of category.courseAssignmentCategories) {
      const assignment = categoryAssignment.assignment;

      // ----------------------------
      // Roles
      // ----------------------------
      for (const roleMapping of assignment.roles) {
        const role = roleMapping.learnerRole;

        if (role) {
          roleMap.set(role.id, role);
        }
      }

      // ----------------------------
      // Departments
      // ----------------------------
      for (const departmentMapping of assignment.departments) {
        const department = departmentMapping.department;

        if (department) {
          departmentMap.set(department.id, department);
        }
      }
    }

    // ============================================================
    // FINAL RESPONSE
    // ============================================================
    return {
      message: 'Category retrieved successfully',
      data: {
        id: category.id,
        name: category.name,
        description: category.description,
        status: category.status,

        summary: {
          learners: learnerCount,
          courses: courseCount,
          modules: moduleCount,
          lessons: lessonCount,
        },

        targetRoles: Array.from(roleMap.values()),

        departments: Array.from(departmentMap.values()),

        courses: courses.map((course) => ({
          id: course.id,
          title: course.title,
          code: course.code,
        })),

        createdAt: category.createdAt,
        updatedAt: category.updatedAt,
      },
    };
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    // --------------------------------------------
    // 1. Check category exists
    // --------------------------------------------
    await this.findOne(id);

    // --------------------------------------------
    // 2. Check duplicate category name
    // --------------------------------------------
    if (updateCategoryDto.name !== undefined) {
      const existingCategory = await this.prisma.category.findFirst({
        where: {
          name: updateCategoryDto.name,
          NOT: {
            id,
          },
        },
      });

      if (existingCategory) {
        throw new ConflictException('Category already exists');
      }
    }

    // --------------------------------------------
    // 3. Validate courses
    // --------------------------------------------
    if (
      updateCategoryDto.courseIds !== undefined &&
      updateCategoryDto.courseIds.length > 0
    ) {
      const courseCount = await this.prisma.course.count({
        where: {
          id: {
            in: updateCategoryDto.courseIds,
          },
        },
      });

      if (courseCount !== updateCategoryDto.courseIds.length) {
        throw new NotFoundException(
          'One or more selected courses were not found',
        );
      }
    }

    // --------------------------------------------
    // 4. Update category + courses
    // --------------------------------------------
    return this.prisma.$transaction(async (tx) => {
      await tx.category.update({
        where: {
          id,
        },

        data: {
          ...(updateCategoryDto.name !== undefined && {
            name: updateCategoryDto.name,
          }),

          ...(updateCategoryDto.description !== undefined && {
            description: updateCategoryDto.description,
          }),

          ...(updateCategoryDto.status !== undefined && {
            status: updateCategoryDto.status,
          }),
        },
      });

      // ------------------------------------------
      // 5. Update course assignments
      // ------------------------------------------
      if (updateCategoryDto.courseIds !== undefined) {
        // Remove existing course mappings
        await tx.courseCategory.deleteMany({
          where: {
            categoryId: id,
          },
        });

        // Add new course mappings
        if (updateCategoryDto.courseIds.length > 0) {
          await tx.courseCategory.createMany({
            data: updateCategoryDto.courseIds.map((courseId) => ({
              categoryId: id,
              courseId,
            })),
            skipDuplicates: true,
          });
        }
      }

      // ------------------------------------------
      // 6. Return updated category
      // ------------------------------------------
      const data = await tx.category.findUnique({
        where: {
          id,
        },
        select: this.categorySelect,
      });

      return {
        message: 'Category updated successfully',
        data,
      };
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    const data = await this.prisma.category.update({
      where: {
        id,
      },
      data: {
        status: 'INACTIVE',
      },
      select: this.categorySelect,
    });

    return {
      message: 'Category removed successfully',
      data,
    };
  }
}
