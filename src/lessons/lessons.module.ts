import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { AuthModule } from '../auth/auth.module';
import { LessonsController } from './lessons.controller';

@Module({
  imports: [AuthModule],
  controllers: [LessonsController],
  providers: [LessonsService],
  exports: [LessonsService],
})
export class LessonsModule {}
