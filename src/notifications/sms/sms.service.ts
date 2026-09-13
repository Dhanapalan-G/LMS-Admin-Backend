import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SmsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async sendOtp(mobile: string, otp: string): Promise<void> {
    const authKey = this.configService.get<string>('MSG91_AUTH_KEY');

    const templateId = this.configService.get<string>('MSG91_OTP_TEMPLATE_ID');

    if (!authKey || !templateId) {
      throw new InternalServerErrorException('MSG91 configuration is missing');
    }

    try {
      await firstValueFrom(
        this.httpService.post(
          'https://control.msg91.com/api/v5/otp',
          {
            template_id: templateId,
            mobile: mobile.replace(/\D/g, ''),
            otp,
          },
          {
            headers: {
              authkey: authKey,
              'Content-Type': 'application/json',
            },
          },
        ),
      );
    } catch (error) {
      throw new InternalServerErrorException('Failed to send OTP');
    }
  }
}
