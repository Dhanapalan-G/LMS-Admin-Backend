import { ApiProperty } from '@nestjs/swagger';

export class SchoolResponseDto {
  @ApiProperty({
    example: 'school-id',
  })
  id: string;

  @ApiProperty({
    example: 'St. Xavier School',
  })
  name: string;

  @ApiProperty({
    example: 'SXS001',
  })
  code: string;
}
