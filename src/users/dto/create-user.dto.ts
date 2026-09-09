import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { LearnerType, UserRole } from '../../generated/prisma/client';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the user',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Unique email address of the user',
  })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({
    example: '+919876543210',
    description: 'User phone number',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    example: 'password123',
    description: 'User login password',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.SUPER_ADMIN,
    description: 'Top-level user role',
  })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiPropertyOptional({
    enum: LearnerType,
    example: LearnerType.TEACHER,
    description: 'Learner category. Required when role is LEARNER.',
  })
  @IsOptional()
  @IsEnum(LearnerType)
  learnerType?: LearnerType;

  @ApiPropertyOptional({
    example: 'EMP001',
    description: 'Employee ID. Applicable to staff members.',
  })
  @IsOptional()
  @IsString()
  employeeId?: string;

  @ApiPropertyOptional({
    example: 'CBSE',
    description: 'Education board',
  })
  @IsOptional()
  @IsString()
  board?: string;

  @ApiPropertyOptional({
    example: 'Computer Science',
    description: 'Department of the user',
  })
  @IsOptional()
  @IsString()
  department?: string;

  @ApiPropertyOptional({
    example: '2025-06-10',
    description: 'Date the user joined the organization',
  })
  @IsOptional()
  @IsDateString()
  dateOfJoining?: string;

  @ApiPropertyOptional({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description:
      'School ID. Used by SUPER_ADMIN. ADMIN school is derived from the authenticated user.',
  })
  @IsOptional()
  @IsString()
  schoolId?: string;
}
