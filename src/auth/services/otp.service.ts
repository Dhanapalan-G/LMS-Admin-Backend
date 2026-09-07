import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OtpService {
  private readonly otpExpiryMinutes = 5;
  private readonly resendCooldownSeconds = 60;
  private readonly maxAttempts = 5;

  constructor(private readonly prisma: PrismaService) {}

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async createLoginOtp(userId: string) {
    const existingOtp = await this.prisma.otpVerification.findFirst({
      where: {
        userId,
        purpose: 'LOGIN',
        verifiedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (existingOtp) {
      const secondsSinceLastSent =
        (Date.now() - existingOtp.lastSentAt.getTime()) / 1000;

      if (secondsSinceLastSent < this.resendCooldownSeconds) {
        throw new HttpException(
          `Please wait ${Math.ceil(
            this.resendCooldownSeconds - secondsSinceLastSent,
          )} seconds before requesting another OTP`,
          HttpStatus.TOO_MANY_REQUESTS,
        );
      }
    }

    const otp = this.generateOtp();
    const codeHash = await bcrypt.hash(otp, 10);

    const expiresAt = new Date(Date.now() + this.otpExpiryMinutes * 60 * 1000);

    const verification = await this.prisma.otpVerification.create({
      data: {
        userId,
        codeHash,
        purpose: 'LOGIN',
        expiresAt,
        attempts: 0,
        maxAttempts: this.maxAttempts,
        lastSentAt: new Date(),
      },
    });

    /*
     * Temporary development implementation.
     *
     * Later this will be replaced by Email/SMS provider.
     */
    return {
      verificationId: verification.id,
      otp: otp,
      expiresIn: this.otpExpiryMinutes * 60,
    };
  }

  async resendOtp(verificationId: string) {
    const verification = await this.prisma.otpVerification.findUnique({
      where: {
        id: verificationId,
      },
    });

    if (!verification) {
      throw new BadRequestException('Invalid OTP verification request');
    }

    if (verification.verifiedAt) {
      throw new BadRequestException('OTP has already been verified');
    }

    const secondsSinceLastSent =
      (Date.now() - verification.lastSentAt.getTime()) / 1000;

    if (secondsSinceLastSent < this.resendCooldownSeconds) {
      throw new BadRequestException(
        `Please wait ${Math.ceil(
          this.resendCooldownSeconds - secondsSinceLastSent,
        )} seconds before requesting another OTP`,
      );
    }

    return this.createLoginOtp(verification.userId);
  }

  async verifyOtp(verificationId: string, otp: string) {
    const verification = await this.prisma.otpVerification.findUnique({
      where: {
        id: verificationId,
      },
    });
    if (!verification) {
      throw new BadRequestException('Invalid OTP verification request');
    }

    if (verification.verifiedAt) {
      throw new BadRequestException('OTP has already been verified');
    }

    if (verification.expiresAt < new Date()) {
      throw new BadRequestException('OTP has expired');
    }

    if (verification.attempts >= verification.maxAttempts) {
      throw new BadRequestException('Maximum OTP attempts exceeded');
    }
    const isValid = await bcrypt.compare(otp, verification.codeHash);
    if (!isValid) {
      await this.prisma.otpVerification.update({
        where: {
          id: verification.id,
        },
        data: {
          attempts: {
            increment: 1,
          },
        },
      });

      throw new BadRequestException('Invalid OTP');
    }

    await this.prisma.otpVerification.update({
      where: {
        id: verification.id,
      },
      data: {
        verifiedAt: new Date(),
      },
    });

    const user = await this.prisma.user.findUnique({
      where: {
        id: verification.userId,
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
      throw new BadRequestException('User account is inactive');
    }
    return user;
  }
}
