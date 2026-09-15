import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { QuestionType, QuizStatus } from '../../generated/prisma/enums';

export class CreateQuizOptionDto {
  @ApiProperty({
    example: '(A) - 2, (B) - 1, (C) - 3, (D) - 4',
  })
  @IsString()
  @IsNotEmpty()
  optionText: string;

  @ApiProperty({
    example: 1,
  })
  @IsInt()
  @Min(1)
  position: number;

  @ApiProperty({
    example: true,
  })
  @IsBoolean()
  isCorrect: boolean;
}

export class CreateQuizMatchPairDto {
  @ApiProperty({
    example: 'Simple Random Sampling',
  })
  @IsString()
  @IsNotEmpty()
  columnA: string;

  @ApiProperty({
    example: 'Every individual has an equal probability of being selected.',
  })
  @IsString()
  @IsNotEmpty()
  columnB: string;

  @ApiProperty({
    example: 1,
  })
  @IsInt()
  @Min(1)
  position: number;
}

export class CreateQuizQuestionDto {
  @ApiProperty({
    example:
      'Match the sampling techniques in List-I with their correct descriptions in List-II.',
  })
  @IsString()
  @IsNotEmpty()
  question: string;

  @ApiProperty({
    enum: QuestionType,
    example: QuestionType.MATCH_THE_FOLLOWING,
  })
  @IsEnum(QuestionType)
  questionType: QuestionType;

  @ApiProperty({
    example: 1,
    description: 'Marks assigned to the question.',
  })
  @IsNumber()
  @Min(0)
  marks: number;

  @ApiPropertyOptional({
    example:
      'Simple random sampling gives every individual an equal probability of selection.',
    description: 'Optional explanation for the question.',
  })
  @IsString()
  @IsOptional()
  explanation?: string;

  @ApiProperty({
    example: 1,
    description: 'Question order inside the quiz.',
  })
  @IsInt()
  @Min(1)
  position: number;

  @ApiPropertyOptional({
    example: 'https://cdn.example.com/questions/question-image.png',
    description: 'S3/CDN URL for image-based or audio-based questions.',
  })
  @IsUrl()
  @IsOptional()
  questionMediaUrl?: string;

  @ApiPropertyOptional({
    type: [CreateQuizOptionDto],
    description:
      'Answer choices for MCQ, True/False, Image-Based, Audio-Based and Match-the-Following questions.',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizOptionDto)
  @IsOptional()
  options?: CreateQuizOptionDto[];

  @ApiPropertyOptional({
    type: [CreateQuizMatchPairDto],
    description:
      'Column A and Column B pairs used by Match-the-Following questions.',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizMatchPairDto)
  @IsOptional()
  matchPairs?: CreateQuizMatchPairDto[];
}

export class CreateQuizDto {
  @ApiProperty({
    example: 'Lesson 1 Quiz',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({
    example: 'Test your understanding of this lesson.',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    example: 70,
    description: 'Passing percentage.',
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  passingScore?: number;

  @ApiPropertyOptional({
    enum: QuizStatus,
    example: QuizStatus.DRAFT,
  })
  @IsEnum(QuizStatus)
  @IsOptional()
  status?: QuizStatus;

  @ApiProperty({
    type: [CreateQuizQuestionDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizQuestionDto)
  questions: CreateQuizQuestionDto[];
}
