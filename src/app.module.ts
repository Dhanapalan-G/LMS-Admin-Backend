import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
export const { ObserveModule, ObserveInstrument } = createObserveModule();
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { SchoolsModule } from './schools/schools.module';
import { CoursesModule } from './courses/courses.module';
import { ModulesModule } from './modules/modules.module';
import { CategoriesModule } from './categories/categories.module';
import { LearnerTypesModule } from './learner-types/learner-type.module';
import { AuthModule } from './auth/auth.module';
import { AdminsModule } from './admin/admins/admins.module';
import { LearnersModule } from './admin/learners/learners.module';
import { LessonsModule } from './lessons/lessons.module';
import { QuizzesModule } from './quizess/quizzes.module';
import { LearnerAuthModule } from './auth/learner/learner-auth.module';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'learning-backend',
    }),

    PrismaModule,

    HealthModule,

    AuthModule,

    AdminsModule,

    LearnersModule,

    LearnerTypesModule,

    SchoolsModule,

    DepartmentsModule,

    CategoriesModule,

    CoursesModule,

    ModulesModule,

    LessonsModule,

    QuizzesModule,

    LearnerAuthModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
