import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'admin@learning.com',
    description: 'Registered user email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Admin@123',
    description: 'User password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
