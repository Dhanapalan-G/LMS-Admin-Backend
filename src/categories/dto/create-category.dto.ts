import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

import { CategoryStatus } from '../../generated/prisma/client';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Backend Development',
    description: 'Category name',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiPropertyOptional({
    example: 'Courses related to backend development',
    description: 'Category description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: 'ACTIVE',
    description: 'Category status',
    enum: CategoryStatus,
    default: 'ACTIVE',
  })
  @IsOptional()
  status?: CategoryStatus;

  @ApiPropertyOptional({
    example: [
      '32931b50-67c0-4ad6-9b5e-123456789abc',
      '42931b50-67c0-4ad6-9b5e-123456789abc',
    ],
    description: 'Course IDs to assign to this category during creation',
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  courseIds?: string[];
}
