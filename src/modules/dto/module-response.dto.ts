import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ModuleResponseDto {
  @ApiProperty({
    example: '32931b50-67c0-4ad6-8e31-d734d3308a13',
  })
  id: string;

  @ApiProperty({
    example: 'Introduction to Node.js',
  })
  title: string;

  @ApiPropertyOptional({
    example: 'Learn the fundamentals of Node.js',
  })
  description?: string | null;

  @ApiProperty({
    example: 1,
  })
  orderIndex: number;
}