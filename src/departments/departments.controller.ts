import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { DepartmentsService } from './departments.service';

import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { RolesGuard } from '../common/guards/roles.guard';

import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';

import { AdminRole } from '../generated/prisma/enums';
import { PaginationDto } from '../common/dto/pagination.dto';

@ApiTags('Admin - Departments')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  // =======================================================
  // CREATE
  // =======================================================

  @Post()
  @ApiOperation({
    summary: 'Create department',
    description: 'Creates a new department for the authenticated admin school.',
  })
  @ApiBody({
    type: CreateDepartmentDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Department created successfully.',
    schema: {
      example: {
        success: true,
        message: 'Department created successfully',
        data: {
          id: 'department-uuid',
          schoolId: 'school-uuid',
          name: 'Mathematics',
          code: 'MATH',
          description: 'Mathematics department',
          isActive: true,
          createdAt: '2026-09-15T10:00:00.000Z',
          updatedAt: '2026-09-15T10:00:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Department already exists for this school.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. Admin access required.',
  })
  @ApiResponse({
    status: 404,
    description: 'School not found.',
  })
  async create(@Body() dto: CreateDepartmentDto) {
    return this.departmentsService.create(dto);
  }

  // =======================================================
  // GET ALL
  // =======================================================

  @Get()
  @ApiOperation({
    summary: 'Get all departments',
    description:
      'Retrieves paginated departments with optional school, search, and status filters.',
  })
  @ApiQuery({
    name: 'schoolId',
    required: false,
    type: String,
    example: 'school-uuid',
    description: 'Filter departments by school ID.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    example: 'math',
    description: 'Search departments by name or code.',
  })
  @ApiQuery({
    name: 'isActive',
    required: false,
    type: String,
    example: 'true',
    description: 'Filter departments by active status.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
  })
  async findAll(
    @Req() req: any,
    @Query() paginationDto: PaginationDto,
    @Query('schoolId') schoolId?: string,
    @Query('search') search?: string,
    @Query('isActive') isActive?: string,
  ) {
    return this.departmentsService.findAll(
      schoolId ?? req.user.schoolId,
      paginationDto,
      search,
      isActive !== undefined ? isActive === 'true' : undefined,
    );
  }

  // =======================================================
  // GET ONE
  // =======================================================

  @Get(':id')
  @ApiOperation({
    summary: 'Get department by ID',
    description:
      'Returns department details including learner statistics, completion, certification, overdue learners, publishing status, and assigned school.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: 'department-uuid',
    description: 'Unique department ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Department retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Request successful',
        data: {
          id: 'department-uuid',
          name: 'Maths',
          code: 'DEPT001',
          description: 'Mathematics department',

          statistics: {
            totalLearners: 50,
            activeLearners: 40,
            completionPercentage: 72,
            certifiedLearners: 18,
            overdueLearners: 4,
          },

          publishingStatus: 'ACTIVE',

          schoolsAssigned: [
            {
              id: 'school-uuid',
              name: 'SBOA School & Junior College, Chennai',
              code: 'SBOA001',
            },
          ],

          overallCompletion: 72,
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Access token is missing or invalid.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. User does not have permission.',
  })
  @ApiResponse({
    status: 404,
    description: 'Department not found.',
    schema: {
      example: {
        success: false,
        message: 'Department not found',
      },
    },
  })
  async findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(id);
  }

  // =======================================================
  // UPDATE
  // =======================================================

  @Patch(':id')
  @ApiOperation({
    summary: 'Update department',
    description:
      'Updates a department belonging to the authenticated admin school.',
  })
  @ApiParam({
    name: 'id',
    description: 'Department ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiBody({
    type: UpdateDepartmentDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Department updated successfully.',
    schema: {
      example: {
        success: true,
        message: 'Department updated successfully',
        data: {
          id: 'department-uuid',
          schoolId: 'school-uuid',
          name: 'Computer Science',
          code: 'CS',
          description: 'Computer Science department',
          isActive: true,
          createdAt: '2026-09-15T10:00:00.000Z',
          updatedAt: '2026-09-15T11:00:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Department name already exists for this school.',
  })
  @ApiResponse({
    status: 404,
    description: 'Department not found.',
  })
  async update(@Param('id') id: string, @Body() dto: UpdateDepartmentDto) {
    return this.departmentsService.update(id, dto);
  }

  // =======================================================
  // DELETE
  // =======================================================

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete department',
    description:
      'Deletes a department if no users are currently assigned to it.',
  })
  @ApiParam({
    name: 'id',
    description: 'Department ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Department deleted successfully.',
    schema: {
      example: {
        success: true,
        message: 'Department deleted successfully',
        data: {
          message: 'Department deleted successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description:
      'Department cannot be deleted because users are assigned to it.',
  })
  @ApiResponse({
    status: 404,
    description: 'Department not found.',
  })
  async remove(@Param('id') id: string) {
    return this.departmentsService.remove(id);
  }
}
