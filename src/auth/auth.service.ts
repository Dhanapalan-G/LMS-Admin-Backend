import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '../generated/prisma/client';
import { OtpService } from './services/otp.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly otpService: OtpService,
  ) {}

  async loginAdmin(email: string, password: string) {
    return this.login(email, password, [
      UserRole.ADMIN,
      UserRole.PRINCIPAL,
      UserRole.FACULTY,
    ]);
  }

  async login(email: string, password: string, allowedRoles?: UserRole[]) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('User account is inactive');
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      throw new UnauthorizedException(
        'You are not authorized to access this application',
      );
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const otp = await this.otpService.createLoginOtp(user.id);

    return {
      otpRequired: true,
      verificationId: otp.verificationId,
      otp: otp.otp,
      otpExpiresIn: otp.expiresIn,
    };
  }

  async loginLearner(email: string, password: string) {
    return this.login(email, password, [UserRole.LEARNER]);
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        schoolId: true,
        employeeId: true,
        isActive: true,
        createdAt: true,
      },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('User account is not available');
    }

    return user;
  }
}
