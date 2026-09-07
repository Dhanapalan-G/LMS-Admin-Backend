import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateModuleDto {
  @ApiProperty({
    example: 'Introduction to Node.js',
  })
  @IsString()
  title: string;

  @ApiPropertyOptional({
    example: 'Learn the fundamentals of Node.js',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 1,
    description: 'Module display position',
  })
  @IsInt()
  @Min(1)
  orderIndex: number;
}
