import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class LearnerRegisterDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the learner',
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'Learner email address',
  })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({
    example: '9876543210',
    description: 'Learner phone number',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    example: 'Password@123',
    description: 'Learner password',
  })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'School ID selected during registration',
  })
  @IsUUID()
  schoolId: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440001',
    description: 'Learner type ID',
  })
  @IsUUID()
  learnerTypeId: string;

  @ApiProperty({
    example: 'EMP001',
    description: 'Employee ID',
  })
  @MinLength(3)
  @IsString()
  employeeId: string;

  @ApiPropertyOptional({
    example: 'CBSE',
    description: 'Education board',
  })
  @IsOptional()
  @IsString()
  board?: string;

  @ApiPropertyOptional({
    example: 'Computer Science',
    description: 'Department',
  })
  @IsOptional()
  @IsString()
  department?: string;

  @ApiPropertyOptional({
    example: '2026-06-01',
    description: 'Date of joining',
  })
  @IsOptional()
  @IsDateString()
  dateOfJoining?: string;
}
