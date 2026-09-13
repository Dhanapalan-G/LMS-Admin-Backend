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

import { PaginationDto } from '../../common/dto/pagination.dto';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CoursesService } from '../courses.service';
import { AuthTypeGuard } from '../../auth/guards/auth-type.guard';
import { AuthType } from '../../auth/decorators/auth-type.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { AdminRole } from '../../generated/prisma/client';

@ApiTags('Admin - Courses')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/courses')
export class AdminCoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @AuthType('ADMIN')
  @ApiOperation({
    summary: 'Create a course',
    description:
      'Creates a new course for the authenticated administrator or principal school.',
  })
  @ApiBody({
    type: CreateCourseDto,
    description: 'Course creation details',
  })
  @ApiResponse({
    status: 201,
    description: 'Course created successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid course data',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - user does not have permission to create courses',
  })
  async create(@Body() dto: CreateCourseDto, @Req() req: any) {
    return this.coursesService.create(dto, req.user.id, req.user.schoolId);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all courses',
    description:
      'Returns a paginated list of courses belonging to the authenticated user school.',
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
    description: 'Number of courses per page',
  })
  @ApiResponse({
    status: 200,
    description: 'Courses retrieved successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - user does not have permission to view courses',
  })
  async findAll(@Req() req: any, @Query() paginationDto: PaginationDto) {
    return this.coursesService.findAll(req.user.schoolId, paginationDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get course by ID',
    description:
      'Returns a specific course belonging to the authenticated user school.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: '32931b50-67c0-4ad6-9b5e-123456789abc',
    description: 'Course ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Course retrieved successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description:
      'Forbidden - user does not have permission to view this course',
  })
  @ApiResponse({
    status: 404,
    description: 'Course not found',
  })
  async findById(@Param('id') id: string, @Req() req: any) {
    return this.coursesService.findById(id, req.user.schoolId);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update course',
    description:
      'Updates an existing course belonging to the authenticated user school.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: '32931b50-67c0-4ad6-9b5e-123456789abc',
    description: 'Course ID',
  })
  @ApiBody({
    type: UpdateCourseDto,
    description: 'Course update details',
  })
  @ApiResponse({
    status: 200,
    description: 'Course updated successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid course data',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - user does not have permission to update courses',
  })
  @ApiResponse({
    status: 404,
    description: 'Course not found',
  })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateCourseDto,
    @Req() req: any,
  ) {
    return this.coursesService.update(id, dto, req.user.schoolId);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete course',
    description:
      'Deletes a course belonging to the authenticated administrator school.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: '32931b50-67c0-4ad6-9b5e-123456789abc',
    description: 'Course ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Course deleted successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - only administrators can delete courses',
  })
  @ApiResponse({
    status: 404,
    description: 'Course not found',
  })
  async remove(@Param('id') id: string, @Req() req: any) {
    return this.coursesService.remove(id, req.user.schoolId);
  }
}
