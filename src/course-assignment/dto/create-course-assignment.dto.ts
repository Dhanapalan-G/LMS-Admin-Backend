import {
  IsArray,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  ArrayNotEmpty,
} from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';

export enum CourseAssignmentStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export class CreateCourseAssignmentDto {
  @ApiPropertyOptional({
    type: [String],
    example: ['school-uuid-1', 'school-uuid-2'],
    description: 'IDs of the schools to which this assignment applies.',
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  schoolIds?: string[];

  @ApiPropertyOptional({
    type: [String],
    example: ['learner-type-uuid-1', 'learner-type-uuid-2'],
    description: 'Learner type / role IDs targeted by this assignment.',
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  roleIds?: string[];

  @ApiPropertyOptional({
    type: [String],
    example: ['department-uuid-1', 'department-uuid-2'],
    description: 'Department IDs targeted by this assignment.',
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  departmentIds?: string[];

  @ApiPropertyOptional({
    type: [String],
    example: ['category-uuid-1', 'category-uuid-2'],
    description: 'Category IDs used to target courses for this assignment.',
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  categoryIds?: string[];

  @ApiPropertyOptional({
    type: [String],
    example: ['course-uuid-1', 'course-uuid-2'],
    description:
      'Course IDs to be assigned. Use this when assigning specific courses.',
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  courseIds?: string[];

  @ApiPropertyOptional({
    example: '2026-12-31T23:59:59.000Z',
    description: 'Due date applied to the courses in this assignment.',
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiPropertyOptional({
    enum: CourseAssignmentStatus,
    enumName: 'CourseAssignmentStatus',
    example: CourseAssignmentStatus.ACTIVE,
    default: CourseAssignmentStatus.ACTIVE,
    description: 'Status of the course assignment.',
  })
  @IsOptional()
  @IsEnum(CourseAssignmentStatus)
  status?: CourseAssignmentStatus;
}
