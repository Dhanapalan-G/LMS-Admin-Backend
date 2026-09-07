import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ResendOtpDto {
  @ApiProperty({
    example: '8a7c3b20-1234-4567-8901-abcdef123456',
    description: 'OTP verification ID',
  })
  @IsString()
  @IsNotEmpty()
  verificationId: string;
}
