import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { AdminModulesController } from './controllers/admin-modules.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AdminModulesController],
  providers: [ModulesService],
  exports: [ModulesService],
})
export class ModulesModule {}
