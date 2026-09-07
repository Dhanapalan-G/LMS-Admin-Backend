import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TokenService {
  private readonly accessTokenExpiresIn = '15m';
  private readonly refreshTokenDays = 30;

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async generateTokens(user: {
    id: string;
    email: string;
    role: string;
    schoolId: string | null;
  }) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      schoolId: user.schoolId,
    };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: this.accessTokenExpiresIn,
    });

    const refreshToken = crypto.randomBytes(64).toString('hex');

    const tokenHash = crypto
      .createHash('sha256')
      .update(refreshToken)
      .digest('hex');

    const expiresAt = new Date();

    expiresAt.setDate(expiresAt.getDate() + this.refreshTokenDays);

    await this.prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt,
      },
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshAccessToken(refreshToken: string) {
    const tokenHash = crypto
      .createHash('sha256')
      .update(refreshToken)
      .digest('hex');

    const storedToken = await this.prisma.refreshToken.findFirst({
      where: {
        tokenHash,
        revokedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (!storedToken) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: storedToken.userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        schoolId: true,
        isActive: true,
      },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('User account is inactive');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      schoolId: user.schoolId,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: this.accessTokenExpiresIn,
    });

    return {
      accessToken,
    };
  }

  async logout(refreshToken: string) {
    const tokenHash = crypto
      .createHash('sha256')
      .update(refreshToken)
      .digest('hex');

    await this.prisma.refreshToken.updateMany({
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
}
