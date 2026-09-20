import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { AuthType } from '../auth/decorators/auth-type.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { AdminRole, CategoryStatus } from '../generated/prisma/client';
import { CategoryQueryDto } from './dto/category-query.dto';

@ApiTags('Admin - Categories')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/categories')
export class AdminCategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create category',
    description: 'Creates a new category.',
  })
  @ApiResponse({
    status: 201,
    description: 'Category created successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request data.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Access token is missing or invalid.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. User does not have permission.',
  })
  @ApiResponse({
    status: 409,
    description: 'Category already exists.',
  })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all categories',
    description:
      'Returns a paginated list of learning categories with search and filters for learner role, school, department, and status.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Page number',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
    description: 'Number of categories per page',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    example: 'Leadership',
    description: 'Search by category name or description',
  })
  @ApiQuery({
    name: 'roleId',
    required: false,
    type: String,
    example: 'role-uuid',
    description: 'Filter categories by learner role',
  })
  @ApiQuery({
    name: 'schoolId',
    required: false,
    type: String,
    example: 'school-uuid',
    description: 'Filter categories by school',
  })
  @ApiQuery({
    name: 'departmentId',
    required: false,
    type: String,
    example: 'department-uuid',
    description: 'Filter categories by department',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: CategoryStatus,
    example: CategoryStatus.ACTIVE,
    description: 'Filter categories by status',
  })
  @ApiResponse({
    status: 200,
    description: 'Categories retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Access token is missing or invalid.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. User does not have permission.',
  })
  async findAll(@Query() query: CategoryQueryDto) {
    return this.categoriesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get category by ID',
    description: 'Returns a category using its ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Category retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Access token is missing or invalid.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. User does not have permission.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  async findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update category',
    description: 'Updates an existing category.',
  })
  @ApiResponse({
    status: 200,
    description: 'Category updated successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request data.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Access token is missing or invalid.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. User does not have permission.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  @ApiResponse({
    status: 409,
    description: 'Category already exists.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deactivate category',
    description: 'Deactivates an existing category.',
  })
  @ApiResponse({
    status: 200,
    description: 'Category deactivated successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Access token is missing or invalid.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. User does not have permission.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  async remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
