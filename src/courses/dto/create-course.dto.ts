import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  Min,
} from 'class-validator';
import { CourseStatus } from '../../generated/prisma/client';

export class CreateCourseDto {
  @ApiProperty({
    example: '32931b50-67c0-4ad6-9061-123456789abc',
  })
  @IsUUID()
  @IsNotEmpty()
  categoryId: string;
  @ApiProperty({
    example: 'Node.js Backend Development',
  })
  @IsString()
  title: string;

  @ApiPropertyOptional({
    example: 'Complete Node.js backend development course',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    enum: CourseStatus,
    example: CourseStatus.DRAFT,
  })
  @IsOptional()
  @IsEnum(CourseStatus)
  status?: CourseStatus;

  @ApiPropertyOptional({
    example: 120,
    description: 'Course duration in minutes',
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  durationMinutes?: number;

  @ApiProperty({
    example: [
      'learner type id',
      '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    ],
    description: 'Learner type IDs targeted for this course.',
    type: [String],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  targetRoles: string[];

  @ApiPropertyOptional({
    example: '2026-12-31',
    description: 'Course completion due date.',
  })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiPropertyOptional({
    example: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  isMandatory?: boolean;

  @ApiPropertyOptional({
    example: 'CBSE',
    description: 'Applicable education board.',
  })
  @IsString()
  @IsOptional()
  board?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/course-thumbnail.jpg',
  })
  @IsOptional()
  @IsUrl()
  thumbnail?: string;
}
