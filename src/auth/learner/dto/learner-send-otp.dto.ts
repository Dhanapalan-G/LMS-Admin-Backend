import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { OtpChannel } from '../../../generated/prisma/client';

export class LearnerSendOtpDto {
  @ApiProperty({
    example: 'EMP001',
  })
  @IsString()
  employeeId: string;

  @ApiProperty({
    enum: OtpChannel,
    example: OtpChannel.SMS,
  })
  @IsEnum(OtpChannel)
  channel: OtpChannel;
}
