import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class AdminPasswordVerifyOtpDto {
  @ApiProperty({
    example: 'ADM001',
    description: 'Admin employee ID',
  })
  @IsString()
  employeeId: string;

  @ApiProperty({
    example: '482913',
    description: '6 digit OTP',
  })
  @IsString()
  @Length(6, 6)
  otp: string;
}
