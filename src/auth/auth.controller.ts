import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ResendOtpDto } from './dto/resend-otp.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { OtpService } from './services/otp.service';
import { TokenService } from './services/token.service';

@ApiTags('Authentication')
@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly otpService: OtpService,
    private readonly tokenService: TokenService,
  ) {}

  // =========================================================
  // ADMIN LOGIN
  // =========================================================

  @Post('admin/login')
  @ApiOperation({
    summary: 'Admin login',
    description:
      'Validates admin-side user credentials and sends an OTP. Access and refresh tokens are issued only after successful OTP verification.',
  })
  @ApiBody({
    type: LoginDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Credentials validated and OTP sent successfully.',
    schema: {
      example: {
        success: true,
        message: 'OTP sent successfully',
        data: {
          otpRequired: true,
          verificationId: '8a7c3b20-1234-4567-8901-abcdef123456',
          otpExpiresIn: 300,
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description:
      'Invalid credentials, inactive account, or user does not have an admin-side role.',
  })
  @ApiResponse({
    status: 429,
    description: 'OTP request cooldown is active.',
  })
  async adminLogin(@Body() dto: LoginDto) {
    const result = await this.authService.loginAdmin(dto.email, dto.password);

    return {
      message: 'OTP sent successfully',
      data: result,
    };
  }

  // =========================================================
  // LEARNER LOGIN
  // =========================================================

  @Post('learner/login')
  @ApiOperation({
    summary: 'Learner login',
    description:
      'Validates learner credentials and sends an OTP. Access and refresh tokens are issued only after successful OTP verification.',
  })
  @ApiBody({
    type: LoginDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Credentials validated and OTP sent successfully.',
    schema: {
      example: {
        success: true,
        message: 'OTP sent successfully',
        data: {
          otpRequired: true,
          verificationId: '8a7c3b20-1234-4567-8901-abcdef123456',
          otpExpiresIn: 300,
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description:
      'Invalid credentials, inactive account, or user is not a learner.',
  })
  @ApiResponse({
    status: 429,
    description: 'OTP request cooldown is active.',
  })
  async learnerLogin(@Body() dto: LoginDto) {
    const result = await this.authService.loginLearner(dto.email, dto.password);

    return {
      message: 'OTP sent successfully',
      data: result,
    };
  }

  // =========================================================
  // VERIFY OTP
  // =========================================================

  @Post('verify-otp')
  @ApiOperation({
    summary: 'Verify login OTP',
    description:
      'Verifies the OTP generated during admin or learner login and returns access and refresh tokens.',
  })
  @ApiBody({
    type: VerifyOtpDto,
  })
  @ApiResponse({
    status: 200,
    description: 'OTP verified successfully and authentication completed.',
    schema: {
      example: {
        success: true,
        message: 'Authentication successful',
        data: {
          accessToken: 'eyJhbGciOiJIUzI1NiIs...',
          refreshToken: 'a7c4e9d8...',
          user: {
            id: '32931b50-67c0-4ad6-1234-567890abcdef',
            name: 'John Admin',
            email: 'admin@school.com',
            role: 'ADMIN',
            schoolId: 'school-123',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid, expired, already-used, or maximum-attempts-exceeded OTP.',
  })
  async verifyOtp(@Body() dto: VerifyOtpDto) {
    const user = await this.otpService.verifyOtp(dto.verificationId, dto.otp);

    const tokens = await this.tokenService.generateTokens(user);

    return {
      message: 'Authentication successful',
      data: {
        ...tokens,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          schoolId: user.schoolId,
        },
      },
    };
  }

  // =========================================================
  // RESEND OTP
  // =========================================================

  @Post('resend-otp')
  @ApiOperation({
    summary: 'Resend login OTP',
    description:
      'Generates and sends a new OTP for an existing login verification request.',
  })
  @ApiBody({
    type: ResendOtpDto,
  })
  @ApiResponse({
    status: 200,
    description: 'OTP resent successfully.',
    schema: {
      example: {
        success: true,
        message: 'OTP resent successfully',
        data: {
          verificationId: 'c1d2e3f4-1234-4567-8901-abcdef123456',
          expiresIn: 300,
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid or already verified OTP request.',
  })
  @ApiResponse({
    status: 429,
    description: 'OTP resend cooldown has not expired.',
  })
  async resendOtp(@Body() dto: ResendOtpDto) {
    const verification = await this.otpService.resendOtp(dto.verificationId);

    return {
      message: 'OTP resent successfully',
      data: verification,
    };
  }

  // =========================================================
  // REFRESH TOKEN
  // =========================================================

  @Post('refresh')
  @ApiOperation({
    summary: 'Refresh access token',
    description: 'Generates a new access token using a valid refresh token.',
  })
  @ApiBody({
    type: RefreshTokenDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Access token refreshed successfully.',
    schema: {
      example: {
        success: true,
        message: 'Token refreshed successfully',
        data: {
          accessToken: 'eyJhbGciOiJIUzI1NiIs...',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid, expired, or revoked refresh token.',
  })
  async refresh(@Body() dto: RefreshTokenDto) {
    const result = await this.tokenService.refreshAccessToken(dto.refreshToken);

    return {
      message: 'Token refreshed successfully',
      data: result,
    };
  }

  // =========================================================
  // CURRENT USER
  // =========================================================

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get current logged-in user',
    description:
      'Returns the profile of the user associated with the supplied access token.',
  })
  @ApiResponse({
    status: 200,
    description: 'Profile retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Profile retrieved successfully',
        data: {
          id: '32931b50-67c0-4ad6-1234-567890abcdef',
          name: 'John Admin',
          email: 'admin@school.com',
          role: 'ADMIN',
          schoolId: 'school-123',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Missing, invalid, or expired access token.',
  })
  async me(@Req() req: any) {
    const user = await this.authService.getProfile(req.user.id);

    return {
      message: 'Profile retrieved successfully',
      data: user,
    };
  }

  // =========================================================
  // LOGOUT
  // =========================================================

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Logout current user',
    description:
      'Revokes the supplied refresh token and ends the current authenticated session.',
  })
  @ApiBody({
    type: RefreshTokenDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Logout successful.',
    schema: {
      example: {
        success: true,
        message: 'Logged out successfully',
        data: {
          message: 'Logged out successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Missing, invalid, or expired access token.',
  })
  async logout(@Body() dto: RefreshTokenDto) {
    return this.tokenService.logout(dto.refreshToken);
  }
}
