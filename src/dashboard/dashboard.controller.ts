import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { DashboardService } from './dashboard.service';
import { DashboardQueryDto } from './dto/dashboard-query.dto';
import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { AdminRole, CourseStatus } from '../generated/prisma/enums';
import { OverdueLearnerQueryDto } from './dto/learner-query.dto';
import { DashboardResponseDto } from './dto/dashboard-response.dto';
import { OverdueLearnerResponseDto } from './dto/learner-response.dto';

@ApiTags('Admin Dashboard')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}
  @Get()
  @ApiOperation({
    summary: 'Get admin dashboard',
    description:
      'Returns dashboard statistics with optional date, course, board, school, and learner role filters.',
  })
  @ApiQuery({
    name: 'fromDate',
    required: false,
    type: String,
    example: '2026-09-01',
    description: 'Filter dashboard records from this date',
  })
  @ApiQuery({
    name: 'toDate',
    required: false,
    type: String,
    example: '2026-09-20',
    description: 'Filter dashboard records up to this date',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: CourseStatus,
    example: CourseStatus.PUBLISHED,
    description: 'Filter courses by course status',
  })
  @ApiQuery({
    name: 'isMandatory',
    required: false,
    type: Boolean,
    example: true,
    description: 'Filter courses by mandatory or optional status',
  })
  @ApiQuery({
    name: 'board',
    required: false,
    type: String,
    example: 'CBSE',
    description: 'Filter dashboard data by school board',
  })
  @ApiQuery({
    name: 'schoolId',
    required: false,
    type: String,
    format: 'uuid',
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Filter dashboard data by school ID',
  })
  @ApiQuery({
    name: 'roleId',
    required: false,
    type: String,
    format: 'uuid',
    example: '550e8400-e29b-41d4-a716-446655440001',
    description: 'Filter dashboard data by learner role ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Dashboard statistics retrieved successfully',
    type: DashboardResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - user does not have permission to view dashboard',
  })
  async getDashboard(@Query() query: DashboardQueryDto) {
    return this.dashboardService.getDashboard(query);
  }

  @Get('overdue-learners')
  @ApiOperation({
    summary: 'Get overdue learners',
    description:
      'Returns learners who have overdue course enrollments and have not completed them, with optional search, organization filters, and pagination.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    example: 'John',
    description: 'Search learner by name, email, or employee ID',
  })
  @ApiQuery({
    name: 'roleId',
    required: false,
    type: String,
    format: 'uuid',
    example: '550e8400-e29b-41d4-a716-446655440001',
    description: 'Filter overdue learners by learner role ID',
  })
  @ApiQuery({
    name: 'schoolId',
    required: false,
    type: String,
    format: 'uuid',
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Filter overdue learners by school ID',
  })
  @ApiQuery({
    name: 'departmentId',
    required: false,
    type: String,
    format: 'uuid',
    example: '550e8400-e29b-41d4-a716-446655440002',
    description: 'Filter overdue learners by department ID',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Page number',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
    description: 'Number of records per page',
  })
  @ApiResponse({
    status: 200,
    description: 'Overdue learners retrieved successfully',
    type: OverdueLearnerResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description:
      'Forbidden - user does not have permission to view overdue learners',
  })
  async getOverdueLearners(@Query() query: OverdueLearnerQueryDto) {
    return this.dashboardService.getOverdueLearners(query);
  }
}
