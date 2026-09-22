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

import { PaginationDto } from '../common/dto/pagination.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesService } from './courses.service';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { AuthType } from '../auth/decorators/auth-type.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { AdminRole } from '../generated/prisma/client';

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
    return this.coursesService.create(dto, req.user.id);
  }
  @Get()
  @ApiOperation({
    summary: 'Get all courses',
    description:
      'Returns a paginated list of courses with summary counts, categories, learner roles, module count, assigned learners, and completion progress. Supports search and filtering by status, mandatory status, and learner role.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Page number. Defaults to 1.',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
    description: 'Number of courses per page. Defaults to 10.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    example: 'leadership',
    description: 'Search by course title, code, or description.',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    type: String,
    enum: ['DRAFT', 'PUBLISHED'],
    example: 'PUBLISHED',
    description: 'Filter courses by status.',
  })
  @ApiQuery({
    name: 'isMandatory',
    required: false,
    type: Boolean,
    example: true,
    description: 'Filter courses by mandatory or optional status.',
  })
  @ApiQuery({
    name: 'roleId',
    required: false,
    type: String,
    example: 'role-uuid',
    description: 'Filter courses assigned to a specific learner role.',
  })
  @ApiResponse({
    status: 200,
    description: 'Courses retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Courses retrieved successfully',
        data: {
          summary: {
            totalCourses: 12,
            publishedCourses: 10,
            draftCourses: 2,
            mandatoryCourses: 7,
          },

          items: [
            {
              id: '32931b50-67c0-4ad6-9b5e-123456789abc',
              code: 'COURSE001',
              title: 'Effective Leadership in Education',
              description:
                'Develop leadership capabilities.',
              status: 'PUBLISHED',
              durationMinutes: 180,
              thumbnail: 'https://cdn.example.com/course-thumbnail.jpg',
              dueDate: null,
              isMandatory: true,

              categories: [
                {
                  id: 'category-001',
                  name: 'Leadership & Professional Development',
                },
              ],

              roles: [
                {
                  id: 'role-001',
                  name: 'Principal',
                  code: 'PRINCIPAL',
                },
              ],

              moduleCount: 6,
              totalLearners: 89,
              completedLearners: 73,
              completionProgress: 82,

              createdAt: '2024-02-01T10:00:00.000Z',
              updatedAt: '2024-02-01T10:00:00.000Z',
            },
          ],

          meta: {
            page: 1,
            limit: 10,
            total: 12,
            totalPages: 2,
            hasNextPage: true,
            hasPreviousPage: false,
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - user does not have permission to view courses.',
  })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.coursesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get course by ID',
    description:
      'Returns detailed course information including category, target roles, assigned learner count, modules, lessons, quiz information, and lesson files.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: '32931b50-67c0-4ad6-9b5e-123456789abc',
    description: 'Course ID',
  })
  @ApiResponse({
    status: 200,
    description:
      'Course retrieved successfully with course details, target roles, assigned learners, modules, lessons, quizzes, and files.',
    schema: {
      example: {
        success: true,
        message: 'Course retrieved successfully',
        data: {
          id: '32931b50-67c0-4ad6-9b5e-123456789abc',
          code: 'COURSE001',
          title: 'Effective Leadership in Education',
          description:
            'Develop leadership capabilities.',
          status: 'PUBLISHED',
          durationMinutes: 180,
          thumbnail: 'https://cdn.example.com/course-thumbnail.jpg',
          dueDate: null,
          isMandatory: true,

          createdAt: '2024-02-01T10:00:00.000Z',
          updatedAt: '2024-02-01T10:00:00.000Z',

          categories: [
            {
              id: 'category-001',
              name: 'Leadership & Professional Development',
            },
          ],

          roles: [
            {
              id: 'role-001',
              name: 'Principal',
              code: 'PRINCIPAL',
            },
          ],

          assignedLearners: 89,
          moduleCount: 6,
          lessonCount: 3,

          modules: [
            {
              id: 'module-001',
              title: 'Introduction to Educational Leadership',
              description: 'Overview of modern leadership fundamentals.',
              status: 'PUBLISHED',
              createdAt: '2024-02-01T10:00:00.000Z',
              updatedAt: '2024-02-01T10:00:00.000Z',

              lessons: [
                {
                  id: 'lesson-001',
                  title: 'Lesson 1',
                  description: 'Introduction to leadership',
                  type: 'IMAGE',
                  content: 'Lesson content',
                  status: 'PUBLISHED',
                  createdAt: '2024-02-01T10:00:00.000Z',
                  updatedAt: '2024-02-01T10:00:00.000Z',

                  files: [
                    {
                      id: 'file-001',
                      fileName: 'leadership.jpg',
                      fileUrl: 'https://cdn.example.com/leadership.jpg',
                      fileType: 'IMAGE',
                      fileSize: 204800,
                    },
                  ],

                  quiz: {
                    id: 'quiz-001',
                    title: 'Leadership Assessment',
                    questionCount: 1,
                  },
                },
              ],
            },
          ],
        },
      },
    },
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
  async findById(@Param('id') id: string) {
    return this.coursesService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update course',
    description: 'Updates an existing course by Id.',
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
  update(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.coursesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete course',
    description: 'Deletes a course by Id.',
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
    return this.coursesService.remove(id);
  }
}
