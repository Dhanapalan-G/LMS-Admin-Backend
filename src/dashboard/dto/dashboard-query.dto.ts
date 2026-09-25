import { ApiPropertyOptional } from '@nestjs/swagger';

import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsEnum,
  IsString,
  IsUUID,
  IsArray,
} from 'class-validator';

import { Type, Transform } from 'class-transformer';

import { CourseStatus } from '../../generated/prisma/client';

export class DashboardQueryDto {
  // --------------------------------------------------
  // DATE FILTERS
  // --------------------------------------------------

  @ApiPropertyOptional({
    example: '2026-09-01',
    description: 'Start date for filtering dashboard data',
  })
  @IsOptional()
  @IsDateString()
  fromDate?: string;

  @ApiPropertyOptional({
    example: '2026-09-20',
    description: 'End date for filtering dashboard data',
  })
  @IsOptional()
  @IsDateString()
  toDate?: string;

  // --------------------------------------------------
  // COURSE FILTERS
  // --------------------------------------------------

  @ApiPropertyOptional({
    enum: CourseStatus,
    enumName: 'CourseStatus',
    example: CourseStatus.PUBLISHED,
    description: 'Filter dashboard data by course status',
  })
  @IsOptional()
  @IsEnum(CourseStatus)
  status?: CourseStatus;

  @ApiPropertyOptional({
    example: true,
    description: 'Filter dashboard data by mandatory or optional courses',
  })
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isMandatory?: boolean;

  // --------------------------------------------------
  // ORGANIZATION FILTERS
  // --------------------------------------------------

  @ApiPropertyOptional({
    type: [String],
    example: ['CBSE', 'Matriculation'],
    description: 'Filter dashboard data by one or more school boards',
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  boards?: string[];

  @ApiPropertyOptional({
    type: [String],
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440001',
    ],
    description: 'Filter dashboard data by one or more schools',
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  schoolIds?: string[];

  @ApiPropertyOptional({
    type: [String],
    example: [
      '550e8400-e29b-41d4-a716-446655440002',
      '550e8400-e29b-41d4-a716-446655440003',
    ],
    description: 'Filter dashboard data by one or more learner roles',
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  roleIds?: string[];
}
