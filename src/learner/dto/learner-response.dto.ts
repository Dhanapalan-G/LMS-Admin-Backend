import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { LearnerStatus } from '../../generated/prisma/client';

export class LearnerResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  schoolId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  phone: string | null;

  @ApiProperty()
  passwordSet: boolean;

  @ApiProperty()
  learnerRoleId: string;

  @ApiProperty()
  employeeId: string;

  @ApiPropertyOptional()
  board: string | null;

  @ApiPropertyOptional()
  department: string | null;

  @ApiPropertyOptional()
  dateOfJoining: Date | null;

  @ApiProperty({
    enum: LearnerStatus,
  })
  status: LearnerStatus;

  @ApiPropertyOptional()
  rejectionReason: string | null;

  @ApiPropertyOptional()
  rejectedAt: Date | null;

  @ApiPropertyOptional()
  approvedAt: Date | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
