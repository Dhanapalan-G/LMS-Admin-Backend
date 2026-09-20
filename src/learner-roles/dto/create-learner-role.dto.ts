import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLearnerRoleDto {
  @ApiProperty({
    example: 'Teacher',
    description: 'Name of the learner role',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    example: 'TEACHER',
    description: 'Unique code for the learner role',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  code: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Learner role active status',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({
    example: ['school-uuid-1', 'school-uuid-2'],
    description: 'Schools to which this learner role is assigned',
    type: [String],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  schoolIds: string[];
}
