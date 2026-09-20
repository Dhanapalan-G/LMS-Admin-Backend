import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  Min,
} from 'class-validator';

import { CourseStatus } from '../../generated/prisma/client';

export class CreateCourseDto {
  // --------------------------------------------------
  // Course Details
  // --------------------------------------------------

  @ApiProperty({
    example: 'Node.js Backend Development',
    description: 'Course title.',
  })
  @IsString()
  title: string;

  @ApiPropertyOptional({
    example: 'Complete Node.js backend development course',
    description: 'Course description.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    enum: CourseStatus,
    example: CourseStatus.DRAFT,
    description: 'Current course status.',
  })
  @IsOptional()
  @IsEnum(CourseStatus)
  status?: CourseStatus;

  @ApiPropertyOptional({
    example: 120,
    description: 'Course duration in minutes.',
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  durationMinutes?: number;

  @ApiPropertyOptional({
    example: '2026-12-31',
    description:
      'Default course completion due date. Assignment-specific due dates are handled separately.',
  })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiPropertyOptional({
    example: false,
    default: false,
    description: 'Whether this course is mandatory.',
  })
  @IsOptional()
  @IsBoolean()
  isMandatory?: boolean;

  @ApiPropertyOptional({
    example: 'https://example.com/course-thumbnail.jpg',
    description: 'Course thumbnail URL.',
  })
  @IsOptional()
  @IsUrl()
  thumbnail?: string;

  // --------------------------------------------------
  // Categories
  // --------------------------------------------------

  @ApiPropertyOptional({
    example: [
      '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
      '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
    ],
    description:
      'Category IDs assigned to this course. A course can belong to multiple categories.',
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  categoryIds?: string[];

  // --------------------------------------------------
  // Target Learner Roles / Types
  // --------------------------------------------------

  @ApiPropertyOptional({
    example: [
      '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
      '7ba7b810-9dad-11d1-80b4-00c04fd430c8',
    ],
    description:
      'Learner type IDs that are eligible or targeted for this course. These are used to create the course assignment.',
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  targetRoleIds?: string[];
}
