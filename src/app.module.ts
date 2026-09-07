import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
export const { ObserveModule, ObserveInstrument } = createObserveModule();
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';
import { SchoolsModule } from './schools/schools.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { ModulesModule } from './modules/modules.module';
import { CategoriesModule } from './categories/categories.module';

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

    UsersModule,

    SchoolsModule,

    AuthModule,

    CategoriesModule,

    CoursesModule,

    ModulesModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
