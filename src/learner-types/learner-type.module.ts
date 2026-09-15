import { Module } from '@nestjs/common';
import { LearnerTypesController } from './learner-type.controller';
import { LearnerTypesService } from './learner-type.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [LearnerTypesController],
  providers: [LearnerTypesService],
  exports: [LearnerTypesService],
})
export class LearnerTypesModule {}
