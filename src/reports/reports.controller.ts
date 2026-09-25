import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { ReportsService } from './reports.service';
import { ReportQueryDto } from './dto/report-query.dto';
import { RolesGuard } from '../common/guards/roles.guard';
import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminRole } from '../generated/prisma/enums';
import { IndividualUserReportQueryDto } from './dto/Individual-user-report-query.dto';

@ApiTags('Admin - Reports')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('api/v1/admin/reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('school-wise')
  @ApiOperation({
    summary: 'Get school-wise learning report',
    description:
      'Returns school-wise learning performance including learners, assigned courses, assigned modules, completion, in-progress, not-started, overdue learning, average quiz score and completion percentage. Supports multi-select filtering and column-wise sorting.',
  })
  @ApiQuery({
    name: 'fromDate',
    required: false,
    type: String,
    format: 'date',
    example: '2026-01-01',
    description: 'Start date for the report period.',
  })
  @ApiQuery({
    name: 'toDate',
    required: false,
    type: String,
    format: 'date',
    example: '2026-12-31',
    description: 'End date for the report period.',
  })
  @ApiQuery({
    name: 'board',
    required: false,
    type: String,
    example: 'CBSE',
    description: 'Filter by school board.',
  })
  @ApiQuery({
    name: 'schoolIds',
    required: false,
    type: [String],
    description:
      'Filter by one or more school IDs. A single school ID is also supported.',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440003',
    ],
  })
  @ApiQuery({
    name: 'roleIds',
    required: false,
    type: [String],
    description:
      'Filter by one or more learner role IDs. A single role ID is also supported.',
    example: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440005',
    ],
  })
  @ApiQuery({
    name: 'departmentIds',
    required: false,
    type: [String],
    description:
      'Filter by one or more department IDs. A single department ID is also supported.',
    example: ['550e8400-e29b-41d4-a716-446655440002'],
  })
  @ApiQuery({
    name: 'categoryIds',
    required: false,
    type: [String],
    description:
      'Filter by one or more learning category IDs. A single category ID is also supported.',
    example: ['550e8400-e29b-41d4-a716-446655440008'],
  })
  @ApiQuery({
    name: 'courseIds',
    required: false,
    type: [String],
    description:
      'Filter by one or more learning course IDs. A single course ID is also supported.',
    example: ['550e8400-e29b-41d4-a716-446655440004'],
  })
  @ApiQuery({
    name: 'completionStatuses',
    required: false,
    type: [String],
    enum: ['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED', 'OVERDUE'],
    description: 'Filter by one or more completion statuses.',
    example: ['COMPLETED', 'IN_PROGRESS'],
  })
  @ApiQuery({
    name: 'certificationStatuses',
    required: false,
    type: [String],
    enum: ['CERTIFIED', 'NOT_CERTIFIED'],
    description: 'Filter by one or more certification statuses.',
    example: ['CERTIFIED', 'NOT_CERTIFIED'],
  })
  @ApiQuery({
    name: 'isMandatory',
    required: false,
    type: Boolean,
    example: true,
    description: 'Filter courses based on whether they are mandatory.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    example: 'SBOA',
    description: 'Search schools by school name or school code.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Page number.',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 5,
    description: 'Number of records per page. Maximum 100.',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    type: String,
    example: 'completionPercentage',
    description: 'Column used for sorting the school-wise report.',
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    enum: ['asc', 'desc'],
    example: 'desc',
    description:
      'Sort direction. Use asc for ascending or desc for descending.',
  })
  @ApiResponse({
    status: 200,
    description: 'School-wise report retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'School-wise report retrieved successfully',

        data: {
          summary: {
            schools: 7,
            learners: 1209,
            coursesAssigned: 126,
            modulesAssigned: 504,
            completed: 917,
            inProgress: 184,
            notStarted: 108,
            overdue: 32,
            completionRate: 76,
          },

          schools: [
            {
              school: {
                id: 'school-id',
                name: 'SBOA Public School, Coimbatore',
                code: 'SBOA-CBE',
                board: 'CBSE',
              },

              users: 180,
              assigned: 20,
              modulesAssigned: 80,
              completed: 150,
              inProgress: 20,
              notStarted: 10,
              overdue: 6,
              avgQuiz: 88,
              completionPercentage: 89,
            },

            {
              school: {
                id: 'school-id-2',
                name: 'Delhi Public School — Sector 45',
                code: 'DPS-S45',
                board: 'CBSE',
              },

              users: 210,
              assigned: 20,
              modulesAssigned: 72,
              completed: 171,
              inProgress: 24,
              notStarted: 15,
              overdue: 7,
              avgQuiz: 86,
              completionPercentage: 82,
            },
          ],

          pagination: {
            page: 1,
            limit: 5,
            total: 7,
            totalPages: 2,
          },
        },
      },
    },
  })
  async getSchoolWiseReport(@Query() query: ReportQueryDto) {
    return this.reportsService.getSchoolWiseReport(query);
  }
  @Get('school-wise/:schoolId')
  @ApiOperation({
    summary: 'Get detailed school-wise report',
    description:
      'Returns detailed learning performance for a specific school, including summary statistics, department performance and role-wise breakdown. Supports filtering by learner roles, departments, learning categories, courses, completion status and certification status.',
  })
  @ApiParam({
    name: 'schoolId',
    description: 'School ID.',
    example: '550e8400-e29b-41d4-a716-446655440000',
    type: String,
  })
  @ApiQuery({
    name: 'fromDate',
    required: false,
    type: String,
    format: 'date',
    example: '2026-01-01',
    description: 'Start date for the report period.',
  })
  @ApiQuery({
    name: 'toDate',
    required: false,
    type: String,
    format: 'date',
    example: '2026-12-31',
    description: 'End date for the report period.',
  })
  @ApiQuery({
    name: 'board',
    required: false,
    type: String,
    example: 'CBSE',
    description: 'Filter by school board.',
  })
  @ApiQuery({
    name: 'roleIds',
    required: false,
    type: [String],
    description: 'Filter by one or more learner role IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440005',
    ],
  })
  @ApiQuery({
    name: 'departmentIds',
    required: false,
    type: [String],
    description: 'Filter by one or more department IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440002'],
  })
  @ApiQuery({
    name: 'categoryIds',
    required: false,
    type: [String],
    description: 'Filter by one or more learning category IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440008'],
  })
  @ApiQuery({
    name: 'courseIds',
    required: false,
    type: [String],
    description: 'Filter by one or more learning course IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440004'],
  })
  @ApiQuery({
    name: 'completionStatuses',
    required: false,
    type: [String],
    description: 'Filter by one or more learning completion statuses.',
    enum: ['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED', 'OVERDUE'],
    example: ['COMPLETED', 'IN_PROGRESS'],
  })
  @ApiQuery({
    name: 'certificationStatuses',
    required: false,
    type: [String],
    description: 'Filter by one or more certification statuses.',
    enum: ['CERTIFIED', 'NOT_CERTIFIED'],
    example: ['CERTIFIED', 'NOT_CERTIFIED'],
  })
  @ApiQuery({
    name: 'isMandatory',
    required: false,
    type: Boolean,
    example: true,
    description: 'Filter courses based on whether they are mandatory.',
  })
  @ApiResponse({
    status: 200,
    description: 'School report retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'School report retrieved successfully',

        data: {
          school: {
            id: '550e8400-e29b-41d4-a716-446655440000',
            name: 'SBOA Public School, Coimbatore',
            code: 'SBOA-CBE',
            board: 'CBSE',
          },

          summary: {
            totalLearners: 180,
            completionPercentage: 89,
            coursesAssigned: 20,
            modulesCompleted: 150,
            overdueLearners: 6,
            certified: 108,
          },

          departments: [
            {
              id: 'department-id',
              name: 'Academic',
              users: 99,
              completionPercentage: 97,
              overdue: 2,
              status: 'ON_TRACK',

              roles: [
                {
                  id: 'role-id',
                  name: 'Teacher',
                  users: 33,
                  completionPercentage: 98,
                },
                {
                  id: 'role-id-2',
                  name: 'Compartment Head',
                  users: 33,
                  completionPercentage: 97,
                },
                {
                  id: 'role-id-3',
                  name: 'Non-Teaching Staff',
                  users: 33,
                  completionPercentage: 100,
                },
              ],
            },
          ],
        },
      },
    },
  })
  async getSchoolReport(
    @Param('schoolId') schoolId: string,
    @Query() query: ReportQueryDto,
  ) {
    return this.reportsService.getSchoolReport(schoolId, query);
  }

  @Get('role-wise')
  @ApiOperation({
    summary: 'Get role-wise learning report',
    description:
      'Returns learning performance grouped by learner role, including users, assigned courses, assigned modules, completed, in-progress, not-started, overdue learning, average quiz score and completion percentage. Supports multi-select filtering by school, learner role, department, learning category, course, completion status and certification status.',
  })
  @ApiQuery({
    name: 'fromDate',
    required: false,
    type: String,
    format: 'date',
    example: '2026-01-01',
    description: 'Start date for the report period.',
  })
  @ApiQuery({
    name: 'toDate',
    required: false,
    type: String,
    format: 'date',
    example: '2026-12-31',
    description: 'End date for the report period.',
  })
  @ApiQuery({
    name: 'board',
    required: false,
    type: String,
    example: 'CBSE',
    description: 'Filter by school board.',
  })
  @ApiQuery({
    name: 'schoolIds',
    required: false,
    type: [String],
    description: 'Filter by one or more school IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440003',
    ],
  })
  @ApiQuery({
    name: 'roleIds',
    required: false,
    type: [String],
    description: 'Filter by one or more learner role IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440005',
    ],
  })
  @ApiQuery({
    name: 'departmentIds',
    required: false,
    type: [String],
    description: 'Filter by one or more department IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440002'],
  })
  @ApiQuery({
    name: 'categoryIds',
    required: false,
    type: [String],
    description: 'Filter by one or more learning category IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440008'],
  })
  @ApiQuery({
    name: 'courseIds',
    required: false,
    type: [String],
    description: 'Filter by one or more learning course IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440004'],
  })
  @ApiQuery({
    name: 'completionStatuses',
    required: false,
    type: [String],
    description: 'Filter by one or more completion statuses.',
    enum: ['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED', 'OVERDUE'],
    example: ['COMPLETED', 'IN_PROGRESS'],
  })
  @ApiQuery({
    name: 'certificationStatuses',
    required: false,
    type: [String],
    description: 'Filter by one or more certification statuses.',
    enum: ['CERTIFIED', 'NOT_CERTIFIED'],
    example: ['CERTIFIED', 'NOT_CERTIFIED'],
  })
  @ApiQuery({
    name: 'isMandatory',
    required: false,
    type: Boolean,
    example: true,
    description: 'Filter courses based on whether they are mandatory.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    example: 'Teacher',
    description: 'Search learner roles by role name or role code.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Page number.',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 5,
    description: 'Number of records per page. Maximum 100.',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    type: String,
    example: 'completionPercentage',
    description: 'Field used to sort role-wise report results.',
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    enum: ['asc', 'desc'],
    example: 'desc',
    description: 'Sort direction.',
  })
  @ApiResponse({
    status: 200,
    description: 'Role-wise report retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Role-wise report retrieved successfully',

        data: {
          // =====================================================
          // SUMMARY
          // =====================================================

          summary: {
            roles: 5,
            totalUsers: 666,
            coursesAssigned: 67,
            modules: 524,
            completed: 434,
            inProgress: 138,
            notStarted: 94,
            overdue: 64,
            completionPercentage: 73,
          },

          // =====================================================
          // ROLE COMPARISON
          // =====================================================

          roleComparison: [
            {
              id: 'role-id-1',
              name: 'Prime Member',
              completionPercentage: 90,
            },
            {
              id: 'role-id-2',
              name: 'Principal',
              completionPercentage: 82,
            },
            {
              id: 'role-id-3',
              name: 'Compartment Head',
              completionPercentage: 75,
            },
            {
              id: 'role-id-4',
              name: 'Teacher',
              completionPercentage: 68,
            },
            {
              id: 'role-id-5',
              name: 'Non-Teaching Staff',
              completionPercentage: 48,
            },
          ],

          // =====================================================
          // ROLE LIST
          // =====================================================

          roles: [
            {
              id: 'role-id-1',
              name: 'Prime Member',
              code: 'PRIME_MEMBER',

              users: 12,

              coursesAssigned: 13,

              modules: 52,

              completed: 11,

              inProgress: 1,

              notStarted: 0,

              overdue: 0,

              modulesCompleted: 45,

              avgQuiz: 92,

              completionPercentage: 90,
            },

            {
              id: 'role-id-2',
              name: 'Principal',
              code: 'PRINCIPAL',

              users: 48,

              coursesAssigned: 8,

              modules: 32,

              completed: 39,

              inProgress: 6,

              notStarted: 3,

              overdue: 2,

              modulesCompleted: 28,

              avgQuiz: 87,

              completionPercentage: 82,
            },

            {
              id: 'role-id-3',
              name: 'Compartment Head',
              code: 'COMPARTMENT_HEAD',

              users: 96,

              coursesAssigned: 15,

              modules: 68,

              completed: 72,

              inProgress: 18,

              notStarted: 6,

              overdue: 8,

              modulesCompleted: 55,

              avgQuiz: 81,

              completionPercentage: 75,
            },

            {
              id: 'role-id-4',
              name: 'Teacher',
              code: 'TEACHER',

              users: 420,

              coursesAssigned: 24,

              modules: 286,

              completed: 280,

              inProgress: 92,

              notStarted: 48,

              overdue: 38,

              modulesCompleted: 231,

              avgQuiz: 76,

              completionPercentage: 68,
            },

            {
              id: 'role-id-5',
              name: 'Non-Teaching Staff',
              code: 'NON_TEACHING_STAFF',

              users: 90,

              coursesAssigned: 7,

              modules: 86,

              completed: 32,

              inProgress: 21,

              notStarted: 37,

              overdue: 16,

              modulesCompleted: 61,

              avgQuiz: 61,

              completionPercentage: 48,
            },
          ],

          // =====================================================
          // PAGINATION
          // =====================================================

          pagination: {
            page: 1,
            limit: 5,
            total: 5,
            totalPages: 1,
          },
        },
      },
    },
  })
  async getRoleWiseReport(@Query() query: ReportQueryDto) {
    return this.reportsService.getRoleWiseReport(query);
  }

  @Get('department-wise')
  @ApiOperation({
    summary: 'Get department-wise learning report',
    description:
      'Returns learning performance grouped by department, including users, assigned courses, completed learning, in-progress learning, not-started learning, overdue learning, average quiz score and completion percentage.',
  })
  @ApiQuery({
    name: 'fromDate',
    required: false,
    type: String,
    format: 'date',
    example: '2026-01-01',
    description: 'Start date for the report period.',
  })
  @ApiQuery({
    name: 'toDate',
    required: false,
    type: String,
    format: 'date',
    example: '2026-12-31',
    description: 'End date for the report period.',
  })
  @ApiQuery({
    name: 'board',
    required: false,
    type: String,
    example: 'CBSE',
    description: 'Filter by school board.',
  })
  @ApiQuery({
    name: 'schoolIds',
    required: false,
    type: [String],
    description: 'Filter by one or more school IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440003',
    ],
  })
  @ApiQuery({
    name: 'roleIds',
    required: false,
    type: [String],
    description: 'Filter by one or more learner role IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440005',
    ],
  })
  @ApiQuery({
    name: 'departmentIds',
    required: false,
    type: [String],
    description: 'Filter by one or more department IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440002'],
  })
  @ApiQuery({
    name: 'categoryIds',
    required: false,
    type: [String],
    description: 'Filter by one or more learning category IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440008'],
  })
  @ApiQuery({
    name: 'courseIds',
    required: false,
    type: [String],
    description: 'Filter by one or more learning course IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440004'],
  })
  @ApiQuery({
    name: 'completionStatuses',
    required: false,
    type: [String],
    description: 'Filter by one or more completion statuses.',
    enum: ['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED', 'OVERDUE'],
    example: ['COMPLETED', 'IN_PROGRESS'],
  })
  @ApiQuery({
    name: 'certificationStatuses',
    required: false,
    type: [String],
    description: 'Filter by one or more certification statuses.',
    enum: ['CERTIFIED', 'NOT_CERTIFIED'],
    example: ['CERTIFIED', 'NOT_CERTIFIED'],
  })
  @ApiQuery({
    name: 'isMandatory',
    required: false,
    type: Boolean,
    example: true,
    description: 'Filter courses based on whether they are mandatory.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    example: 'Teacher',
    description: 'Search learner roles by role name or role code.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Page number.',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 5,
    description: 'Number of records per page. Maximum 100.',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    type: String,
    example: 'completionPercentage',
    description: 'Field used to sort role-wise report results.',
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    enum: ['asc', 'desc'],
    example: 'desc',
    description: 'Sort direction.',
  })
  @ApiResponse({
    status: 200,
    description: 'Department-wise report retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Department-wise report retrieved successfully',
        data: {
          summary: {
            departments: 6,
            totalUsers: 513,
            coursesAssigned: 80,
            completed: 369,
            inProgress: 86,
            notStarted: 58,
            overdue: 40,
            avgQuiz: 76,
          },

          departmentComparison: [
            {
              id: 'department-id-1',
              name: 'Academic',
              completionPercentage: 76,
            },
            {
              id: 'department-id-2',
              name: 'Administration',
              completionPercentage: 61,
            },
            {
              id: 'department-id-3',
              name: 'HR',
              completionPercentage: 83,
            },
            {
              id: 'department-id-4',
              name: 'IT',
              completionPercentage: 79,
            },
            {
              id: 'department-id-5',
              name: 'Library',
              completionPercentage: 44,
            },
            {
              id: 'department-id-6',
              name: 'Sports',
              completionPercentage: 54,
            },
          ],

          departments: [
            {
              id: 'department-id-3',
              name: 'HR',

              users: 42,

              coursesAssigned: 12,

              completed: 35,

              inProgress: 5,

              notStarted: 2,

              overdue: 1,

              avgQuiz: 88,

              completionPercentage: 83,
            },
            {
              id: 'department-id-4',
              name: 'IT',

              users: 28,

              coursesAssigned: 16,

              completed: 22,

              inProgress: 4,

              notStarted: 2,

              overdue: 0,

              avgQuiz: 91,

              completionPercentage: 79,
            },
            {
              id: 'department-id-1',
              name: 'Academic',

              users: 99,

              coursesAssigned: 20,

              completed: 76,

              inProgress: 15,

              notStarted: 8,

              overdue: 2,

              avgQuiz: 84,

              completionPercentage: 76,
            },
          ],

          pagination: {
            page: 1,
            limit: 5,
            total: 6,
            totalPages: 2,
          },
        },
      },
    },
  })
  async getDepartmentWiseReport(@Query() query: ReportQueryDto) {
    return this.reportsService.getDepartmentWiseReport(query);
  }

  @Get('individual-users')
  @ApiOperation({
    summary: 'Get individual user learning report',
    description:
      'Returns a paginated list of learners with their department, learner role, school, learning progress and learning status.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Search by learner name, employee ID or email.',
    example: 'Karthik',
  })
  @ApiQuery({
    name: 'schoolId',
    required: false,
    type: String,
    format: 'uuid',
    description: 'Filter by one school.',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiQuery({
    name: 'learnerRoleId',
    required: false,
    type: String,
    format: 'uuid',
    description: 'Filter by one learner role.',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED', 'OVERDUE'],
    description: 'Filter by one learning status.',
    example: 'IN_PROGRESS',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Page number.',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
    description: 'Number of users per page.',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    type: String,
    example: 'progress',
    description:
      'Sort field. Supported values: name, email, employeeId, progress, status.',
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    enum: ['asc', 'desc'],
    example: 'desc',
    description: 'Sort direction.',
  })
  @ApiResponse({
    status: 200,
    description: 'Individual user report retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Individual user report retrieved successfully',
        data: {
          users: [
            {
              id: 'learner-id-1',
              name: 'Karthik Subramanian',
              email: 'karthik.s@lms.edu',
              employeeId: 'EMP010',

              department: {
                id: 'department-id',
                name: 'Management',
              },

              learnerRole: {
                id: 'role-id',
                name: 'Prime Member',
              },

              school: {
                id: 'school-id',
                name: 'Sri Vidya Mandir',
                code: 'SVM001',
                board: 'CBSE',
              },

              progress: 90,
              status: 'IN_PROGRESS',
            },
          ],

          pagination: {
            page: 1,
            limit: 10,
            total: 666,
            totalPages: 67,
          },
        },
      },
    },
  })
  async getIndividualUserReport(
    @Query()
    query: IndividualUserReportQueryDto,
  ) {
    return this.reportsService.getIndividualUserReport(query);
  }

  // ============================================================
  // INDIVIDUAL USER DETAILS
  // ============================================================

  @Get('individual-users/:learnerId')
  @ApiOperation({
    summary: 'Get individual learner report',
    description:
      'Returns detailed learning performance of a single learner including courses, modules, progress, quiz scores and certificates.',
  })
  @ApiParam({
    name: 'learnerId',
    description: 'Learner ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Individual learner report retrieved successfully.',
  })
  async getIndividualUserReportDetails(@Param('learnerId') learnerId: string) {
    return this.reportsService.getIndividualUserReportDetails(learnerId);
  }
}
