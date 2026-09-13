import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';

import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generateAccessToken(payload: JwtPayload) {
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '12h',
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
    try {
      return await this.jwtService.verifyAsync(token);
    } catch (error) {
      console.log('cvbnm', 'error');
      return null;
    }
  }
  hashRefreshToken(token: string) {
    return createHash('sha256').update(token).digest('hex');
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
