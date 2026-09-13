import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';

import { PrismaService } from '../../prisma/prisma.service';
import { TokenService } from '../token.service';

import { LearnerRegisterDto } from './dto/learner-register.dto';
import { LearnerLoginDto } from './dto/learner-login.dto';
import { LearnerVerifyOtpDto } from './dto/learner-verify-otp.dto';
import {
  LearnerStatus,
  OtpChannel,
  OtpPurpose,
} from '../../generated/prisma/client';
import { LearnerUpdateProfileDto } from './dto/learner-update-profile.dto';
import { LearnerPasswordVerifyOtpDto } from './dto/learner-password-verify-otp.dto';
import { LearnerResetPasswordDto } from './dto/learner-reset-password.dto';
import { SmsService } from '../../notifications/sms/sms.service';
import { LearnerSendOtpDto } from './dto/learner-send-otp.dto';
import { EmailService } from '../../notifications/email/email.service';
import { LearnerForgotPasswordDto } from './dto/learner-forget-password.dto';

@Injectable()
export class LearnerAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
    private readonly smsService: SmsService,
    private readonly emailService: EmailService,
  ) {}

  // =========================================================
  // REGISTER
  // =========================================================

  async register(dto: LearnerRegisterDto) {
    const school = await this.prisma.school.findUnique({
      where: {
        id: dto.schoolId,
      },
    });

    if (!school) {
      throw new UnauthorizedException('School not found');
    }

    if (!school.isActive) {
      throw new UnauthorizedException('School is not active');
    }

    const learnerType = await this.prisma.learnerType.findFirst({
      where: {
        id: dto.learnerTypeId,
        schoolId: dto.schoolId,
        isActive: true,
      },
    });

    if (!learnerType) {
      throw new UnauthorizedException(
        'Learner type is invalid for this school',
      );
    }

    const existingEmail = await this.prisma.learner.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (existingEmail) {
      throw new ConflictException('A learner with this email already exists');
    }

    if (dto.phone) {
      const existingPhone = await this.prisma.learner.findUnique({
        where: {
          phone: dto.phone,
        },
      });

      if (existingPhone) {
        throw new ConflictException(
          'A learner with this phone number already exists',
        );
      }
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const learner = await this.prisma.learner.create({
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,

        password: passwordHash,
        passwordSet: true,

        schoolId: dto.schoolId,
        learnerTypeId: dto.learnerTypeId,

        employeeId: dto.employeeId,
        board: dto.board,
        department: dto.department,

        dateOfJoining: dto.dateOfJoining
          ? new Date(dto.dateOfJoining)
          : undefined,

        // IMPORTANT:
        // Learner must be approved by admin before login.
        status: 'PENDING_APPROVAL',
      },

      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        schoolId: true,
        learnerTypeId: true,
        employeeId: true,
        board: true,
        department: true,
        dateOfJoining: true,
        status: true,
        createdAt: true,
      },
    });

    return {
      message:
        'Registration successful. Your account is pending admin approval.',

      learner,
    };
  }

  // =========================================================
  // Profile
  // =========================================================

  async me(learnerId: string) {
    const learner = await this.prisma.learner.findUnique({
      where: {
        id: learnerId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        employeeId: true,
        board: true,
        department: true,
        dateOfJoining: true,
        status: true,
        createdAt: true,
        updatedAt: true,

        school: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },

        learnerType: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
      },
    });

    if (!learner) {
      throw new NotFoundException('Learner not found');
    }

    return {
      message: 'Learner profile retrieved successfully',
      data: learner,
    };
  }

  // =========================================================
  // LOGIN
  // =========================================================

  async login(dto: LearnerLoginDto) {
    const learner = await this.prisma.learner.findFirst({
      where: {
        employeeId: dto.employeeId,
      },
    });

    if (!learner) {
      throw new UnauthorizedException('Invalid Employee Id or password');
    }

    // Learner must be approved first
    if (learner.status === 'PENDING_APPROVAL') {
      throw new UnauthorizedException('Your account is pending admin approval');
    }

    if (learner.status === 'REJECTED') {
      throw new UnauthorizedException(
        learner.rejectionReason
          ? `Your registration was rejected: ${learner.rejectionReason}`
          : 'Your registration has been rejected',
      );
    }

    if (learner.status === 'INACTIVE') {
      throw new UnauthorizedException('Your learner account is inactive');
    }

    if (learner.status === 'SUSPENDED') {
      throw new UnauthorizedException('Your learner account is suspended');
    }

    if (learner.status !== 'ACTIVE') {
      throw new UnauthorizedException('Your learner account is not active');
    }

    const passwordValid = await bcrypt.compare(dto.password, learner.password);

    if (!passwordValid) {
      throw new UnauthorizedException('Invalid employee ID or password');
    }

    return {
      message: 'Credentials verified',
      data: {
        employeeId: learner.employeeId,
        otpOptions: [
          ...(learner.phone
            ? [
                {
                  type: OtpChannel.SMS,
                  maskedValue: this.maskPhone(learner.phone),
                },
              ]
            : []),

          ...(learner.email
            ? [
                {
                  type: OtpChannel.EMAIL,
                  maskedValue: this.maskEmail(learner.email),
                },
              ]
            : []),
        ],
      },
    };
  }

  private maskPhone(phone: string): string {
    if (phone.length <= 4) {
      return '****';
    }

    return `${'*'.repeat(phone.length - 4)}${phone.slice(-4)}`;
  }

  private maskEmail(email: string): string {
    const [username, domain] = email.split('@');

    if (!username || !domain) {
      return '***';
    }

    if (username.length <= 2) {
      return `${username[0]}***@${domain}`;
    }

    return `${username[0]}${'*'.repeat(
      Math.max(username.length - 2, 1),
    )}${username.slice(-1)}@${domain}`;
  }

  async sendOtp(dto: LearnerSendOtpDto) {
    const learner = await this.prisma.learner.findFirst({
      where: {
        employeeId: dto.employeeId,
      },
    });

    if (!learner) {
      throw new NotFoundException('Learner not found');
    }

    if (learner.status !== LearnerStatus.ACTIVE) {
      throw new BadRequestException('Learner account is not active');
    }

    if (dto.channel === OtpChannel.SMS && !learner.phone) {
      throw new BadRequestException('Mobile number is not available');
    }

    if (dto.channel === OtpChannel.EMAIL && !learner.email) {
      throw new BadRequestException('Email address is not available');
    }

    const latestOtp = await this.prisma.learnerOtpVerification.findFirst({
      where: {
        learnerId: learner.id,
        purpose: OtpPurpose.LOGIN,
        channel: dto.channel,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (latestOtp && Date.now() - latestOtp.lastSentAt.getTime() < 60 * 1000) {
      throw new BadRequestException(
        'Please wait before requesting another OTP',
      );
    }

    await this.prisma.learnerOtpVerification.updateMany({
      where: {
        learnerId: learner.id,
        purpose: OtpPurpose.LOGIN,
        verifiedAt: null,
      },
      data: {
        expiresAt: new Date(),
      },
    });

    const otp = randomInt(100000, 1000000).toString();

    const codeHash = await bcrypt.hash(otp, 10);

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await this.prisma.learnerOtpVerification.create({
      data: {
        learnerId: learner.id,
        codeHash,
        purpose: OtpPurpose.LOGIN,
        channel: dto.channel,
        expiresAt,
        lastSentAt: new Date(),
      },
    });

    // Send through SMS or email service here

    return {
      message: 'OTP sent successfully',
      data: {
        employeeId: learner.employeeId,
        channel: dto.channel,
        maskedValue:
          dto.channel === OtpChannel.SMS
            ? this.maskPhone(learner.phone!)
            : this.maskEmail(learner.email),
        expiresIn: 300,
      },
    };
  }
  // =========================================================
  // VERIFY OTP
  // =========================================================

  async verifyOtp(dto: LearnerVerifyOtpDto) {
    const learner = await this.prisma.learner.findFirst({
      where: {
        employeeId: dto.employeeId,
      },
    });
    if (!learner) {
      throw new UnauthorizedException('Invalid OTP');
    }

    if (learner.status !== 'ACTIVE') {
      throw new UnauthorizedException('Learner account is not active');
    }

    const otpRecord = await this.prisma.learnerOtpVerification.findFirst({
      where: {
        learnerId: learner.id,
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
      await this.prisma.learnerOtpVerification.update({
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

    await this.prisma.learnerOtpVerification.update({
      where: {
        id: otpRecord.id,
      },
      data: {
        verifiedAt: new Date(),
      },
    });

    return this.issueTokens(learner);
  }

  // =========================================================
  // ISSUE TOKENS
  // =========================================================

  private async issueTokens(learner: any) {
    const payload = {
      sub: learner.id,
      authType: 'LEARNER' as const,
      schoolId: learner.schoolId,
      learnerTypeId: learner.learnerTypeId,
    };

    const accessToken = await this.tokenService.generateAccessToken(payload);

    const refreshToken = await this.tokenService.generateRefreshToken(payload);

    const tokenHash = this.tokenService.hashRefreshToken(refreshToken);

    await this.prisma.learnerRefreshToken.create({
      data: {
        learnerId: learner.id,
        tokenHash,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    return {
      message: 'Login successful',

      accessToken,
      refreshToken,

      learner: {
        id: learner.id,
        name: learner.name,
        // emplooyeId:learner.emm
        email: learner.email,
        schoolId: learner.schoolId,
        learnerTypeId: learner.learnerTypeId,
      },
    };
  }

  // =========================================================
  // REFRESH TOKEN
  // =========================================================

  async refresh(refreshToken: string) {
    // 1. Verify JWT refresh token
    const payload = await this.tokenService.verifyRefreshToken(refreshToken);

    // 2. Make sure this is a learner refresh token
    if (payload.authType !== 'LEARNER' || !payload.sub) {
      throw new UnauthorizedException('Invalid learner refresh token');
    }

    // 3. Find learner from JWT subject
    const learner = await this.prisma.learner.findUnique({
      where: {
        id: payload.sub,
      },
    });

    if (!learner) {
      throw new UnauthorizedException('Learner not found');
    }

    // 4. Make sure learner is still active
    if (learner.status !== LearnerStatus.ACTIVE) {
      throw new UnauthorizedException('Learner account is not active');
    }

    // 5. Find all active refresh tokens for this learner
    const storedTokens = await this.prisma.learnerRefreshToken.findMany({
      where: {
        learnerId: learner.id,
        revokedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    // 6. Compare supplied refresh token with stored hashes
    let matchedToken: (typeof storedTokens)[number] | undefined;

    for (const storedToken of storedTokens) {
      const matched = await bcrypt.compare(refreshToken, storedToken.tokenHash);

      if (matched) {
        matchedToken = storedToken;
        break;
      }
    }

    if (!matchedToken) {
      throw new UnauthorizedException('Refresh token is invalid or expired');
    }

    // 7. Revoke the old refresh token
    await this.prisma.learnerRefreshToken.update({
      where: {
        id: matchedToken.id,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    // 8. Issue new access + refresh tokens
    return this.issueTokens(learner);
  }

  // =========================================================
  // UPDATE PROFILE
  // =========================================================

  async updateProfile(learnerId: string, dto: LearnerUpdateProfileDto) {
    const learner = await this.prisma.learner.findUnique({
      where: {
        id: learnerId,
      },
    });

    if (!learner) {
      throw new NotFoundException('Learner not found');
    }

    if (dto.phone && dto.phone !== learner.phone) {
      const existingPhone = await this.prisma.learner.findFirst({
        where: {
          phone: dto.phone,
          NOT: {
            id: learnerId,
          },
        },
      });

      if (existingPhone) {
        throw new ConflictException('Phone number already exists');
      }
    }

    const updatedLearner = await this.prisma.learner.update({
      where: {
        id: learnerId,
      },
      data: {
        ...(dto.name !== undefined && {
          name: dto.name,
        }),

        ...(dto.email !== undefined && {
          email: dto.email,
        }),

        ...(dto.phone !== undefined && {
          phone: dto.phone,
        }),

        ...(dto.board !== undefined && {
          board: dto.board,
        }),

        ...(dto.department !== undefined && {
          department: dto.department,
        }),

        ...(dto.dateOfJoining !== undefined && {
          dateOfJoining: new Date(dto.dateOfJoining),
        }),
      },

      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        employeeId: true,
        board: true,
        department: true,
        dateOfJoining: true,
        status: true,

        school: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },

        learnerType: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },

        createdAt: true,
        updatedAt: true,
      },
    });

    return {
      message: 'Learner profile updated successfully',
      data: updatedLearner,
    };
  }

  async forgotPassword(dto: LearnerForgotPasswordDto) {
    const learner = await this.prisma.learner.findFirst({
      where: {
        OR: [{ email: dto.identifier }, { phone: dto.identifier }],
      },
    });

    if (!learner) {
      throw new NotFoundException(
        'No learner found with this email or phone number',
      );
    }

    if (learner.status !== LearnerStatus.ACTIVE) {
      throw new UnauthorizedException('Learner account is not active');
    }

    let channel: OtpChannel;

    if (learner.email === dto.identifier) {
      channel = OtpChannel.EMAIL;
    } else {
      channel = OtpChannel.SMS;
    }

    // Check resend cooldown
    const latestOtp = await this.prisma.learnerOtpVerification.findFirst({
      where: {
        learnerId: learner.id,
        purpose: OtpPurpose.PASSWORD_RESET,
        channel,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (latestOtp && Date.now() - latestOtp.lastSentAt.getTime() < 60 * 1000) {
      throw new BadRequestException(
        'Please wait 60 seconds before requesting another OTP',
      );
    }

    // Invalidate previous OTPs
    await this.prisma.learnerOtpVerification.updateMany({
      where: {
        learnerId: learner.id,
        purpose: OtpPurpose.PASSWORD_RESET,
        verifiedAt: null,
      },
      data: {
        verifiedAt: new Date(),
      },
    });

    // Generate OTP
    const otp = randomInt(100000, 1000000).toString();

    // Hash OTP
    const codeHash = await bcrypt.hash(otp, 10);

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await this.prisma.learnerOtpVerification.create({
      data: {
        learnerId: learner.id,
        codeHash,
        purpose: OtpPurpose.PASSWORD_RESET,
        channel,
        expiresAt,
        lastSentAt: new Date(),
      },
    });

    // Send OTP
    if (channel === OtpChannel.EMAIL) {
      await this.emailService.sendOtp(learner.email, otp);
    } else {
      await this.smsService.sendOtp(learner.phone!, otp);
    }

    return {
      message: `OTP sent successfully to your ${channel === OtpChannel.EMAIL ? 'email' : 'phone number'}`,
      channel,
    };
  }

  async verifyPasswordOtp(dto: LearnerPasswordVerifyOtpDto) {
    const learner = await this.prisma.learner.findFirst({
      where: {
        employeeId: dto.employeeId,
      },
    });

    if (!learner) {
      throw new NotFoundException('Learner not found');
    }

    const otpRecord = await this.prisma.learnerOtpVerification.findFirst({
      where: {
        learnerId: learner.id,
        purpose: OtpPurpose.PASSWORD_RESET,
        verifiedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!otpRecord) {
      throw new BadRequestException('OTP expired or not found');
    }

    if (otpRecord.attempts >= 5) {
      throw new BadRequestException('Maximum OTP attempts exceeded');
    }

    const isValid = await bcrypt.compare(dto.otp, otpRecord.codeHash);

    if (!isValid) {
      await this.prisma.learnerOtpVerification.update({
        where: {
          id: otpRecord.id,
        },
        data: {
          attempts: {
            increment: 1,
          },
        },
      });

      throw new BadRequestException('Invalid OTP');
    }

    await this.prisma.learnerOtpVerification.update({
      where: {
        id: otpRecord.id,
      },
      data: {
        verifiedAt: new Date(),
      },
    });

    // Temporary reset token
    const resetToken = await this.tokenService.generatePasswordResetToken(
      learner.id,
    );

    return {
      message: 'OTP verified successfully',
      data: {
        resetToken,
      },
    };
  }

  async resetPassword(dto: LearnerResetPasswordDto) {
    let payload: {
      sub: string;
      authType: string;
      purpose: string;
    };

    try {
      payload = await this.tokenService.verifyPasswordResetToken(
        dto.resetToken,
      );
    } catch {
      throw new BadRequestException('Invalid or expired password reset token');
    }

    if (
      payload.authType !== 'LEARNER' ||
      payload.purpose !== 'PASSWORD_RESET'
    ) {
      throw new BadRequestException('Invalid password reset token');
    }

    const learner = await this.prisma.learner.findUnique({
      where: {
        id: payload.sub,
      },
    });

    if (!learner) {
      throw new NotFoundException('Learner not found');
    }

    const passwordHash = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.$transaction([
      this.prisma.learner.update({
        where: {
          id: learner.id,
        },
        data: {
          password: passwordHash,
          passwordSet: true,
        },
      }),

      // Invalidate all existing refresh tokens
      this.prisma.learnerRefreshToken.updateMany({
        where: {
          learnerId: learner.id,
          revokedAt: null,
        },
        data: {
          revokedAt: new Date(),
        },
      }),
    ]);

    return {
      message: 'Password reset successfully',
      data: null,
    };
  }
  // =========================================================
  // LOGOUT
  // =========================================================

  async logout(refreshToken: string) {
    const tokens = await this.prisma.learnerRefreshToken.findMany({
      where: {
        revokedAt: null,
      },
    });

    for (const token of tokens) {
      const matched = await bcrypt.compare(refreshToken, token.tokenHash);

      if (matched) {
        await this.prisma.learnerRefreshToken.update({
          where: {
            id: token.id,
          },
          data: {
            revokedAt: new Date(),
          },
        });

        break;
      }
    }

    return {
      message: 'Logout successful',
    };
  }
  // =========================================================
  // LOGOUT ALL DEVICES
  // =========================================================
  async logoutAll(learnerId: string) {
    await this.prisma.learnerRefreshToken.updateMany({
      where: {
        learnerId,
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
