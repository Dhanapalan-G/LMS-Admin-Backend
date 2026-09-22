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
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { LessonsService } from './lessons.service';

import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

import { PaginationDto } from '../common/dto/pagination.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { RolesGuard } from '../common/guards/roles.guard';

import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';

import { AdminRole } from '../generated/prisma/enums';

@ApiTags('Admin - Lessons')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  // =========================================================
  // CREATE LESSON
  // =========================================================

  @Post('modules/:moduleId/lessons')
  @ApiOperation({
    summary: 'Create a lesson',
    description:
      'Creates a new lesson inside a specific module. The module determines the course to which the lesson belongs. Files can also be added during lesson creation.',
  })
  @ApiParam({
    name: 'moduleId',
    type: String,
    example: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    description: 'Unique ID of the module.',
  })
  @ApiBody({
    type: CreateLessonDto,
    description: 'Lesson details including optional lesson files.',
  })
  @ApiResponse({
    status: 201,
    description: 'Lesson created successfully.',
    schema: {
      example: {
        message: 'Lesson created successfully',
        data: {
          id: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
          moduleId: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
          title: 'Introduction to Photosynthesis',
          description: 'Learn the basic concepts of photosynthesis.',
          status: 'PUBLISHED',
          type: 'CONTENT',
          content:
            'Photosynthesis is the process by which plants convert light energy into chemical energy.',
          position: 1,
          duration: 30,
          isRequired: true,
          files: [
            {
              id: '8ba7b810-9dad-11d1-80b4-00c04fd430c8',
              lessonId: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
              fileName: 'photosynthesis.pdf',
              fileUrl: 'https://example.com/files/photosynthesis.pdf',
              fileType: 'PDF',
              fileSize: 1024000,
              mimeType: 'application/pdf',
              createdAt: '2026-09-22T10:00:00.000Z',
            },
          ],
          createdAt: '2026-09-22T10:00:00.000Z',
          updatedAt: '2026-09-22T10:00:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid lesson or file data.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - only administrators can create lessons.',
  })
  @ApiResponse({
    status: 404,
    description: 'Module not.',
  })
  async create(
    @Param('moduleId') moduleId: string,
    @Body() dto: CreateLessonDto,
  ) {
    const lesson = await this.lessonsService.create(moduleId, dto);

    return {
      message: 'Lesson created successfully',
      data: lesson,
    };
  }

  // =========================================================
  // GET LESSONS BY MODULE
  // =========================================================

  @Get('modules/:moduleId/lessons')
  @ApiOperation({
    summary: 'Get lessons of a module',
    description:
      'Returns a paginated list of lessons belonging to the specified module. Each lesson includes its files and quiz summary.',
  })
  @ApiParam({
    name: 'moduleId',
    type: String,
    example: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    description: 'Unique ID of the module.',
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
    description: 'Number of lessons per page. Defaults to 10.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lessons retrieved successfully.',
    schema: {
      example: {
        message: 'Lessons retrieved successfully',
        data: {
          items: [
            {
              id: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
              moduleId: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
              title: 'Introduction to Photosynthesis',
              description: 'Learn the basic concepts of photosynthesis.',
              status: 'PUBLISHED',
              type: 'CONTENT',
              content:
                'Photosynthesis is the process by which plants convert light energy into chemical energy.',
              position: 1,
              duration: 30,
              isRequired: true,
              files: [],
              quiz: {
                id: 'quiz-uuid',
                title: 'Photosynthesis Quiz',
                passingScore: 70,
                status: 'PUBLISHED',
              },
              createdAt: '2026-09-22T10:00:00.000Z',
              updatedAt: '2026-09-22T10:00:00.000Z',
            },
          ],
          meta: {
            page: 1,
            limit: 10,
            total: 25,
            totalPages: 3,
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
    description: 'Forbidden - only administrators can view lessons.',
  })
  @ApiResponse({
    status: 404,
    description: 'Module not found.',
  })
  async findAll(
    @Param('moduleId') moduleId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    const lessons = await this.lessonsService.findAll(moduleId, paginationDto);

    return {
      message: 'Lessons retrieved successfully',
      data: lessons,
    };
  }

  // =========================================================
  // GET LESSON BY ID
  // =========================================================

  @Get('lessons/:lessonId')
  @ApiOperation({
    summary: 'Get lesson by ID',
    description:
      'Returns a specific lesson including its files and quiz summary. The lessonId is globally unique, so courseId and moduleId are not required.',
  })
  @ApiParam({
    name: 'lessonId',
    type: String,
    example: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
    description: 'Unique ID of the lesson.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson retrieved successfully.',
    schema: {
      example: {
        message: 'Lesson retrieved successfully',
        data: {
          id: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
          moduleId: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
          title: 'Introduction to Photosynthesis',
          description: 'Learn the basic concepts of photosynthesis.',
          status: 'PUBLISHED',
          type: 'CONTENT',
          content:
            'Photosynthesis is the process by which plants convert light energy into chemical energy.',
          position: 1,
          duration: 30,
          isRequired: true,
          files: [],
          quiz: {
            id: 'quiz-uuid',
            title: 'Photosynthesis Quiz',
            description: 'Test your understanding of photosynthesis.',
            passingScore: 70,
            status: 'PUBLISHED',
          },
          createdAt: '2026-09-22T10:00:00.000Z',
          updatedAt: '2026-09-22T10:00:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 404,
    description: 'Lesson not found.',
  })
  async findOne(@Param('lessonId') lessonId: string) {
    const lesson = await this.lessonsService.findOne(lessonId);

    return {
      message: 'Lesson retrieved successfully',
      data: lesson,
    };
  }

  // =========================================================
  // UPDATE LESSON
  // =========================================================

  @Patch('lessons/:lessonId')
  @ApiOperation({
    summary: 'Update a lesson',
    description:
      'Updates an existing lesson. Existing files can be deleted using fileIdsToDelete and new files can be added using filesToAdd.',
  })
  @ApiParam({
    name: 'lessonId',
    type: String,
    example: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
    description: 'Unique ID of the lesson.',
  })
  @ApiBody({
    type: UpdateLessonDto,
    description:
      'Lesson update details including optional file additions and deletions.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson updated successfully.',
    schema: {
      example: {
        message: 'Lesson updated successfully',
        data: {
          id: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
          moduleId: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
          title: 'Introduction to Photosynthesis - Updated',
          description: 'Updated lesson description.',
          status: 'PUBLISHED',
          type: 'CONTENT',
          content: 'Updated lesson content.',
          position: 1,
          duration: 35,
          isRequired: true,
          files: [],
          createdAt: '2026-09-22T10:00:00.000Z',
          updatedAt: '2026-09-22T11:00:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid lesson or file data.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 404,
    description: 'Lesson not found.',
  })
  async update(
    @Param('lessonId') lessonId: string,
    @Body() dto: UpdateLessonDto,
  ) {
    const lesson = await this.lessonsService.update(lessonId, dto);

    return {
      message: 'Lesson updated successfully',
      data: lesson,
    };
  }

  // =========================================================
  // DELETE LESSON
  // =========================================================

  @Delete('lessons/:lessonId')
  @ApiOperation({
    summary: 'Delete a lesson',
    description:
      'Deletes an existing lesson and its associated data according to the configured database relations. The lessonId is globally unique.',
  })
  @ApiParam({
    name: 'lessonId',
    type: String,
    example: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
    description: 'Unique ID of the lesson.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson deleted successfully.',
    schema: {
      example: {
        message: 'Lesson deleted successfully',
        data: {
          id: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - only administrators can delete lessons.',
  })
  @ApiResponse({
    status: 404,
    description: 'Lesson not found.',
  })
  async remove(@Param('lessonId') lessonId: string) {
    const result = await this.lessonsService.remove(lessonId);

    return {
      message: 'Lesson deleted successfully',
      data: result,
    };
  }
}
