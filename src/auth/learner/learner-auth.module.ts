import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { LearnerAuthController } from './learner-auth.controller';
import { LearnerAuthService } from './learner-auth.service';
import { SmsModule } from '../../notifications/sms/sms.module';
import { EmailModule } from '../../notifications/email/email.module';

@Module({
  imports: [ SmsModule, EmailModule],
  controllers: [LearnerAuthController],
  providers: [LearnerAuthService],
  exports: [LearnerAuthService],
})
export class LearnerAuthModule {}
