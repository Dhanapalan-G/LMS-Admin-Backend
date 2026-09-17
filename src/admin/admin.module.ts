import { Module } from '@nestjs/common';
import { AdminsController } from './admin.controller';
import { AuthModule } from '../auth/auth.module';
import { AdminsService } from './admin.service';

@Module({
  imports: [AuthModule],
  controllers: [AdminsController],
  providers: [AdminsService],
  exports: [AdminsService],
})
export class AdminModule {}
