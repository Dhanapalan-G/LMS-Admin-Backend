import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthType } from './decorators/auth-type.decorator';
import { AdminForgotPasswordDto } from './dto/admin-forgot-password.dto';
import { AdminLoginDto } from './dto/admin-login.dto';
import { AdminLogoutDto } from './dto/admin-logout.dto';
import { AdminPasswordVerifyOtpDto } from './dto/admin-password-verify-otp.dto';
import { AdminRefreshDto } from './dto/admin-refresh.dto';
import { AdminResetPasswordDto } from './dto/admin-reset-password.dto';
import { AdminVerifyOtpDto } from './dto/admin-verify-otp.dto';
import { AuthTypeGuard } from './guards/auth-type.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('Admin - Authentication')
@Controller('admin/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @ApiOperation({
    summary: 'Admin login',
    description:
      'Authenticates an admin using email and password and generates an OTP for verification.',
  })
  @ApiResponse({
    status: 200,
    description: 'OTP generated successfully.',
    schema: {
      example: {
        success: true,
        message: 'OTP generated successfully',
        data: {
          adminUserId: '3462a70c-9f36-46aa-8a89-7839e099cbe2',
          otp: '123456',
          message: 'OTP sent successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid employee or password.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid login request.',
  })
  async login(@Body() dto: AdminLoginDto) {
    return this.authService.login(dto);
  }

  @Post('verify-otp')
  @ApiOperation({
    summary: 'Verify admin OTP',
    description:
      'Verifies the OTP generated during admin login and returns access and refresh tokens.',
  })
  @ApiResponse({
    status: 200,
    description: 'OTP verified successfully.',
    schema: {
      example: {
        success: true,
        message: 'OTP verified successfully',
        data: {
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          admin: {
            id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
            employeeId: 'EMP001',
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'ADMIN',
            schoolId: 'school-uuid',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid or expired OTP.',
  })
  @ApiResponse({
    status: 401,
    description: 'OTP verification failed.',
  })
  async verifyOtp(@Body() dto: AdminVerifyOtpDto) {
    return this.authService.verifyOtp(dto);
  }

  @Post('refresh')
  @ApiOperation({
    summary: 'Refresh admin access token',
    description:
      'Generates a new access token and refresh token using a valid admin refresh token.',
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
        admin: {
          id: 'admin Id',
          name: 'John Admin',
          employeeId: 'ADM001',
          email: 'superadmin@schools.com',
          role: 'SUPER_ADMIN',
          schoolId: 'school Id',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or expired refresh token.',
  })
  async refresh(@Body() dto: AdminRefreshDto) {
    return this.authService.refresh(dto.refreshToken);
  }

  @Post('password/forgot')
  @ApiOperation({
    summary: 'Send password reset OTP',
    description:
      'Validates the admin email or phone number and sends a password reset OTP through the corresponding channel.',
  })
  @ApiBody({
    type: AdminForgotPasswordDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Password reset OTP sent successfully.',
    schema: {
      example: {
        success: true,
        message: 'OTP sent successfully to your email',
        data: {
          message: 'OTP sent successfully to your email',
          otp: '456789',
          channel: 'EMAIL',
          admin: {
            id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
            employeeId: 'EMP001',
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'ADMIN',
            schoolId: 'school-uuid',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Admin not found.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request or OTP resend cooldown.',
  })
  async forgotPassword(@Body() dto: AdminForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Post('password/verify-otp')
  @ApiOperation({
    summary: 'Verify password reset OTP',
    description:
      'Validates the OTP sent to the admin email or phone number and returns a short-lived password reset token.',
  })
  @ApiBody({
    type: AdminPasswordVerifyOtpDto,
  })
  @ApiResponse({
    status: 200,
    description: 'OTP verified successfully.',
    schema: {
      example: {
        success: true,
        message: 'OTP verified successfully',
        data: {
          message: 'OTP verified successfully',
          resetToken: 'eyJhbGciOiJIUzI1NiIs...',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid, expired, or maximum-attempt OTP.',
  })
  @ApiResponse({
    status: 404,
    description: 'Admin not found.',
  })
  async verifyPasswordOtp(@Body() dto: AdminPasswordVerifyOtpDto) {
    return this.authService.verifyPasswordOtp(dto);
  }

  @Post('password/reset')
  @ApiOperation({
    summary: 'Reset admin password',
    description:
      'Resets the admin password using the password reset token received after successful OTP verification.',
  })
  @ApiBody({
    type: AdminResetPasswordDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Password reset successfully.',
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
    status: 401,
    description: 'Invalid or expired password reset token.',
  })
  @ApiResponse({
    status: 404,
    description: 'Admin not found.',
  })
  async resetPassword(@Body() dto: AdminResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @Post('logout')
  @ApiOperation({
    summary: 'Logout admin',
    description:
      'Logs out the admin by invalidating the provided refresh token.',
  })
  @ApiResponse({
    status: 200,
    description: 'Admin logged out successfully.',
    schema: {
      example: {
        success: true,
        message: 'Admin logged out successfully',
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
  async logout(@Body() dto: AdminLogoutDto) {
    return this.authService.logout(dto.refreshToken);
  }

  @Post('logout-all')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard, AuthTypeGuard)
  @AuthType('ADMIN')
  @ApiOperation({
    summary: 'Logout admin from all devices',
    description:
      'Invalidates all active refresh tokens/sessions for the currently authenticated admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Admin logged out from all devices successfully.',
    schema: {
      example: {
        success: true,
        message: 'Admin logged out from all devices successfully',
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
    description: 'Forbidden - Only admins can access this endpoint.',
  })
  async logoutAll(@Req() req: any) {
    return this.authService.logoutAll(req.user.id);
  }
}
