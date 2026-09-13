import { Module } from '@nestjs/common';
import { LearnerTypesController } from './learner-type.controller';
import { LearnerTypesService } from './learner-type.service';
import { AdminAuthModule } from '../auth/admin/admin-auth.module';

@Module({
  imports: [AdminAuthModule],
  controllers: [LearnerTypesController],
  providers: [LearnerTypesService],
  exports: [LearnerTypesService],
})
export class LearnerTypesModule {}
