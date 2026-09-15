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

import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';

import { AdminRole } from '../generated/prisma/enums';

@ApiTags('Admin - Lessons')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/courses/:courseId/modules/:moduleId')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  // ---------------------------------------------------------
  // CREATE LESSON
  // ---------------------------------------------------------

  @Post('lessons')
  @ApiOperation({
    summary: 'Create a lesson',
    description:
      'Creates a lesson and its associated lesson files. Files must already be uploaded to S3/CDN; this API stores only the file metadata and URL.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
    example: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
  })
  @ApiBody({
    type: CreateLessonDto,
    description: 'Lesson details and optional S3 file metadata',
  })
  @ApiResponse({
    status: 201,
    description: 'Lesson created successfully.',
    schema: {
      example: {
        success: true,
        message: 'Lesson created successfully',
        data: {
          id: 'lesson-uuid',
          moduleId: 'module-uuid',
          title: 'Introduction to Photosynthesis',
          description: 'Learn the basic concepts of photosynthesis.',
          type: 'VIDEO',
          content: 'https://cdn.example.com/videos/photosynthesis.mp4',
          position: 1,
          duration: 15,
          isRequired: true,
          files: [
            {
              id: 'file-uuid',
              lessonId: 'lesson-uuid',
              fileName: 'photosynthesis.pdf',
              fileUrl: 'https://cdn.example.com/files/photosynthesis.pdf',
              fileType: 'PDF',
              fileSize: 2456789,
              mimeType: 'application/pdf',
              createdAt: '2026-09-14T10:00:00.000Z',
            },
          ],
          createdAt: '2026-09-14T10:00:00.000Z',
          updatedAt: '2026-09-14T10:00:00.000Z',
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
    description: 'Forbidden. Admin access required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Module not found.',
  })
  async create(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Body() dto: CreateLessonDto,
  ) {
    return this.lessonsService.create(courseId, moduleId, dto);
  }

  // ---------------------------------------------------------
  // GET ALL LESSONS
  // ---------------------------------------------------------

  @Get('lessons')
  @ApiOperation({
    summary: 'Get all lessons',
    description:
      'Returns paginated lessons for a module, including lesson files and quiz summary information.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
    example: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
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
    description: 'Number of lessons per page.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lessons retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Lessons retrieved successfully',
        data: {
          items: [
            {
              id: 'lesson-uuid',
              moduleId: 'module-uuid',
              title: 'Introduction to Photosynthesis',
              description: 'Learn the basic concepts of photosynthesis.',
              type: 'VIDEO',
              content: 'https://cdn.example.com/videos/photosynthesis.mp4',
              position: 1,
              duration: 15,
              isRequired: true,
              files: [
                {
                  id: 'file-uuid',
                  fileName: 'photosynthesis.pdf',
                  fileUrl: 'https://cdn.example.com/files/photosynthesis.pdf',
                  fileType: 'PDF',
                  fileSize: 2456789,
                  mimeType: 'application/pdf',
                  createdAt: '2026-09-14T10:00:00.000Z',
                },
              ],
              quiz: {
                id: 'quiz-uuid',
                title: 'Photosynthesis Quiz',
                passingScore: 70,
                status: 'DRAFT',
              },
              createdAt: '2026-09-14T10:00:00.000Z',
              updatedAt: '2026-09-14T10:00:00.000Z',
            },
          ],
          meta: {
            page: 1,
            limit: 10,
            total: 1,
            totalPages: 1,
          },
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
    description: 'Forbidden. Admin access required.',
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

  // ---------------------------------------------------------
  // GET SINGLE LESSON
  // ---------------------------------------------------------

  @Get('lessons/:lessonId')
  @ApiOperation({
    summary: 'Get lesson by ID',
    description: 'Returns a single lesson with its files and quiz information.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
    example: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
  })
  @ApiParam({
    name: 'lessonId',
    description: 'Lesson ID',
    example: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Lesson retrieved successfully',
        data: {
          id: 'lesson-uuid',
          moduleId: 'module-uuid',
          title: 'Introduction to Photosynthesis',
          description: 'Learn the basic concepts of photosynthesis.',
          type: 'VIDEO',
          content: 'https://cdn.example.com/videos/photosynthesis.mp4',
          position: 1,
          duration: 15,
          isRequired: true,
          files: [
            {
              id: 'file-uuid',
              lessonId: 'lesson-uuid',
              fileName: 'photosynthesis.pdf',
              fileUrl: 'https://cdn.example.com/files/photosynthesis.pdf',
              fileType: 'PDF',
              fileSize: 2456789,
              mimeType: 'application/pdf',
              createdAt: '2026-09-14T10:00:00.000Z',
            },
          ],
          quiz: {
            id: 'quiz-uuid',
            title: 'Photosynthesis Quiz',
            description: 'Test your understanding.',
            passingScore: 70,
            status: 'DRAFT',
          },
          createdAt: '2026-09-14T10:00:00.000Z',
          updatedAt: '2026-09-14T10:00:00.000Z',
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
    description: 'Forbidden. Admin access required.',
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

  // ---------------------------------------------------------
  // UPDATE LESSON
  // ---------------------------------------------------------

  @Patch('lessons/:lessonId')
  @ApiOperation({
    summary: 'Update a lesson',
    description:
      'Updates lesson details, adds new lesson files, and deletes selected existing files.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
    example: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
  })
  @ApiParam({
    name: 'lessonId',
    description: 'Lesson ID',
    example: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
  })
  @ApiBody({
    type: UpdateLessonDto,
    description: 'Lesson fields, files to add, and file IDs to delete.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson updated successfully.',
    schema: {
      example: {
        success: true,
        message: 'Lesson updated successfully',
        data: {
          id: 'lesson-uuid',
          moduleId: 'module-uuid',
          title: 'Updated Photosynthesis Lesson',
          description: 'Updated lesson description.',
          type: 'VIDEO',
          content: 'https://cdn.example.com/videos/updated.mp4',
          position: 1,
          duration: 20,
          isRequired: true,
          files: [
            {
              id: 'file-uuid',
              lessonId: 'lesson-uuid',
              fileName: 'updated.pdf',
              fileUrl: 'https://cdn.example.com/files/updated.pdf',
              fileType: 'PDF',
              fileSize: 1234567,
              mimeType: 'application/pdf',
              createdAt: '2026-09-14T10:00:00.000Z',
            },
          ],
          createdAt: '2026-09-14T10:00:00.000Z',
          updatedAt: '2026-09-14T10:30:00.000Z',
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
    description: 'Forbidden. Admin access required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Lesson or lesson file not found.',
  })
  async update(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Param('lessonId') lessonId: string,
    @Body() dto: UpdateLessonDto,
  ) {
    return this.lessonsService.update(courseId, moduleId, lessonId, dto);
  }

  // ---------------------------------------------------------
  // DELETE LESSON
  // ---------------------------------------------------------

  @Delete('lessons/:lessonId')
  @ApiOperation({
    summary: 'Delete a lesson',
    description:
      'Deletes a lesson and its related records according to the configured Prisma cascade relationships.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
    example: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
  })
  @ApiParam({
    name: 'lessonId',
    description: 'Lesson ID',
    example: '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson deleted successfully.',
    schema: {
      example: {
        success: true,
        message: 'Lesson deleted successfully',
        data: {
          id: 'lesson-uuid',
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
    description: 'Forbidden. Admin access required.',
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
