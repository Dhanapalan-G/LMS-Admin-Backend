import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';

import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@ApiTags('Admin Lessons')
@ApiBearerAuth()
@Controller('admin/courses/:courseId/modules/:moduleId/lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}
  @Post()
  @ApiOperation({
    summary: 'Create a lesson',
    description: 'Creates a new lesson inside a course module.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: 'c1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
    example: 'm1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiBody({
    type: CreateLessonDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Lesson created successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request data.',
  })
  @ApiResponse({
    status: 404,
    description: 'Module or course not found.',
  })
  async create(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Body() dto: CreateLessonDto,
  ) {
    return this.lessonsService.create(courseId, moduleId, dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get lessons by module',
    description: 'Returns paginated lessons belonging to a course module.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: 'c1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
    example: 'm1b2c3d4-e5f6-7890-abcd-1234567890ab',
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
    description: 'Number of lessons per page',
  })
  @ApiResponse({
    status: 200,
    description: 'Lessons retrieved successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Module not found.',
  })
  async findAll(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.lessonsService.findAll(courseId, moduleId, paginationDto);
  }

  @Get(':lessonId')
  @ApiOperation({
    summary: 'Get lesson by ID',
    description: 'Returns a specific lesson from a course module.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: 'c1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
    example: 'm1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiParam({
    name: 'lessonId',
    description: 'Lesson ID',
    example: 'l1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson retrieved successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Lesson not found.',
  })
  async findOne(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Param('lessonId') lessonId: string,
  ) {
    return this.lessonsService.findOne(courseId, moduleId, lessonId);
  }

  @Patch(':lessonId')
  @ApiOperation({
    summary: 'Update lesson',
    description: 'Updates an existing lesson.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: 'c1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
    example: 'm1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiParam({
    name: 'lessonId',
    description: 'Lesson ID',
    example: 'l1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiBody({
    type: UpdateLessonDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson updated successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request data.',
  })
  @ApiResponse({
    status: 404,
    description: 'Lesson not found.',
  })
  async update(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Param('lessonId') lessonId: string,
    @Body() dto: UpdateLessonDto,
  ) {
    return this.lessonsService.update(courseId, moduleId, lessonId, dto);
  }

  @Delete(':lessonId')
  @ApiOperation({
    summary: 'Delete lesson',
    description: 'Deletes an existing lesson and its associated content.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: 'c1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
    example: 'm1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiParam({
    name: 'lessonId',
    description: 'Lesson ID',
    example: 'l1b2c3d4-e5f6-7890-abcd-1234567890ab',
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson deleted successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Lesson not found.',
  })
  async remove(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Param('lessonId') lessonId: string,
  ) {
    return this.lessonsService.remove(courseId, moduleId, lessonId);
  }
}
