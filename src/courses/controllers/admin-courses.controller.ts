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
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UserRole } from '../../generated/prisma/client';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';

import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CoursesService } from '../courses.service';
import { Query } from '@nestjs/common';
import { PaginationDto } from '../../common/dto/pagination.dto';

@ApiTags('Admin - Courses')
@ApiBearerAuth('access-token')
@Controller('api/v1/admin/courses')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminCoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.PRINCIPAL)
  @ApiOperation({
    summary: 'Create a course',
  })
  @ApiResponse({
    status: 201,
    description: 'Course created successfully',
  })
  async create(@Body() dto: CreateCourseDto, @Req() req: any) {
    return this.coursesService.create(dto, req.user.id, req.user.schoolId);
  }
  @Get()
  @Roles(UserRole.ADMIN, UserRole.PRINCIPAL)
  @ApiOperation({
    summary: 'Get all courses',
  })
  async findAll(@Req() req: any, @Query() paginationDto: PaginationDto) {
    return this.coursesService.findAll(req.user.schoolId, paginationDto);
  }

  @Get(':id')
  @Roles(UserRole.ADMIN, UserRole.PRINCIPAL)
  @ApiOperation({
    summary: 'Get course by ID',
  })
  async findById(@Param('id') id: string, @Req() req: any) {
    return this.coursesService.findById(id, req.user.schoolId);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.PRINCIPAL)
  @ApiOperation({
    summary: 'Update course',
  })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateCourseDto,
    @Req() req: any,
  ) {
    return this.coursesService.update(id, dto, req.user.schoolId);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Delete course',
  })
  async remove(@Param('id') id: string, @Req() req: any) {
    return this.coursesService.remove(id, req.user.schoolId);
  }
}
