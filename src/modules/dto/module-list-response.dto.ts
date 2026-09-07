import { ApiProperty } from '@nestjs/swagger';
import { ModuleResponseDto } from './module-response.dto';

class PaginationMetaDto {
  @ApiProperty({
    example: 1,
    description: 'Current page number',
  })
  page: number;

  @ApiProperty({
    example: 10,
    description: 'Number of items per page',
  })
  limit: number;

  @ApiProperty({
    example: 25,
    description: 'Total number of modules',
  })
  total: number;

  @ApiProperty({
    example: 3,
    description: 'Total number of pages',
  })
  totalPages: number;

  @ApiProperty({
    example: true,
    description: 'Whether another page is available',
  })
  hasNextPage: boolean;

  @ApiProperty({
    example: false,
    description: 'Whether a previous page is available',
  })
  hasPreviousPage: boolean;
}

export class ModuleListResponseDto {
  @ApiProperty({
    type: [ModuleResponseDto],
    description: 'List of modules',
  })
  items: ModuleResponseDto[];

  @ApiProperty({
    type: PaginationMetaDto,
    description: 'Pagination information',
  })
  meta: PaginationMetaDto;
}
