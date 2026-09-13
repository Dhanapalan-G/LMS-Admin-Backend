import { Module } from '@nestjs/common';
import { AuthModule } from '../../auth/auth.module';
import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './admin-auth.service';
import { SmsModule } from '../../notifications/sms/sms.module';

@Module({
  imports: [SmsModule, AuthModule],

  controllers: [AdminAuthController],

  providers: [AdminAuthService],
})
export class AdminAuthModule {}
