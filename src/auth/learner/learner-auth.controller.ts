import {
  Body,
  Controller,
  Post,
  Req,
  Get,
  UseGuards,
  Patch,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';

import { LearnerAuthService } from './learner-auth.service';
import { LearnerRegisterDto } from './dto/learner-register.dto';
import { LearnerVerifyOtpDto } from './dto/learner-verify-otp.dto';
import { LearnerLoginDto } from './dto/learner-login.dto';
import { LearnerRefreshDto } from './dto/learner-refresh.dto';
import { LearnerLogoutDto } from './dto/learner-logout.dto';
import { AuthType } from '../decorators/auth-type.decorator';
import { AuthTypeGuard } from '../guards/auth-type.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LearnerUpdateProfileDto } from './dto/learner-update-profile.dto';
import { LearnerPasswordVerifyOtpDto } from './dto/learner-password-verify-otp.dto';
import { LearnerResetPasswordDto } from './dto/learner-reset-password.dto';
import { LearnerSendOtpDto } from './dto/learner-send-otp.dto';
import { LearnerForgotPasswordDto } from './dto/learner-forget-password.dto';

@ApiTags('Learner Authentication')
@Controller('learner/auth')
export class LearnerAuthController {
  constructor(private readonly learnerAuthService: LearnerAuthService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Register a new learner',
    description:
      'Learner registers from the learner application. The account remains pending until approved by an admin.',
  })
  @ApiResponse({
    status: 201,
    description: 'Learner registered successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid school or learner type',
  })
  @ApiResponse({
    status: 409,
    description: 'Email or phone already exists',
  })
  async register(@Body() dto: LearnerRegisterDto) {
    return this.learnerAuthService.register(dto);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Learner login',
    description: 'Validates learner credentials and generates an OTP.',
  })
  @ApiResponse({
    status: 200,
    description: 'OTP generated successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials or learner account is not active',
  })
  async login(@Body() dto: LearnerLoginDto) {
    return this.learnerAuthService.login(dto);
  }

  @Post('send-otp')
  @ApiOperation({
    summary: 'Send learner login OTP',
    description:
      'Sends a login OTP to the learner through the selected SMS or email channel.',
  })
  @ApiBody({
    type: LearnerSendOtpDto,
  })
  @ApiResponse({
    status: 200,
    description: 'OTP sent successfully',
    schema: {
      example: {
        success: true,
        message: 'OTP sent successfully',
        data: {
          message: 'OTP sent successfully',
          channel: 'SMS',
          expiresIn: 300,
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid channel or OTP resend cooldown is active',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner not found',
  })
  async sendOtp(@Body() dto: LearnerSendOtpDto) {
    return this.learnerAuthService.sendOtp(dto);
  }

  @Post('verify-otp')
  @ApiOperation({
    summary: 'Verify learner OTP',
    description: 'Verifies the OTP and generates access and refresh tokens.',
  })
  @ApiResponse({
    status: 200,
    description: 'OTP verified successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or expired OTP',
  })
  async verifyOtp(@Body() dto: LearnerVerifyOtpDto) {
    return this.learnerAuthService.verifyOtp(dto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard, AuthTypeGuard)
  @AuthType('LEARNER')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get learner profile',
    description:
      'Retrieves the profile details of the currently authenticated learner.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner profile retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Request successful',
        data: {
          id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
          name: 'John Doe',
          email: 'john.doe@example.com',
          role: 'LEARNER',
          employeeId: 'EMP001',
          schoolId: 'school-uuid',
          status: 'ACTIVE',
          emailVerified: true,
          mobileVerified: true,
          isActive: true,
          createdAt: '2026-09-12T10:30:00.000Z',
          updatedAt: '2026-09-12T10:30:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Only learners can access this endpoint.',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner profile not found.',
  })
  async profile(@Req() req: any) {
    return this.learnerAuthService.me(req.user.id);
  }
  @Post('refresh')
  @ApiOperation({
    summary: 'Refresh learner access token',
    description:
      'Generates a new access token and refresh token using the learner refresh token.',
  })
  @ApiResponse({
    status: 200,
    description: 'New access and refresh tokens generated successfully.',
    schema: {
      example: {
        success: true,
        message: 'Tokens refreshed successfully',
        data: {
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or expired refresh token.',
  })
  async refresh(@Body() dto: LearnerRefreshDto) {
    return this.learnerAuthService.refresh(dto.refreshToken);
  }

  @Patch('profile')
  @UseGuards(JwtAuthGuard, AuthTypeGuard)
  @AuthType('LEARNER')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Update learner profile',
    description:
      'Updates the profile details of the currently authenticated learner.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner profile updated successfully.',
    schema: {
      example: {
        success: true,
        message: 'Profile updated successfully',
        data: {
          id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
          name: 'John Doe',
          email: 'john.doe@example.com',
          role: 'LEARNER',
          employeeId: 'EMP001',
          schoolId: 'school-uuid',
          status: 'ACTIVE',
          emailVerified: true,
          mobileVerified: true,
          isActive: true,
          updatedAt: '2026-09-12T10:30:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Only learners can access this endpoint.',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner profile not found.',
  })
  async updateProfile(@Req() req: any, @Body() dto: LearnerUpdateProfileDto) {
    return this.learnerAuthService.updateProfile(req.user.id, dto);
  }

  @Post('password/forgot')
  async forgotPassword(@Body() dto: LearnerForgotPasswordDto) {
    return this.learnerAuthService.forgotPassword(dto);
  }

  @Post('password/verify-otp')
  @ApiOperation({
    summary: 'Verify password reset OTP',
    description:
      'Verifies the OTP provided for the learner password reset process.',
  })
  @ApiResponse({
    status: 200,
    description: 'Password reset OTP verified successfully.',
    schema: {
      example: {
        success: true,
        message: 'OTP verified successfully',
        data: {
          otpVerificationId: 'otp-verification-uuid',
          verified: true,
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid, expired, or exceeded OTP attempts.',
  })
  @ApiResponse({
    status: 404,
    description: 'OTP verification request not found.',
  })
  async verifyPasswordOtp(@Body() dto: LearnerPasswordVerifyOtpDto) {
    return this.learnerAuthService.verifyPasswordOtp(dto);
  }

  @Post('password/reset')
  @ApiOperation({
    summary: 'Reset learner password',
    description:
      'Resets the learner password after successful OTP verification.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner password reset successfully.',
    schema: {
      example: {
        success: true,
        message: 'Password reset successfully',
        data: {
          message: 'Password reset successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid password reset request or OTP verification.',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner account not found.',
  })
  async resetPassword(@Body() dto: LearnerResetPasswordDto) {
    return this.learnerAuthService.resetPassword(dto);
  }

  @Post('logout')
  @ApiOperation({
    summary: 'Logout learner',
    description:
      'Logs out the learner by invalidating the provided refresh token.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner logged out successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learner logged out successfully',
        data: {
          message: 'Logout successful',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or expired refresh token.',
  })
  async logout(@Body() dto: LearnerLogoutDto) {
    return this.learnerAuthService.logout(dto.refreshToken);
  }

  @Post('logout-all')
  @UseGuards(JwtAuthGuard, AuthTypeGuard)
  @AuthType('LEARNER')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Logout learner from all devices',
    description:
      'Invalidates all active refresh tokens/sessions for the currently authenticated learner.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner logged out from all devices successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learner logged out from all devices successfully',
        data: {
          message: 'Logged out from all devices successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Only learners can access this endpoint.',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner account not found.',
  })
  async logoutAll(@Req() req: any) {
    return this.learnerAuthService.logoutAll(req.user.id);
  }
}
