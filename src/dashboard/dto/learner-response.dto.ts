import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class DashboardRoleDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  id: string;

  @ApiProperty({ example: 'Teacher' })
  name: string;

  @ApiProperty({ example: 'TEACHER' })
  code: string;
}

class DashboardSchoolDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  id: string;

  @ApiProperty({ example: 'ABC Matriculation School' })
  name: string;
}

class DashboardDepartmentDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440002',
  })
  id: string;

  @ApiProperty({ example: 'Science' })
  name: string;
}

export class OverdueLearnerItemDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440003',
  })
  id: string;

  @ApiProperty({ example: 'John Kumar' })
  name: string;

  @ApiProperty({ example: 'john@example.com' })
  email: string;

  @ApiProperty({ example: 'EMP001' })
  employeeId: string;

  @ApiPropertyOptional({
    type: DashboardRoleDto,
    nullable: true,
  })
  role: DashboardRoleDto | null;

  @ApiPropertyOptional({
    type: DashboardSchoolDto,
    nullable: true,
  })
  school: DashboardSchoolDto | null;

  @ApiPropertyOptional({
    type: DashboardDepartmentDto,
    nullable: true,
  })
  department: DashboardDepartmentDto | null;

  @ApiProperty({
    example: 'OVERDUE',
  })
  status: string;

  @ApiProperty({
    example: 35,
    description: 'Course completion percentage',
  })
  progress: number;

  @ApiProperty({
    example: '2026-09-15T00:00:00.000Z',
    nullable: true,
  })
  dueDate: Date | null;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440004',
  })
  courseId: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440005',
  })
  enrollmentId: string;
}

class OverduePaginationDto {
  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 10 })
  limit: number;

  @ApiProperty({ example: 222 })
  total: number;

  @ApiProperty({ example: 23 })
  totalPages: number;
}

export class OverdueLearnerResponseDto {
  @ApiProperty({
    type: [OverdueLearnerItemDto],
  })
  data: OverdueLearnerItemDto[];

  @ApiProperty({
    type: OverduePaginationDto,
  })
  pagination: OverduePaginationDto;
}
