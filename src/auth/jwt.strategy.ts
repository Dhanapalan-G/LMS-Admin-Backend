import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { PrismaService } from '../prisma/prisma.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
    });
  }

  async validate(payload: JwtPayload) {
    if (!payload.sub || !payload.authType) {
      throw new UnauthorizedException('Invalid token');
    }

    // --------------------------------------------------
    // ADMIN
    // --------------------------------------------------

    if (payload.authType === 'ADMIN') {
      const admin = await this.prisma.adminUser.findUnique({
        where: {
          id: payload.sub,
        },
      });

      if (!admin) {
        throw new UnauthorizedException('Admin not found');
      }

      if (admin.status !== 'ACTIVE') {
        throw new UnauthorizedException('Admin account is not active');
      }

      return {
        id: admin.id,
        authType: 'ADMIN',
        schoolId: admin.schoolId,
        role: admin.role,
        name: admin.name,
        email: admin.email,
      };
    }

    // --------------------------------------------------
    // LEARNER
    // --------------------------------------------------

    if (payload.authType === 'LEARNER') {
      const learner = await this.prisma.learner.findUnique({
        where: {
          id: payload.sub,
        },

        select: {
          id: true,
          schoolId: true,
          learnerRoleId: true,
          name: true,
          email: true,
          status: true,
        },
      });

      if (!learner) {
        throw new UnauthorizedException('Learner not found');
      }

      if (learner.status !== 'ACTIVE') {
        throw new UnauthorizedException('Learner account is not active');
      }

      return {
        id: learner.id,
        authType: 'LEARNER',
        schoolId: learner.schoolId,
        learnerRoleId: learner.learnerRoleId,
        name: learner.name,
        email: learner.email,
      };
    }

    // --------------------------------------------------
    // INVALID AUTH TYPE
    // --------------------------------------------------

    throw new UnauthorizedException('Invalid authentication type');
  }
}
