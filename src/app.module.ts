import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
export const { ObserveModule, ObserveInstrument } = createObserveModule();
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { LearnerTypesModule } from './learner-types/learner-type.module';
import { SchoolsModule } from './schools/schools.module';
import { DepartmentsModule } from './departments/departments.module';
import { CategoriesModule } from './categories/categories.module';
import { CoursesModule } from './courses/courses.module';
import { ModulesModule } from './modules/modules.module';
import { LessonsModule } from './lessons/lessons.module';
import { QuizzesModule } from './quizess/quizzes.module';
import { LearnersModule } from './learner/learners.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY || 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET || 'YOUR_APP_SECRET',
      serviceId: 'learning-admin-backend',
    }),
    PrismaModule,
    HealthModule,
    AuthModule,
    AdminModule,
    LearnersModule,
    LearnerTypesModule,
    SchoolsModule,
    DepartmentsModule,
    CategoriesModule,
    CoursesModule,
    ModulesModule,
    LessonsModule,
    QuizzesModule,
  ],
})
export class AppModule {}
