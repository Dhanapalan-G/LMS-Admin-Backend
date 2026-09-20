import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { CourseStatus } from '../../generated/prisma/client';

export class CourseCategoryResponseDto {
  @ApiProperty({
    example: 'CATEGORY001',
  })
  id: string;

  @ApiProperty({
    example: 'Leadership & Professional Development',
  })
  name: string;
}

export class CourseResponseDto {
  @ApiProperty({
    example: 'COURSE001',
  })
  id: string;

  @ApiProperty({
    example: 'Effective Leadership in Education',
  })
  title: string;

  @ApiPropertyOptional({
    example: 'Develop leadership capabilities for administrators.',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    type: CourseCategoryResponseDto,
  })
  category: CourseCategoryResponseDto;

  @ApiProperty({
    enum: CourseStatus,
    example: CourseStatus.PUBLISHED,
  })
  status: CourseStatus;

  @ApiPropertyOptional({
    example: 180,
    nullable: true,
    description: 'Course duration in minutes.',
  })
  durationMinutes: number | null;

  @ApiPropertyOptional({
    example: 'https://example.com/course-thumbnail.jpg',
    nullable: true,
    description: 'Course thumbnail URL.',
  })
  thumbnail: string | null;

  @ApiProperty({
    example: ['PRINCIPAL', 'TEACHER'],
    type: [String],
    description: 'Roles targeted by this course.',
  })
  targetRoles: string[];

  @ApiPropertyOptional({
    example: '2026-12-31T23:59:59.000Z',
    nullable: true,
    description: 'Course completion due date.',
  })
  dueDate: Date | null;

  @ApiProperty({
    example: true,
    description: 'Whether the course is mandatory.',
  })
  isMandatory: boolean;

}
