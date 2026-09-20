import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateLearnerDto {
  @ApiProperty({
    example: 'John Student',
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: 'john.student@school.com',
  })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({
    example: '+919876543210',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    example: 'Learner@123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description:
      'Learner role assigned to this learner. The role must be assigned to the selected school.',
  })
  @IsUUID()
  learnerRoleId: string;

  @ApiProperty({
    example: 'EMP001',
  })
  @IsString()
  @MinLength(3)
  employeeId: string;

  @ApiPropertyOptional({
    example: '550e8400-e29b-41d4-a716-446655440002',
    description: 'Department assigned to the learner.',
  })
  @IsOptional()
  @IsUUID()
  departmentId?: string;

  @ApiPropertyOptional({
    example: '2026-06-01',
  })
  @IsOptional()
  @IsDateString()
  dateOfJoining?: string;

  @ApiPropertyOptional({
    example: '550e8400-e29b-41d4-a716-446655440003',
    description:
      'School ID. Required when SUPER_ADMIN creates a learner. ADMIN school ID comes from JWT.',
  })
  @IsOptional()
  @IsUUID()
  schoolId?: string;
}
