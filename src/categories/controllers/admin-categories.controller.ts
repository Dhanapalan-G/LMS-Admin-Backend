import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CategoriesService } from '../categories.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@ApiTags('Admin - Categories')
@ApiBearerAuth()
@Controller('api/v1/admin/categories')
export class AdminCategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create category',
  })
  @ApiResponse({
    status: 201,
    description: 'Category created successfully',
  })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const data = await this.categoriesService.create(createCategoryDto);

    return {
      success: true,
      message: 'Category created successfully',
      data,
    };
  }

  @Get()
  @ApiOperation({
    summary: 'Get all categories',
  })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.categoriesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get category by ID',
  })
  async findOne(@Param('id') id: string) {
    const data = await this.categoriesService.findOne(id);

    return {
      success: true,
      message: 'Category retrieved successfully',
      data,
    };
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update category',
  })
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const data = await this.categoriesService.update(id, updateCategoryDto);

    return {
      success: true,
      message: 'Category updated successfully',
      data,
    };
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deactivate category',
  })
  async remove(@Param('id') id: string) {
    const data = await this.categoriesService.remove(id);

    return {
      success: true,
      message: 'Category deactivated successfully',
      data,
    };
  }
}
