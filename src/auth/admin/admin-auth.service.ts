import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';

import { PrismaService } from '../../prisma/prisma.service';
import { TokenService } from '../../auth/token.service';

import { AdminLoginDto } from './dto/admin-login.dto';
import { AdminVerifyOtpDto } from './dto/admin-verify-otp.dto';

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
  ) {}

  async login(dto: AdminLoginDto) {
    const admin = await this.prisma.adminUser.findUnique({
      where: {
        employeeId: dto.employeeId,
      },
    });

    if (!admin) {
      throw new UnauthorizedException('Invalid Employee Id or password');
    }

    if (admin.status !== 'ACTIVE') {
      throw new UnauthorizedException(
        `Admin account is ${admin.status.toLowerCase()}`,
      );
    }

    const passwordValid = await bcrypt.compare(dto.password, admin.password);

    if (!passwordValid) {
      throw new UnauthorizedException('Invalid Employee Id or password');
    }

    const otp = randomInt(100000, 1000000).toString();

    const codeHash = await bcrypt.hash(otp, 10);

    const expiresAt = new Date(Date.now() + 20 * 60 * 1000);

    await this.prisma.adminOtpVerification.create({
      data: {
        adminUserId: admin.id,
        codeHash,
        purpose: 'LOGIN',
        channel: 'SMS',
        expiresAt,
        lastSentAt: new Date(),
      },
    });

    return {
      message: 'OTP sent successfully',
      adminUserId: admin.id,

      // Development only
      otp,
    };
  }

  async verifyOtp(dto: AdminVerifyOtpDto) {
    const admin = await this.prisma.adminUser.findUnique({
      where: {
        employeeId: dto.employeeId,
      },
    });

    if (!admin) {
      throw new UnauthorizedException('Invalid OTP');
    }
    const otpRecord = await this.prisma.adminOtpVerification.findFirst({
      where: {
        adminUserId: admin.id,
        purpose: 'LOGIN',
        verifiedAt: null,
        revokedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    if (!otpRecord) {
      throw new UnauthorizedException('OTP expired or invalid');
    }

    if (otpRecord.attempts >= otpRecord.maxAttempts) {
      throw new UnauthorizedException('Maximum OTP attempts exceeded');
    }

    const valid = await bcrypt.compare(dto.otp, otpRecord.codeHash);

    if (!valid) {
      await this.prisma.adminOtpVerification.update({
        where: {
          id: otpRecord.id,
        },
        data: {
          attempts: {
            increment: 1,
          },
        },
      });

      throw new UnauthorizedException('Invalid OTP');
    }
    await this.prisma.adminOtpVerification.update({
      where: {
        id: otpRecord.id,
      },
      data: {
        verifiedAt: new Date(),
      },
    });

    return this.issueTokens(admin);
  }

  private async issueTokens(admin: any) {
    const payload = {
      sub: admin.id,
      authType: 'ADMIN' as const,
      schoolId: admin.schoolId,
      role: admin.role,
    };

    const accessToken = await this.tokenService.generateAccessToken(payload);
    const refreshToken = await this.tokenService.generateRefreshToken(payload);
    const tokenHash = this.tokenService.hashRefreshToken(refreshToken);
    const storedToken = await this.prisma.adminRefreshToken.create({
      data: {
        adminUserId: admin.id,
        tokenHash,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    return {
      message: 'Login successful',
      accessToken,
      refreshToken,
      admin: {
        id: admin.id,
        name: admin.name,
        employeeId: admin.employeeId,
        email: admin.email,
        role: admin.role,
        schoolId: admin.schoolId,
      },
    };
  }

  async refresh(refreshToken: string) {
    let payload: any;

    try {
      payload = await this.tokenService.verifyRefreshToken(refreshToken);
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    if (payload.tokenType !== 'REFRESH' || payload.authType !== 'ADMIN') {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const tokenHash = this.tokenService.hashRefreshToken(refreshToken);

    const storedToken = await this.prisma.adminRefreshToken.findFirst({
      where: {
        tokenHash,
        revokedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (!storedToken) {
      throw new UnauthorizedException('Refresh token is invalid or revoked');
    }

    const admin = await this.prisma.adminUser.findUnique({
      where: {
        id: payload.sub,
      },
    });

    if (!admin || admin.status !== 'ACTIVE') {
      throw new UnauthorizedException('Admin account is not active');
    }

    // Rotate old refresh token
    await this.prisma.adminRefreshToken.update({
      where: {
        id: storedToken.id,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    return this.issueTokens(admin);
  }

  async logout(refreshToken: string) {
    const tokenHash = this.tokenService.hashRefreshToken(refreshToken);

    await this.prisma.adminRefreshToken.updateMany({
      where: {
        tokenHash,
        revokedAt: null,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    return {
      message: 'Logged out successfully',
    };
  }

  async logoutAll(adminUserId: string) {
    await this.prisma.adminRefreshToken.updateMany({
      where: {
        adminUserId,
        revokedAt: null,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    return {
      message: 'Logged out from all devices successfully',
    };
  }
}
