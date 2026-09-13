import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AdminForgotPasswordDto {
  @ApiProperty({
    example: 'admin@example.com',
    description: 'Admin email or phone number',
  })
  @IsString()
  identifier: string;
}
