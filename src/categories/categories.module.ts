import { Module } from '@nestjs/common';

import { AdminCategoriesController } from './controllers/admin-categories.controller';
import { CategoriesService } from './categories.service';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [AuthModule],
  controllers: [AdminCategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
