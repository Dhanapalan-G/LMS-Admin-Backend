import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';

export class OverdueLearnerQueryDto extends PaginationDto {
  @ApiPropertyOptional({
    example: 'Anitha',
    description: 'Search by learner name, employee ID, or email',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({
    example: 'uuid',
    description: 'Filter by learner role',
  })
  @IsOptional()
  @IsUUID()
  roleId?: string;

  @ApiPropertyOptional({
    example: 'uuid',
    description: 'Filter by school',
  })
  @IsOptional()
  @IsUUID()
  schoolId?: string;

  @ApiPropertyOptional({
    example: 'uuid',
    description: 'Filter by department',
  })
  @IsOptional()
  @IsUUID()
  departmentId?: string;
}