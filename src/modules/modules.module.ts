import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';

import { ModulesService } from './modules.service';
import { AdminModulesController } from './controllers/admin-modules.controller';

@Module({
  imports: [AuthModule],
  controllers: [AdminModulesController],
  providers: [ModulesService],
  exports: [ModulesService],
})
export class ModulesModule {}
