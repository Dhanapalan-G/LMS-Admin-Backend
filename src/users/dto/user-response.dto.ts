import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '../../generated/prisma/client';

export class UserResponseDto {
  @ApiProperty({
    example: '32931b50-67c0-4ad6-8e31-d734d3308a13',
  })
  id: string;

  @ApiProperty({
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    example: 'john@school.com',
  })
  email: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.FACULTY,
  })
  role: UserRole;

  @ApiPropertyOptional({
    example: 'school-id',
  })
  schoolId?: string | null;
}