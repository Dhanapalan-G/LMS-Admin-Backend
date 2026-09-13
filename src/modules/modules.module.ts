import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { AdminModulesController } from './controllers/admin-modules.controller';
import { AdminAuthModule } from '../auth/admin/admin-auth.module';

@Module({
  imports: [AdminAuthModule],
  controllers: [AdminModulesController],
  providers: [ModulesService],
  exports: [ModulesService],
})
export class ModulesModule {}
