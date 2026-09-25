import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CertificationLearnerResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  employeeId?: string | null;

  @ApiProperty()
  email: string;
}

export class CertificationRoleResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}

export class CertificationSchoolResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  code?: string | null;
}

export class CertificationDepartmentResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}

export class CertificationCourseResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional()
  code?: string | null;
}

export class CertificationCategoryResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}

export class CertificationCertificateResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  certificateNumber: string;

  @ApiPropertyOptional()
  fileUrl?: string | null;

  @ApiProperty()
  issuedAt: Date;
}

export class CertificationItemResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: CertificationLearnerResponseDto })
  learner: CertificationLearnerResponseDto;

  @ApiProperty({ type: CertificationRoleResponseDto })
  role: CertificationRoleResponseDto;

  @ApiProperty({ type: CertificationSchoolResponseDto })
  school: CertificationSchoolResponseDto;

  @ApiProperty({ type: CertificationCourseResponseDto })
  course: CertificationCourseResponseDto;

  @ApiProperty({ type: [CertificationCategoryResponseDto] })
  categories: CertificationCategoryResponseDto[];

  @ApiPropertyOptional({
    type: CertificationDepartmentResponseDto,
  })
  department?: CertificationDepartmentResponseDto | null;

  @ApiPropertyOptional()
  completedAt?: Date | null;

  @ApiPropertyOptional({
    type: CertificationCertificateResponseDto,
  })
  certificate?: CertificationCertificateResponseDto | null;

  @ApiProperty({
    enum: ['CERTIFIED', 'IN_PROGRESS', 'NOT_CERTIFIED'],
  })
  status: 'CERTIFIED' | 'IN_PROGRESS' | 'NOT_CERTIFIED';
}

export class CertificationSummaryResponseDto {
  @ApiProperty()
  certified: number;

  @ApiProperty()
  inProgress: number;

  @ApiProperty()
  notCertified: number;

  @ApiProperty()
  totalRecords: number;
}

export class CertificationPaginationResponseDto {
  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  totalPages: number;
}

export class CertificationListResponseDto {
  @ApiProperty({ type: CertificationSummaryResponseDto })
  summary: CertificationSummaryResponseDto;

  @ApiProperty({ type: [CertificationItemResponseDto] })
  items: CertificationItemResponseDto[];

  @ApiProperty({ type: CertificationPaginationResponseDto })
  pagination: CertificationPaginationResponseDto;
}