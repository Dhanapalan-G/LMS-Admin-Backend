import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';

import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generateAccessToken(payload: JwtPayload) {
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '15d',
    });
    return token;
  }

  async generateRefreshToken(payload: JwtPayload) {
    return this.jwtService.signAsync(
      {
        ...payload,
        tokenType: 'REFRESH',
      },
      {
        expiresIn: '30d',
      },
    );
  }

  async verifyRefreshToken(token: string) {
    return await this.jwtService.verifyAsync(token);
  }

  hashRefreshToken(token: string) {
    return createHash('sha256').update(token).digest('hex');
  }

  async generateAdminPasswordResetToken(adminId: string): Promise<string> {
    return this.jwtService.signAsync(
      {
        sub: adminId,
        authType: 'ADMIN',
        purpose: 'PASSWORD_RESET',
      },
      {
        expiresIn: '10m',
      },
    );
  }

  async verifyAdminPasswordResetToken(token: string) {
    return this.jwtService.verifyAsync(token);
  }

  async generatePasswordResetToken(learnerId: string): Promise<string> {
    return this.jwtService.signAsync(
      {
        sub: learnerId,
        authType: 'LEARNER',
        purpose: 'PASSWORD_RESET',
      },
      {
        expiresIn: '10m',
      },
    );
  }

  async verifyPasswordResetToken(token: string) {
    return this.jwtService.verifyAsync(token);
  }
}
