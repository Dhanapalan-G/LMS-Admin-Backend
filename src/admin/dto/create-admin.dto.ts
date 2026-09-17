import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { AdminRole } from '../../generated/prisma/enums';

export class CreateAdminDto {
  @ApiProperty({
    example: 'John Admin',
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: 'john.admin@school.com',
  })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({
    example: '+919876543210',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'ADM001' })
  @IsString()
  @MinLength(3)
  employeeId: string;

  @ApiProperty({
    example: 'Admin@123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    enum: AdminRole,
    example: AdminRole.ADMIN,
  })
  @IsEnum(AdminRole)
  role: AdminRole;

  @ApiPropertyOptional({
    example: 'school-uuid',
    description: 'Required for ADMIN. SUPER_ADMIN must not have a school.',
  })
  @IsOptional()
  @IsUUID()
  schoolId?: string;
}
