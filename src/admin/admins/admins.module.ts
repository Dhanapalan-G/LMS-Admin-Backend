import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { AdminAuthModule } from '../../auth/admin/admin-auth.module';

@Module({
  imports: [AdminAuthModule],
  controllers: [AdminsController],
  providers: [AdminsService],
  exports: [AdminsService],
})
export class AdminsModule {}
