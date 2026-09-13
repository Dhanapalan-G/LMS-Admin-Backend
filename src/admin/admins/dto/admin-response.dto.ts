import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AdminRole, AdminStatus } from '../../../generated/prisma/client';

export class AdminResponseDto {
  @ApiProperty()
  id: string;

  @ApiPropertyOptional()
  schoolId: string | null;

  @ApiPropertyOptional()
  employeeId: string | null;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  phone: string | null;

  @ApiProperty({
    enum: AdminRole,
  })
  role: AdminRole;

  @ApiProperty({
    enum: AdminStatus,
  })
  status: AdminStatus;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
