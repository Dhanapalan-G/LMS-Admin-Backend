import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateCourseAssignmentDto } from './dto/create-course-assignment.dto';
import { UpdateCourseAssignmentDto } from './dto/update-course-assignment.dto';
import { CourseAssignmentResponseDto } from './dto/course-assignment-response.dto';
import { CourseAssignmentsService } from './course-assignment.service';
import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { AdminRole } from '../generated/prisma/enums';

@ApiTags('Admin - Course Assignments')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/course-assignments')
export class CourseAssignmentsController {
  constructor(
    private readonly courseAssignmentsService: CourseAssignmentsService,
  ) {}

  // --------------------------------------------------
  // CREATE
  // --------------------------------------------------

  @Post()
  @ApiOperation({
    summary: 'Create course assignment',
    description:
      'Assign courses to selected schools, roles, departments and categories.',
  })
  @ApiResponse({
    status: 201,
    description: 'Course assignment created successfully',
    type: CourseAssignmentResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid assignment data',
  })
  @ApiResponse({
    status: 404,
    description: 'School, role, department, category or course not found',
  })
  async create(
    @Body() dto: CreateCourseAssignmentDto,
  ): Promise<CourseAssignmentResponseDto> {
    return this.courseAssignmentsService.create(dto);
  }

  // --------------------------------------------------
  // LIST
  // --------------------------------------------------

  @Get()
  @ApiOperation({
    summary: 'Get course assignments',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ['ACTIVE', 'INACTIVE'],
  })
  @ApiResponse({
    status: 200,
    description: 'Course assignments retrieved successfully',
  })
  async findAll(@Query('status') status?: string) {
    return this.courseAssignmentsService.findAll(status);
  }

  // --------------------------------------------------
  // GET BY ID
  // --------------------------------------------------

  @Get(':id')
  @ApiOperation({
    summary: 'Get course assignment by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Course assignment ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Course assignment retrieved successfully',
    type: CourseAssignmentResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Course assignment not found',
  })
  async findOne(@Param('id') id: string): Promise<CourseAssignmentResponseDto> {
    return this.courseAssignmentsService.findOne(id);
  }

  // --------------------------------------------------
  // UPDATE
  // --------------------------------------------------

  @Patch(':id')
  @ApiOperation({
    summary: 'Update course assignment',
  })
  @ApiParam({
    name: 'id',
    description: 'Course assignment ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Course assignment updated successfully',
    type: CourseAssignmentResponseDto,
  })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateCourseAssignmentDto,
  ): Promise<CourseAssignmentResponseDto> {
    return this.courseAssignmentsService.update(id, dto);
  }

  // --------------------------------------------------
  // DELETE
  // --------------------------------------------------

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete course assignment',
  })
  @ApiParam({
    name: 'id',
    description: 'Course assignment ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Course assignment deleted successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Course assignment not found',
  })
  async remove(@Param('id') id: string) {
    return this.courseAssignmentsService.remove(id);
  }
}
