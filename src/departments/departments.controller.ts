import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
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
  async create(@Req() req: any, @Body() dto: CreateDepartmentDto) {
    return this.departmentsService.create(req.user.schoolId, dto);
  }

  // =======================================================
  // GET ALL
  // =======================================================

  @Get()
  @ApiOperation({
    summary: 'Get all departments',
    description:
      'Retrieves all departments belonging to the authenticated admin school.',
  })
  @ApiResponse({
    status: 200,
    description: 'Departments retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Departments retrieved successfully',
        data: [
          {
            id: 'department-uuid-1',
            schoolId: 'school-uuid',
            name: 'Mathematics',
            code: 'MATH',
            description: 'Mathematics department',
            isActive: true,
            createdAt: '2026-09-15T10:00:00.000Z',
            updatedAt: '2026-09-15T10:00:00.000Z',
          },
          {
            id: 'department-uuid-2',
            schoolId: 'school-uuid',
            name: 'Science',
            code: 'SCI',
            description: 'Science department',
            isActive: true,
            createdAt: '2026-09-15T10:00:00.000Z',
            updatedAt: '2026-09-15T10:00:00.000Z',
          },
        ],
      },
    },
  })
  async findAll(@Req() req: any) {
    return this.departmentsService.findAll(req.user.schoolId);
  }

  // =======================================================
  // GET ONE
  // =======================================================

  @Get(':id')
  @ApiOperation({
    summary: 'Get department by ID',
    description:
      'Retrieves a department belonging to the authenticated admin school.',
  })
  @ApiParam({
    name: 'id',
    description: 'Department ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Department retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Department retrieved successfully',
        data: {
          id: 'department-uuid',
          schoolId: 'school-uuid',
          name: 'Mathematics',
          code: 'MATH',
          description: 'Mathematics department',
          isActive: true,
          createdAt: '2026-09-15T10:00:00.000Z',
          updatedAt: '2026-09-15T10:00:00.000Z',
          _count: {
            users: 25,
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Department not found.',
  })
  async findOne(@Req() req: any, @Param('id') id: string) {
    return this.departmentsService.findOne(req.user.schoolId, id);
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
  async update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() dto: UpdateDepartmentDto,
  ) {
    return this.departmentsService.update(req.user.schoolId, id, dto);
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
  async remove(@Req() req: any, @Param('id') id: string) {
    return this.departmentsService.remove(req.user.schoolId, id);
  }
}
