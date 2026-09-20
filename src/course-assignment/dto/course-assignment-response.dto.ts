import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { CourseAssignmentStatus } from './create-course-assignment.dto';

class AssignmentSchoolDto {
  @ApiProperty({
    example: 'school-uuid-1',
  })
  id: string;

  @ApiProperty({
    example: 'St. Xavier School',
  })
  name: string;

  @ApiProperty({
    example: 'SXS001',
  })
  code: string;
}

class AssignmentRoleDto {
  @ApiProperty({
    example: 'learner-type-uuid-1',
  })
  id: string;

  @ApiProperty({
    example: 'Faculty',
  })
  name: string;
}

class AssignmentDepartmentDto {
  @ApiProperty({
    example: 'department-uuid-1',
  })
  id: string;

  @ApiProperty({
    example: 'Mathematics',
  })
  name: string;

  @ApiProperty({
    example: 'MATH',
  })
  code: string;
}

class AssignmentCategoryDto {
  @ApiProperty({
    example: 'category-uuid-1',
  })
  id: string;

  @ApiProperty({
    example: 'Safety',
  })
  name: string;
}

class AssignmentCourseDto {
  @ApiProperty({
    example: 'course-uuid-1',
  })
  id: string;

  @ApiProperty({
    example: 'Workplace Safety',
  })
  title: string;

  @ApiPropertyOptional({
    example: '2026-12-31T23:59:59.000Z',
    nullable: true,
    format: 'date-time',
  })
  dueDate?: Date | null;
}

export class CourseAssignmentResponseDto {
  @ApiProperty({
    example: 'assignment-uuid-1',
  })
  id: string;

  @ApiPropertyOptional({
    example: 'Faculty Safety Training',
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    enum: CourseAssignmentStatus,
    enumName: 'CourseAssignmentStatus',
    example: CourseAssignmentStatus.ACTIVE,
  })
  status: CourseAssignmentStatus;

  @ApiProperty({
    type: [AssignmentSchoolDto],
    description: 'Schools targeted by this assignment.',
  })
  schools: AssignmentSchoolDto[];

  @ApiProperty({
    type: [AssignmentRoleDto],
    description: 'Learner types / roles targeted by this assignment.',
  })
  roles: AssignmentRoleDto[];

  @ApiProperty({
    type: [AssignmentDepartmentDto],
    description: 'Departments targeted by this assignment.',
  })
  departments: AssignmentDepartmentDto[];

  @ApiProperty({
    type: [AssignmentCategoryDto],
    description: 'Categories targeted by this assignment.',
  })
  categories: AssignmentCategoryDto[];

  @ApiProperty({
    type: [AssignmentCourseDto],
    description: 'Courses included in this assignment.',
  })
  courses: AssignmentCourseDto[];

  @ApiPropertyOptional({
    example: '2026-12-31T23:59:59.000Z',
    nullable: true,
    format: 'date-time',
    description: 'Default due date for this assignment.',
  })
  dueDate?: Date | null;

  @ApiProperty({
    example: '2026-09-20T10:00:00.000Z',
    format: 'date-time',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2026-09-20T10:00:00.000Z',
    format: 'date-time',
  })
  updatedAt: Date;
}
