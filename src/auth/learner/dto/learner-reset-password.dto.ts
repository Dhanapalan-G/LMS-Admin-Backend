import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class LearnerResetPasswordDto {
  @ApiProperty({
    example: 'temporary-reset-token',
  })
  @IsString()
  resetToken: string;

  @ApiProperty({
    example: 'NewPassword@123',
  })
  @IsString()
  @MinLength(8)
  newPassword: string;
}
