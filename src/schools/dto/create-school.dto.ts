import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateSchoolDto {
  @ApiProperty({
    example: 'St. Xavier School',
    description: 'Name of the school',
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: 'SXS001',
    description: 'Unique school code',
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  code: string;

  @ApiPropertyOptional({
    example: 'CBSE',
  })
  @IsString()
  board: string;

  @ApiPropertyOptional({
    example: 'true',
    description: 'School status',
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
