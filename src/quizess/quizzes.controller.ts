import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
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

import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { RolesGuard } from '../common/guards/roles.guard';

import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';

import { AdminRole } from '../generated/prisma/enums';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@ApiTags('Admin - Lesson Quizzes')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/courses/:courseId')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post('modules/:moduleId/lessons/:lessonId/quiz')
  @ApiOperation({
    summary: 'Create lesson quiz',
    description:
      'Creates a quiz for a lesson along with all questions, answer options, and Match-the-Following pairs in a single database transaction.',
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
    type: CreateQuizDto,
    description:
      'Lesson quiz details, questions, options, and Match-the-Following pairs.',
  })
  @ApiResponse({
    status: 201,
    description: 'Lesson quiz created successfully.',
    schema: {
      example: {
        success: true,
        message: 'Lesson quiz created successfully',
        data: {
          id: 'quiz-uuid',
          lessonId: 'lesson-uuid',
          title: 'Lesson 1 Quiz',
          description: 'Test your understanding of this lesson.',
          passingScore: 70,
          status: 'DRAFT',

          questions: [
            {
              id: 'question-uuid-1',
              question:
                'Which gas is absorbed by plants during photosynthesis?',
              questionType: 'MCQ',
              questionMediaUrl: null,
              position: 1,
              marks: 1,
              explanation:
                'Plants absorb carbon dioxide during photosynthesis.',

              options: [
                {
                  id: 'option-uuid-1',
                  optionText: 'Oxygen',
                  position: 1,
                  isCorrect: false,
                },
                {
                  id: 'option-uuid-2',
                  optionText: 'Carbon dioxide',
                  position: 2,
                  isCorrect: true,
                },
                {
                  id: 'option-uuid-3',
                  optionText: 'Nitrogen',
                  position: 3,
                  isCorrect: false,
                },
                {
                  id: 'option-uuid-4',
                  optionText: 'Hydrogen',
                  position: 4,
                  isCorrect: false,
                },
              ],

              matchPairs: [],
            },

            {
              id: 'question-uuid-2',
              question:
                'Match the sampling techniques with their descriptions.',
              questionType: 'MATCH_THE_FOLLOWING',
              questionMediaUrl: null,
              position: 2,
              marks: 1,
              explanation: null,

              options: [
                {
                  id: 'option-uuid-5',
                  optionText: '(A) - 2, (B) - 1, (C) - 3, (D) - 4',
                  position: 1,
                  isCorrect: true,
                },
                {
                  id: 'option-uuid-6',
                  optionText: '(A) - 1, (B) - 2, (C) - 3, (D) - 4',
                  position: 2,
                  isCorrect: false,
                },
                {
                  id: 'option-uuid-7',
                  optionText: '(A) - 2, (B) - 3, (C) - 1, (D) - 4',
                  position: 3,
                  isCorrect: false,
                },
                {
                  id: 'option-uuid-8',
                  optionText: '(A) - 4, (B) - 1, (C) - 2, (D) - 3',
                  position: 4,
                  isCorrect: false,
                },
              ],

              matchPairs: [
                {
                  id: 'pair-uuid-1',
                  columnA: 'Simple Random Sampling',
                  columnB:
                    'Every individual has an equal probability of being selected.',
                  position: 1,
                },
                {
                  id: 'pair-uuid-2',
                  columnA: 'Stratified Sampling',
                  columnB:
                    'Divides the population into subgroups and samples each.',
                  position: 2,
                },
                {
                  id: 'pair-uuid-3',
                  columnA: 'Cluster Sampling',
                  columnB: 'Selects complete groups or clusters randomly.',
                  position: 3,
                },
                {
                  id: 'pair-uuid-4',
                  columnA: 'Snowball Sampling',
                  columnB:
                    'Relies on participants to recruit other participants.',
                  position: 4,
                },
              ],
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
    description: 'Invalid quiz, question, option, or Match-the-Following data.',
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
    description: 'Course, module, or lesson not found.',
  })
  async createLessonQuiz(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Param('lessonId') lessonId: string,
    @Body() dto: CreateQuizDto,
  ) {
    return this.quizzesService.createForLesson(
      courseId,
      moduleId,
      lessonId,
      dto,
    );
  }

  @Post('quiz')
  @ApiOperation({
    summary: 'Create course quiz',
    description:
      'Creates a quiz directly for a course along with all questions, answer options, and Match-the-Following pairs in a single database transaction.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiBody({
    type: CreateQuizDto,
    description:
      'Course quiz details, questions, options, and Match-the-Following pairs.',
  })
  @ApiResponse({
    status: 201,
    description: 'Course quiz created successfully.',
    schema: {
      example: {
        success: true,
        message: 'Course quiz created successfully',
        data: {
          id: 'quiz-uuid',
          courseId: 'course-uuid',
          lessonId: null,

          title: 'Final Course Assessment',
          description: 'Test your overall understanding of the course.',
          passingScore: 70,
          status: 'DRAFT',

          questions: [
            {
              id: 'question-uuid-1',
              question:
                'Which gas is absorbed by plants during photosynthesis?',
              questionType: 'MCQ',
              questionMediaUrl: null,
              position: 1,
              marks: 2,
              explanation:
                'Plants absorb carbon dioxide during photosynthesis.',

              options: [
                {
                  id: 'option-uuid-1',
                  optionText: 'Oxygen',
                  position: 1,
                  isCorrect: false,
                },
                {
                  id: 'option-uuid-2',
                  optionText: 'Carbon dioxide',
                  position: 2,
                  isCorrect: true,
                },
                {
                  id: 'option-uuid-3',
                  optionText: 'Nitrogen',
                  position: 3,
                  isCorrect: false,
                },
                {
                  id: 'option-uuid-4',
                  optionText: 'Hydrogen',
                  position: 4,
                  isCorrect: false,
                },
              ],

              matchPairs: [],
            },

            {
              id: 'question-uuid-2',
              question:
                'Match the sampling techniques with their descriptions.',
              questionType: 'MATCH_THE_FOLLOWING',
              questionMediaUrl: null,
              position: 2,
              marks: 3,
              explanation: null,

              options: [
                {
                  id: 'option-uuid-5',
                  optionText: '(A) - 2, (B) - 1, (C) - 3, (D) - 4',
                  position: 1,
                  isCorrect: true,
                },
                {
                  id: 'option-uuid-6',
                  optionText: '(A) - 1, (B) - 2, (C) - 3, (D) - 4',
                  position: 2,
                  isCorrect: false,
                },
                {
                  id: 'option-uuid-7',
                  optionText: '(A) - 2, (B) - 3, (C) - 1, (D) - 4',
                  position: 3,
                  isCorrect: false,
                },
                {
                  id: 'option-uuid-8',
                  optionText: '(A) - 4, (B) - 1, (C) - 2, (D) - 3',
                  position: 4,
                  isCorrect: false,
                },
              ],

              matchPairs: [
                {
                  id: 'pair-uuid-1',
                  columnA: 'Simple Random Sampling',
                  columnB:
                    'Every individual has an equal probability of being selected.',
                  position: 1,
                },
                {
                  id: 'pair-uuid-2',
                  columnA: 'Stratified Sampling',
                  columnB:
                    'Divides the population into subgroups and samples each.',
                  position: 2,
                },
                {
                  id: 'pair-uuid-3',
                  columnA: 'Cluster Sampling',
                  columnB: 'Selects complete groups or clusters randomly.',
                  position: 3,
                },
                {
                  id: 'pair-uuid-4',
                  columnA: 'Snowball Sampling',
                  columnB:
                    'Relies on participants to recruit other participants.',
                  position: 4,
                },
              ],
            },
          ],

          createdAt: '2026-09-15T10:00:00.000Z',
          updatedAt: '2026-09-15T10:00:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid quiz, question, option, or Match-the-Following data, or a quiz already exists for the course.',
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
    description: 'Course not found.',
  })
  async createCourseQuiz(
    @Param('courseId') courseId: string,
    @Body() dto: CreateQuizDto,
  ) {
    return this.quizzesService.createForCourse(courseId, dto);
  }

  @Patch('modules/:moduleId/lessons/:lessonId/quiz')
  @ApiOperation({
    summary: 'Update lesson quiz',
    description: 'Updates the quiz details associated with a lesson.',
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
    type: UpdateQuizDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson quiz updated successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Lesson or quiz not found.',
  })
  async updateLessonQuiz(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Param('lessonId') lessonId: string,
    @Body() dto: UpdateQuizDto,
  ) {
    return this.quizzesService.updateForLesson(
      courseId,
      moduleId,
      lessonId,
      dto,
    );
  }

  @Patch(':courseId/quiz')
  @ApiOperation({
    summary: 'Update course quiz',
    description: 'Updates the quiz details associated with a course.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiBody({
    type: UpdateQuizDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Course quiz updated successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Course or quiz not found.',
  })
  async updateCourseQuiz(
    @Param('courseId') courseId: string,
    @Body() dto: UpdateQuizDto,
  ) {
    return this.quizzesService.updateForCourse(courseId, dto);
  }

  @Delete('modules/:moduleId/lessons/:lessonId/quiz')
  @ApiOperation({
    summary: 'Delete lesson quiz',
    description: 'Archives the quiz associated with a lesson.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
  })
  @ApiParam({
    name: 'moduleId',
    description: 'Module ID',
  })
  @ApiParam({
    name: 'lessonId',
    description: 'Lesson ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Lesson quiz archived successfully.',
    schema: {
      example: {
        success: true,
        message: 'Lesson quiz archived successfully',
        data: {
          message: 'Quiz archived successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Lesson or quiz not found.',
  })
  async deleteLessonQuiz(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Param('lessonId') lessonId: string,
  ) {
    return this.quizzesService.deleteForLesson(courseId, moduleId, lessonId);
  }

  @Delete('quiz')
  @ApiOperation({
    summary: 'Delete course quiz',
    description: 'Archives the quiz associated with a course.',
  })
  @ApiParam({
    name: 'courseId',
    description: 'Course ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Course quiz archived successfully.',
    schema: {
      example: {
        success: true,
        message: 'Course quiz archived successfully',
        data: {
          message: 'Quiz archived successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Course or quiz not found.',
  })
  async deleteCourseQuiz(@Param('courseId') courseId: string) {
    return this.quizzesService.deleteForCourse(courseId);
  }
}
