import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { AdminAuthService } from './admin-auth.service';
import { AdminLoginDto } from './dto/admin-login.dto';
import { AdminVerifyOtpDto } from './dto/admin-verify-otp.dto';
import { AdminLogoutDto } from './dto/admin-logout.dto';
import { AdminRefreshDto } from './dto/admin-refresh.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthTypeGuard } from '../guards/auth-type.guard';
import { AuthType } from '../decorators/auth-type.decorator';

@ApiTags('Admin Authentication')
@Controller('admin/auth')
export class AdminAuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}
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
    return this.adminAuthService.login(dto);
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
    return this.adminAuthService.verifyOtp(dto);
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
    return this.adminAuthService.refresh(dto.refreshToken);
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
    return this.adminAuthService.logout(dto.refreshToken);
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
    return this.adminAuthService.logoutAll(req.user.id);
  }
}
