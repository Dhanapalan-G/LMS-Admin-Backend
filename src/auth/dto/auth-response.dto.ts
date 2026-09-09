import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../generated/prisma/client';

export class LoginResponseDataDto {
  @ApiProperty({
    example: true,
  })
  otpRequired: boolean;

  @ApiProperty({
    example: '8a7c3b20-1234-4567-8901-abcdef123456',
  })
  verificationId: string;

  @ApiProperty({
    example: 300,
  })
  otpExpiresIn: number;
}

export class AuthUserDto {
  @ApiProperty({
    example: '32931b50-67c0-4ad6-1234-567890abcdef',
  })
  id: string;

  @ApiProperty({
    example: 'John Admin',
  })
  name: string;

  @ApiProperty({
    example: 'admin@school.com',
  })
  email: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.SUPER_ADMIN
  })
  role: UserRole;

  @ApiProperty({
    example: 'school-uuid',
    nullable: true,
  })
  schoolId: string | null;
}

export class VerifyOtpResponseDataDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIs...',
  })
  accessToken: string;

  @ApiProperty({
    example: 'a7c4e9...',
  })
  refreshToken: string;

  @ApiProperty({
    type: AuthUserDto,
  })
  user: AuthUserDto;
}

export class RefreshTokenResponseDataDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIs...',
  })
  accessToken: string;
}
