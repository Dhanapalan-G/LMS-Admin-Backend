import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

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
}
