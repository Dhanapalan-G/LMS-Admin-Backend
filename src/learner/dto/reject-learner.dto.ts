import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class RejectLearnerDto {
  @ApiProperty({
    example: 'Employee details could not be verified',
    description: 'Reason for rejecting the learner registration',
  })
  @IsString()
  @MinLength(3)
  reason: string;
}
