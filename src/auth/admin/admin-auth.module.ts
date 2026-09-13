import { Module } from '@nestjs/common';
import { AuthModule } from '../../auth/auth.module';
import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './admin-auth.service';
import { SmsModule } from '../../notifications/sms/sms.module';
import { EmailModule } from '../../notifications/email/email.module';

@Module({
  imports: [SmsModule, EmailModule],

  controllers: [AdminAuthController],

  providers: [AdminAuthService],
})
export class AdminAuthModule {}
