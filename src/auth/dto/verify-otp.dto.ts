import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty({
    example: '8a7c3b20-1234-4567-8901-abcdef123456',
    description: 'OTP verification ID returned by the login API',
  })
  @IsString()
  @IsNotEmpty()
  verificationId: string;

  @ApiProperty({
    example: '482913',
    description: 'Six digit OTP',
  })
  @IsString()
  @Length(6, 6)
  otp: string;
}
