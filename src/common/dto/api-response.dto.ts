import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T> {
  @ApiProperty({
    example: true,
  })
  success: boolean;

  @ApiProperty({
    example: 'Request successful',
  })
  message: string;

  data: T;

  constructor(message: string, data: T) {
    this.success = true;
    this.message = message;
    this.data = data;
  }
}