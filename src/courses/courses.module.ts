import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';

import { AdminCoursesController } from './controllers/admin-courses.controller';
import { CoursesService } from './courses.service';

@Module({
  imports: [AuthModule],
  controllers: [
    AdminCoursesController,
  ],
  providers: [
    CoursesService,
  ],
  exports: [
    CoursesService,
  ],
})
export class CoursesModule {}