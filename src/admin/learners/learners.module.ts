import { Module } from '@nestjs/common';
import { LearnersController } from './learners.controller';
import { LearnersService } from './learners.service';
import { AdminAuthModule } from '../../auth/admin/admin-auth.module';

@Module({
  imports: [AdminAuthModule],
  controllers: [LearnersController],
  providers: [LearnersService],
  exports: [LearnersService],
})
export class LearnersModule {}
