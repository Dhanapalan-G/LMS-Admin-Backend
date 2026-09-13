import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class LearnerLoginDto {
  @ApiProperty({ example: 'EMP001' })
  @MinLength(3)
  @IsString()
  employeeId: string;

  @ApiProperty({ example: 'Password@123' })
  @IsString()
  @MinLength(8)
  password: string;
}
