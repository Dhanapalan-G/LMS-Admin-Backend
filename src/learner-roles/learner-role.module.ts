import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { LearnerRolesController } from './learner-role.controller';
import { LearnerRolesService } from './learner-role.service';


@Module({
  imports: [AuthModule],

  controllers: [LearnerRolesController],

  providers: [LearnerRolesService],

  exports: [LearnerRolesService],
})
export class LearnerRolesModule {}
