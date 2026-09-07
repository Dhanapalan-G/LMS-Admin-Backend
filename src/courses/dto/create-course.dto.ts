import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
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
}
