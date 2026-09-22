import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateQuizDto, CreateQuizQuestionDto } from './dto/create-quiz.dto';

import { QuestionType } from '../generated/prisma/enums';
import { UpdateQuizDto } from './dto/update-quiz.dto';

type QuizParent =
  | {
      courseId: string;
      lessonId?: never;
    }
  | {
      lessonId: string;
      courseId?: never;
    };

@Injectable()
export class QuizzesService {
  constructor(private readonly prisma: PrismaService) {}

  // =========================================================
  // LESSON QUIZ
  // =========================================================

  async createForLesson(lessonId: string, dto: CreateQuizDto) {
    // -------------------------------------------------------
    // 1. Verify lesson exists
    // -------------------------------------------------------

    const lesson = await this.prisma.lesson.findUnique({
      where: {
        id: lessonId,
      },
      select: {
        id: true,

        quiz: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    // -------------------------------------------------------
    // 2. Only one quiz per lesson
    // -------------------------------------------------------

    if (lesson.quiz) {
      throw new BadRequestException('Quiz already exists for this lesson');
    }

    // -------------------------------------------------------
    // 3. Common quiz creation
    // -------------------------------------------------------

    return this.createQuiz(
      {
        lessonId,
      },
      dto,
    );
  }

  // =========================================================
  // COURSE QUIZ
  // =========================================================

  async createForCourse(courseId: string, dto: CreateQuizDto) {
    // -------------------------------------------------------
    // 1. Verify course exists
    // -------------------------------------------------------

    const course = await this.prisma.course.findUnique({
      where: {
        id: courseId,
      },
      select: {
        id: true,
        quiz: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    // -------------------------------------------------------
    // 2. Only one quiz per course
    // -------------------------------------------------------

    if (course.quiz) {
      throw new BadRequestException('Quiz already exists for this course');
    }

    // -------------------------------------------------------
    // 3. Common quiz creation
    // -------------------------------------------------------

    return this.createQuiz(
      {
        courseId,
      },
      dto,
    );
  }

  // =========================================================
  // COMMON QUIZ CREATION
  // =========================================================

  private async createQuiz(parent: QuizParent, dto: CreateQuizDto) {
    // -------------------------------------------------------
    // 1. Validate quiz questions
    // -------------------------------------------------------

    this.validateQuestions(dto.questions);

    // -------------------------------------------------------
    // 2. Create everything in one transaction
    // -------------------------------------------------------

    const quiz = await this.prisma.$transaction(async (tx) => {
      return tx.quiz.create({
        data: {
          // -----------------------------------------------
          // Course OR Lesson
          // -----------------------------------------------

          ...(parent.courseId
            ? {
                courseId: parent.courseId,
              }
            : {
                lessonId: parent.lessonId,
              }),

          // -----------------------------------------------
          // Quiz details
          // -----------------------------------------------

          title: dto.title,
          description: dto.description,
          passingScore: dto.passingScore,
          status: dto.status,

          // -----------------------------------------------
          // Questions
          // -----------------------------------------------

          questions: {
            create: dto.questions.map((question) => ({
              question: question.question,
              questionType: question.questionType,
              questionMediaUrl: question.questionMediaUrl,
              position: question.position,
              marks: question.marks,
              explanation: question.explanation,

              // -------------------------------------------
              // Options
              // -------------------------------------------

              options: question.options?.length
                ? {
                    create: question.options.map((option) => ({
                      optionText: option.optionText,
                      position: option.position,
                      isCorrect: option.isCorrect,
                    })),
                  }
                : undefined,

              // -------------------------------------------
              // Match pairs
              // -------------------------------------------

              matchPairs: question.matchPairs?.length
                ? {
                    create: question.matchPairs.map((pair) => ({
                      columnA: pair.columnA,
                      columnB: pair.columnB,
                      position: pair.position,
                    })),
                  }
                : undefined,
            })),
          },
        },

        // =================================================
        // RESPONSE
        // =================================================

        select: {
          id: true,
          courseId: true,
          lessonId: true,

          title: true,
          description: true,
          passingScore: true,
          status: true,

          questions: {
            orderBy: {
              position: 'asc',
            },

            select: {
              id: true,
              question: true,
              questionType: true,
              questionMediaUrl: true,
              position: true,
              marks: true,
              explanation: true,

              options: {
                orderBy: {
                  position: 'asc',
                },

                select: {
                  id: true,
                  optionText: true,
                  position: true,
                  isCorrect: true,
                },
              },

              matchPairs: {
                orderBy: {
                  position: 'asc',
                },

                select: {
                  id: true,
                  columnA: true,
                  columnB: true,
                  position: true,
                },
              },
            },
          },

          createdAt: true,
          updatedAt: true,
        },
      });
    });

    return quiz;
  }

  // =========================================================
  // QUESTION VALIDATION
  // =========================================================

  private validateQuestions(questions: CreateQuizQuestionDto[]) {
    if (!questions?.length) {
      throw new BadRequestException('Quiz must contain at least one question');
    }

    for (const question of questions) {
      switch (question.questionType) {
        case QuestionType.MCQ:
          this.validateMcq(question);
          break;

        case QuestionType.TRUE_FALSE:
          this.validateTrueFalse(question);
          break;

        case QuestionType.MATCH_THE_FOLLOWING:
          this.validateMatchTheFollowing(question);
          break;

        case QuestionType.IMAGE_BASED:
          this.validateMediaQuestion(question);
          break;

        case QuestionType.AUDIO_BASED:
          this.validateMediaQuestion(question);
          break;
      }
    }
  }

  // =========================================================
  // MCQ
  // =========================================================

  private validateMcq(question: CreateQuizQuestionDto) {
    if (!question.options?.length) {
      throw new BadRequestException('MCQ question must have options');
    }

    if (question.options.length < 2) {
      throw new BadRequestException(
        'MCQ question must have at least two options',
      );
    }

    const correctCount = question.options.filter(
      (option) => option.isCorrect,
    ).length;

    if (correctCount !== 1) {
      throw new BadRequestException(
        'MCQ question must have exactly one correct option',
      );
    }
  }

  // =========================================================
  // TRUE / FALSE
  // =========================================================

  private validateTrueFalse(question: CreateQuizQuestionDto) {
    if (!question.options?.length) {
      throw new BadRequestException('True/False question must have options');
    }

    if (question.options.length !== 2) {
      throw new BadRequestException(
        'True/False question must have exactly two options',
      );
    }

    const correctCount = question.options.filter(
      (option) => option.isCorrect,
    ).length;

    if (correctCount !== 1) {
      throw new BadRequestException(
        'True/False question must have exactly one correct option',
      );
    }
  }

  // =========================================================
  // MATCH THE FOLLOWING
  // =========================================================

  private validateMatchTheFollowing(question: CreateQuizQuestionDto) {
    if (!question.matchPairs?.length) {
      throw new BadRequestException(
        'Match-the-Following question must have matching pairs',
      );
    }

    if (question.matchPairs.length < 2) {
      throw new BadRequestException(
        'Match-the-Following question must have at least two pairs',
      );
    }

    if (!question.options?.length) {
      throw new BadRequestException(
        'Match-the-Following question must have answer options',
      );
    }

    if (question.options.length < 2) {
      throw new BadRequestException(
        'Match-the-Following question must have at least two answer options',
      );
    }

    const correctCount = question.options.filter(
      (option) => option.isCorrect,
    ).length;

    if (correctCount !== 1) {
      throw new BadRequestException(
        'Match-the-Following question must have exactly one correct answer option',
      );
    }
  }

  // =========================================================
  // IMAGE / AUDIO
  // =========================================================

  private validateMediaQuestion(question: CreateQuizQuestionDto) {
    if (!question.questionMediaUrl) {
      throw new BadRequestException(
        `${question.questionType} question must have a media URL`,
      );
    }

    if (!question.options?.length) {
      throw new BadRequestException(
        `${question.questionType} question must have options`,
      );
    }

    const correctCount = question.options.filter(
      (option) => option.isCorrect,
    ).length;

    if (correctCount !== 1) {
      throw new BadRequestException(
        `${question.questionType} question must have exactly one correct option`,
      );
    }
  }

  async updateQuiz(quizId: string, dto: UpdateQuizDto) {
    // -------------------------------------------------------
    // 1. Validate questions if supplied
    // -------------------------------------------------------

    if (dto.questions) {
      this.validateQuestions(dto.questions);
    }

    // -------------------------------------------------------
    // 2. Update quiz
    // -------------------------------------------------------

    return this.prisma.quiz.update({
      where: {
        id: quizId,
      },
      data: {
        title: dto.title,
        description: dto.description,
        passingScore: dto.passingScore,
        status: dto.status,
      },

      select: {
        id: true,
        courseId: true,
        lessonId: true,
        title: true,
        description: true,
        passingScore: true,
        status: true,

        questions: {
          orderBy: {
            position: 'asc',
          },

          select: {
            id: true,
            question: true,
            questionType: true,
            questionMediaUrl: true,
            position: true,
            marks: true,
            explanation: true,

            options: {
              orderBy: {
                position: 'asc',
              },

              select: {
                id: true,
                optionText: true,
                position: true,
                isCorrect: true,
              },
            },

            matchPairs: {
              orderBy: {
                position: 'asc',
              },

              select: {
                id: true,
                columnA: true,
                columnB: true,
                position: true,
              },
            },
          },
        },

        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async deleteQuiz(quizId: string) {
    await this.prisma.quiz.update({
      where: {
        id: quizId,
      },
      data: {
        status: 'ARCHIVED',
      },
    });

    return {
      message: 'Quiz archived successfully',
    };
  }
}
