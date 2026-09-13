import { Module } from '@nestjs/common';

import { AdminCategoriesController } from './controllers/admin-categories.controller';
import { CategoriesService } from './categories.service';
import { AdminAuthModule } from '../auth/admin/admin-auth.module';
@Module({
  imports: [AdminAuthModule],
  controllers: [AdminCategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
