import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CategoryResponseDto {
  @ApiProperty({
    example: '32931b50-67c0-4ad6-9061-123456789abc',
  })
  id: string;

  @ApiProperty({
    example: 'Backend Development',
  })
  name: string;

  @ApiPropertyOptional({
    example: 'Courses related to backend development',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    example: 'ACTIVE',
  })
  status: string;
}
