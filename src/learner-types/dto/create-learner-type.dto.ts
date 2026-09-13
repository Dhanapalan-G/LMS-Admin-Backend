import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLearnerTypeDto {
  @ApiProperty({
    example: 'Teacher',
    description: 'Name of the learner type',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    example: 'TEACHER',
    description: 'Unique code for the learner type within the school',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  code: string;
}
