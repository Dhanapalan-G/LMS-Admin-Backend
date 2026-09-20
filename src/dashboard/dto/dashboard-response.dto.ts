import { ApiProperty } from '@nestjs/swagger';

class DashboardSummaryDto {
  @ApiProperty({ example: 120 })
  totalCourses: number;

  @ApiProperty({ example: 80 })
  publishedCourses: number;

  @ApiProperty({ example: 40 })
  draftCourses: number;

  @ApiProperty({ example: 75 })
  mandatoryCourses: number;

  @ApiProperty({ example: 1250 })
  totalLearners: number;

  @ApiProperty({ example: 850 })
  activeLearners: number;

  @ApiProperty({ example: 78 })
  averageCompletion: number;
}

class SchoolPerformanceDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  schoolId: string;

  @ApiProperty({ example: 'ABC Matriculation School' })
  school: string;

  @ApiProperty({ example: 78 })
  completion: number;

  @ApiProperty({ example: 250 })
  totalUsers: number;
}

export class DashboardResponseDto {
  @ApiProperty({
    type: DashboardSummaryDto,
  })
  summary: DashboardSummaryDto;

  @ApiProperty({
    type: [SchoolPerformanceDto],
  })
  schoolPerformance: SchoolPerformanceDto[];
}
