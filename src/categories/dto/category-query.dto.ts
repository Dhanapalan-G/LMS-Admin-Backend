import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';
import { CategoryStatus } from '../../generated/prisma/client';

export class CategoryQueryDto extends PaginationDto {
  @ApiPropertyOptional({
    example: 'Leadership',
    description: 'Search category by name or description',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({
    example: 'role-uuid',
    description: 'Filter categories by learner role',
  })
  @IsOptional()
  @IsString()
  roleId?: string;

  @ApiPropertyOptional({
    example: 'school-uuid',
    description: 'Filter categories by school',
  })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiPropertyOptional({
    example: 'department-uuid',
    description: 'Filter categories by department',
  })
  @IsOptional()
  @IsString()
  departmentId?: string;

  @ApiPropertyOptional({
    enum: CategoryStatus,
    example: CategoryStatus.ACTIVE,
    description: 'Filter categories by status',
  })
  @IsOptional()
  @IsEnum(CategoryStatus)
  status?: CategoryStatus;
}
