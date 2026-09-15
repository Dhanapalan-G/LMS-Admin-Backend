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
    example: 'learner-type-uuid',
    description: 'Learner type belonging to the selected school',
  })
  @IsUUID()
  learnerTypeId: string;

  @ApiPropertyOptional({
    example: 'EMP001',
  })
  @ApiProperty({ example: 'EMP001' })
  @IsString()
  @MinLength(3)
  employeeId: string;

  @ApiPropertyOptional({
    example: 'CBSE',
  })
  @IsOptional()
  @IsString()
  board?: string;

  @ApiPropertyOptional({
    example: 'Department Id',
  })
  @IsOptional()
  @IsString()
  departmentId?: string;

  @ApiPropertyOptional({
    example: '2026-06-01',
  })
  @IsOptional()
  @IsDateString()
  dateOfJoining?: string;

  @ApiProperty({
    example: 'school-uuid',
    description:
      'Required when SUPER_ADMIN creates a learner. ADMIN schoolId comes from JWT.',
  })
  @IsOptional()
  @IsUUID()
  schoolId?: string;
}
