import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LearnerLogoutDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIs...',
  })
  @IsString()
  refreshToken: string;
}
