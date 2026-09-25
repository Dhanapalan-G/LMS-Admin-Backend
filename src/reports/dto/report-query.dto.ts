import { Transform, Type } from 'class-transformer';

import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class ReportQueryDto {
  // ============================================================
  // DATE
  // ============================================================

  @ApiPropertyOptional({
    description: 'Start date for the report period.',
    example: '2026-01-01',
    type: String,
    format: 'date',
  })
  @IsOptional()
  @IsDateString()
  fromDate?: string;

  @ApiPropertyOptional({
    description: 'End date for the report period.',
    example: '2026-12-31',
    type: String,
    format: 'date',
  })
  @IsOptional()
  @IsDateString()
  toDate?: string;

  // ============================================================
  // BOARD
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter the report by school board.',
    example: 'CBSE',
  })
  @IsOptional()
  @IsString()
  board?: string;

  // ============================================================
  // SCHOOL IDS
  // ============================================================

  @ApiPropertyOptional({
    description:
      'Filter by one or more school IDs. Supports both a single ID and multiple IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440003',
    ],
    type: [String],
  })
  @IsOptional()
  @Transform(({ value }) =>
    value === undefined ? undefined : Array.isArray(value) ? value : [value],
  )
  @IsArray()
  @IsUUID('4', { each: true })
  schoolIds?: string[];

  // ============================================================
  // ROLE IDS
  // ============================================================

  @ApiPropertyOptional({
    description:
      'Filter by one or more learner role IDs. Supports both a single ID and multiple IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440005',
    ],
    type: [String],
  })
  @IsOptional()
  @Transform(({ value }) =>
    value === undefined ? undefined : Array.isArray(value) ? value : [value],
  )
  @IsArray()
  @IsUUID('4', { each: true })
  roleIds?: string[];

  // ============================================================
  // DEPARTMENT IDS
  // ============================================================

  @ApiPropertyOptional({
    description:
      'Filter by one or more department IDs. Supports both a single ID and multiple IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440002'],
    type: [String],
  })
  @IsOptional()
  @Transform(({ value }) =>
    value === undefined ? undefined : Array.isArray(value) ? value : [value],
  )
  @IsArray()
  @IsUUID('4', { each: true })
  departmentIds?: string[];

  // ============================================================
  // CATEGORY IDS
  // ============================================================

  @ApiPropertyOptional({
    description:
      'Filter by one or more learning category IDs. Supports both a single ID and multiple IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440008'],
    type: [String],
  })
  @IsOptional()
  @Transform(({ value }) =>
    value === undefined ? undefined : Array.isArray(value) ? value : [value],
  )
  @IsArray()
  @IsUUID('4', { each: true })
  categoryIds?: string[];

  // ============================================================
  // COURSE IDS
  // ============================================================

  @ApiPropertyOptional({
    description:
      'Filter by one or more course IDs. Supports both a single ID and multiple IDs.',
    example: ['550e8400-e29b-41d4-a716-446655440004'],
    type: [String],
  })
  @IsOptional()
  @Transform(({ value }) =>
    value === undefined ? undefined : Array.isArray(value) ? value : [value],
  )
  @IsArray()
  @IsUUID('4', { each: true })
  courseIds?: string[];

  // ============================================================
  // COMPLETION STATUS
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter by one or more completion statuses.',
    example: ['COMPLETED', 'IN_PROGRESS'],
    enum: ['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED', 'OVERDUE'],
    type: [String],
  })
  @IsOptional()
  @Transform(({ value }) =>
    value === undefined ? undefined : Array.isArray(value) ? value : [value],
  )
  @IsArray()
  @IsIn(['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED', 'OVERDUE'], {
    each: true,
  })
  completionStatuses?: string[];

  // ============================================================
  // CERTIFICATION STATUS
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter by one or more certification statuses.',
    example: ['CERTIFIED', 'NOT_CERTIFIED'],
    enum: ['CERTIFIED', 'NOT_CERTIFIED'],
    type: [String],
  })
  @IsOptional()
  @Transform(({ value }) =>
    value === undefined ? undefined : Array.isArray(value) ? value : [value],
  )
  @IsArray()
  @IsIn(['CERTIFIED', 'NOT_CERTIFIED'], { each: true })
  certificationStatuses?: string[];

  // ============================================================
  // MANDATORY
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter courses based on whether they are mandatory.',
    example: true,
    type: Boolean,
  })
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isMandatory?: boolean;

  // ============================================================
  // SEARCH
  // ============================================================

  @ApiPropertyOptional({
    description: 'Search report records.',
    example: 'SBOA',
  })
  @IsOptional()
  @IsString()
  search?: string;

  // ============================================================
  // PAGINATION
  // ============================================================

  @ApiPropertyOptional({
    description: 'Page number.',
    example: 1,
    default: 1,
    minimum: 1,
    type: Number,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    description: 'Number of records per page.',
    example: 5,
    default: 5,
    minimum: 1,
    maximum: 100,
    type: Number,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 5;

  // ============================================================
  // SORTING
  // ============================================================

  @ApiPropertyOptional({
    example: 'completionPercentage',
    enum: [
      'name',
      'users',
      'coursesAssigned',
      'modules',
      'completed',
      'inProgress',
      'notStarted',
      'overdue',
      'avgQuiz',
      'completionPercentage',
    ],
    description: 'Column to sort by.',
  })
  @IsOptional()
  @IsIn([
    'name',
    'users',
    'coursesAssigned',
    'modules',
    'completed',
    'inProgress',
    'notStarted',
    'overdue',
    'avgQuiz',
    'completionPercentage',
  ])
  sortBy?: string;

  @ApiPropertyOptional({
    example: 'desc',
    enum: ['asc', 'desc'],
    default: 'desc',
    description: 'Sort direction.',
  })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc';
}
