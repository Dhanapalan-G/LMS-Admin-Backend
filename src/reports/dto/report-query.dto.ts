import { Type } from 'class-transformer';
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
  // DATE RANGE
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
    description: 'Filter by school board.',
    example: 'CBSE',
    type: String,
  })
  @IsOptional()
  @IsString()
  board?: string;

  // ============================================================
  // SCHOOL - MULTI SELECT
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter by one or more school IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440003',
    ],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  schoolIds?: string[];

  // ============================================================
  // ROLE - MULTI SELECT
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter by one or more learner role IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440005',
    ],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  roleIds?: string[];

  // ============================================================
  // DEPARTMENT - MULTI SELECT
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter by one or more department IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440002',
      '550e8400-e29b-41d4-a716-446655440006',
    ],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  departmentIds?: string[];

  // ============================================================
  // LEARNING CATEGORY - MULTI SELECT
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter by one or more learning category IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440008',
      '550e8400-e29b-41d4-a716-446655440009',
    ],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  categoryIds?: string[];

  // ============================================================
  // COURSE - MULTI SELECT
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter by one or more learning course IDs.',
    example: [
      '550e8400-e29b-41d4-a716-446655440004',
      '550e8400-e29b-41d4-a716-446655440007',
    ],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  courseIds?: string[];

  // ============================================================
  // COMPLETION STATUS - MULTI SELECT
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter by one or more completion statuses.',
    example: ['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED', 'OVERDUE'],
    type: [String],
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  completionStatuses?: string[];

  // ============================================================
  // CERTIFICATION STATUS - MULTI SELECT
  // ============================================================

  @ApiPropertyOptional({
    description: 'Filter by one or more certification statuses.',
    example: ['CERTIFIED', 'NOT_CERTIFIED'],
    type: [String],
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
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
    description: 'Search report results.',
    example: 'Teacher',
    type: String,
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
    description: 'Field used for sorting the report results.',
    example: 'completionPercentage',
    default: 'completionPercentage',
  })
  @IsOptional()
  @IsString()
  sortBy?: string = 'completionPercentage';

  @ApiPropertyOptional({
    description: 'Sort direction.',
    example: 'desc',
    default: 'desc',
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc' = 'desc';
}
