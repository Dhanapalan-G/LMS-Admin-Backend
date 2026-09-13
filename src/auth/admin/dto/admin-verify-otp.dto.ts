import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MinLength } from 'class-validator';

export class AdminVerifyOtpDto {
  @ApiProperty({ example: 'ADM001' })
  @MinLength(3)
  @IsString()
  employeeId: string;

  @ApiProperty({ example: '482913' })
  @IsString()
  @Length(6, 6)
  otp: string;
}
