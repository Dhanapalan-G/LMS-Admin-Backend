import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MinLength } from 'class-validator';

export class LearnerVerifyOtpDto {
  @ApiProperty({
    example: 'EMP001',
    description: 'Employee ID',
  })
  @MinLength(3)
  @IsString()
  employeeId: string;

  @ApiProperty({ example: '482913' })
  @IsString()
  @Length(6, 6)
  otp: string;
}
