import { Module } from '@nestjs/common';
import { CourseAssignmentsController } from './course-assignment.controller';
import { CourseAssignmentsService } from './course-assignment.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [CourseAssignmentsController],
  providers: [CourseAssignmentsService],
  exports: [CourseAssignmentsService],
})
export class CourseAssignmentsModule {}
