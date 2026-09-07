import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CourseStatus } from '../../generated/prisma/client';

export class CourseCategoryResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}

export class CourseResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional({ nullable: true })
  description: string | null;

  @ApiProperty()
  category: CourseCategoryResponseDto;

  @ApiProperty({
    enum: CourseStatus,
    example: CourseStatus.DRAFT,
  })
  status: CourseStatus;

  @ApiPropertyOptional({
    example: 120,
  })
  durationMinutes?: number | null;
}
