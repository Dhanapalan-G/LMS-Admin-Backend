import { Type } from 'class-transformer';

import {
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class IndividualUserReportQueryDto {
  // ------------------------------------------------------------
  // SEARCH
  // ------------------------------------------------------------

  @ApiPropertyOptional({
    description: 'Search learner by name, employee ID or email.',
    example: 'Karthik',
  })
  @IsOptional()
  @IsString()
  search?: string;

  // ------------------------------------------------------------
  // SCHOOL
  // ------------------------------------------------------------

  @ApiPropertyOptional({
    description: 'Filter by one school ID.',
    example: '550e8400-e29b-41d4-a716-446655440000',
    format: 'uuid',
  })
  @IsOptional()
  @IsUUID('4')
  schoolId?: string;

  // ------------------------------------------------------------
  // LEARNER ROLE
  // ------------------------------------------------------------

  @ApiPropertyOptional({
    description: 'Filter by one learner role ID.',
    example: '550e8400-e29b-41d4-a716-446655440001',
    format: 'uuid',
  })
  @IsOptional()
  @IsUUID('4')
  learnerRoleId?: string;

  // ------------------------------------------------------------
  // LEARNING STATUS
  // ------------------------------------------------------------

  @ApiPropertyOptional({
    description: 'Filter by one learning status.',
    example: 'IN_PROGRESS',
    enum: ['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED', 'OVERDUE'],
  })
  @IsOptional()
  @IsIn(['COMPLETED', 'IN_PROGRESS', 'NOT_STARTED', 'OVERDUE'])
  status?: string;

  // ------------------------------------------------------------
  // PAGINATION
  // ------------------------------------------------------------

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
    description: 'Number of users per page.',
    example: 10,
    default: 10,
    minimum: 1,
    maximum: 100,
    type: Number,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  // ------------------------------------------------------------
  // SORT
  // ------------------------------------------------------------

  @ApiPropertyOptional({
    description: 'Field used for sorting.',
    example: 'progress',
    default: 'progress',
  })
  @IsOptional()
  @IsString()
  sortBy?: string = 'progress';

  @ApiPropertyOptional({
    description: 'Sort direction.',
    example: 'desc',
    enum: ['asc', 'desc'],
    default: 'desc',
  })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc' = 'desc';
}
