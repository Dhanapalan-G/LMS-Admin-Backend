import { ApiPropertyOptional } from '@nestjs/swagger';

import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsEnum,
  IsString,
  IsUUID,
} from 'class-validator';

import { Type } from 'class-transformer';

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
    example: 'CBSE',
    description: 'Filter dashboard data by school board',
  })
  @IsOptional()
  @IsString()
  board?: string;

  @ApiPropertyOptional({
    example: 'uuid',
    description: 'Filter dashboard data by school',
  })
  @IsOptional()
  @IsUUID()
  schoolId?: string;

  @ApiPropertyOptional({
    example: 'uuid',
    description: 'Filter dashboard data by learner role',
  })
  @IsOptional()
  @IsUUID()
  roleId?: string;
}
