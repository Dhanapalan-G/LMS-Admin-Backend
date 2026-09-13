import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  private readonly transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: this.configService.get<number>('SMTP_PORT') ?? 587,
      secure: this.configService.get<string>('SMTP_SECURE') === 'true',
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASSWORD'),
      },
    });
  }

  async sendOtp(email: string, otp: string): Promise<void> {
    const fromEmail =
      this.configService.get<string>('SMTP_FROM_EMAIL') ??
      this.configService.get<string>('SMTP_USER');

    if (!fromEmail) {
      throw new InternalServerErrorException(
        'SMTP sender email is not configured',
      );
    }

    try {
      await this.transporter.sendMail({
        from: `"Learning LMS" <${fromEmail}>`,
        to: email,
        subject: 'Your LMS Verification OTP',
        text: `Your LMS verification OTP is ${otp}. This OTP will expire in 5 minutes.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
            <h2>LMS Verification</h2>

            <p>Your verification OTP is:</p>

            <div style="
              font-size: 28px;
              font-weight: bold;
              letter-spacing: 6px;
              margin: 20px 0;
            ">
              ${otp}
            </div>

            <p>
              This OTP is valid for <strong>5 minutes</strong>.
            </p>

            <p>
              If you did not request this OTP, please ignore this email.
            </p>

            <hr />

            <p style="font-size: 12px; color: #777;">
              This is an automated email. Please do not reply.
            </p>
          </div>
        `,
      });

      this.logger.log(`OTP email sent to ${email}`);
    } catch (error) {
      this.logger.error(
        `Failed to send OTP email to ${email}`,
        error instanceof Error ? error.stack : undefined,
      );

      throw new InternalServerErrorException('Failed to send OTP email');
    }
  }
}
