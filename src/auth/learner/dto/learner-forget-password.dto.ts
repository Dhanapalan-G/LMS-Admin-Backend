import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class LearnerForgotPasswordDto {
  @ApiProperty({
    example: 'john@example.com',
    description: 'Learner email or phone number',
  })
  @IsString()
  identifier: string;
}
