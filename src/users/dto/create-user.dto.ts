import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from '../../generated/prisma/client';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Admin',
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: 'john@school.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Admin@123',
    minLength: 8,
  })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.FACULTY,
  })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiPropertyOptional({
    example: 'school-id',
  })
  @IsOptional()
  @IsString()
  schoolId?: string;
}