import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ModuleListResponseDto } from './dto/module-list-response.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { AuthType } from '../auth/decorators/auth-type.decorator';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { AdminRole } from '../generated/prisma/client';

@ApiTags('Admin - Modules')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin')
export class AdminModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post('courses/:courseId/modules')
  @AuthType('ADMIN')
  @Roles('SUPER_ADMIN', 'ADMIN')
  @ApiOperation({
    summary: 'Create a module inside a course',
    description:
      'Creates a new module inside a course.',
  })
  @ApiParam({
    name: 'courseId',
    type: String,
    example: '32931b50-67c0-4ad6-9b5e-123456789abc',
    description: 'Course ID',
  })
  @ApiBody({
    type: CreateModuleDto,
    description: 'Module creation details',
  })
  @ApiResponse({
    status: 201,
    description: 'Module created successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid module data',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - user does not have permission to create modules',
  })
  @ApiResponse({
    status: 404,
    description: 'Course not found',
  })
  async create(
    @Param('courseId') courseId: string,
    @Body() dto: CreateModuleDto,
  ) {
    const module = await this.modulesService.create(courseId, dto);

    return {
      message: 'Module created successfully',
      data: module,
    };
  }

  @Get('courses/:courseId/modules')
  @AuthType('ADMIN')
  @Roles('SUPER_ADMIN', 'ADMIN')
  @ApiOperation({
    summary: 'Get all modules of a course',
    description:
      'Returns a paginated list of modules belonging to a specific course.',
  })
  @ApiParam({
    name: 'courseId',
    type: String,
    example: '32931b50-67c0-4ad6-9b5e-123456789abc',
    description: 'Course ID',
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
    description: 'Number of modules per page',
  })
  @ApiResponse({
    status: 200,
    description: 'Modules retrieved successfully',
    type: ModuleListResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - user does not have permission to view modules',
  })
  @ApiResponse({
    status: 404,
    description: 'Course not found',
  })
  async findAll(
    @Param('courseId') courseId: string,
    @Req() req: any,
    @Query() paginationDto: PaginationDto,
  ) {
    const modules = await this.modulesService.findAll(courseId, paginationDto);
    return {
      message: 'Modules retrieved successfully',
      data: modules,
    };
  }

  @Patch('modules/:id')
  @AuthType('ADMIN')
  @Roles('SUPER_ADMIN', 'ADMIN')
  @ApiOperation({
    summary: 'Update a module',
    description:
      'Updates an existing module.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: '32931b50-67c0-4ad6-9b5e-123456789abc',
    description: 'Module ID',
  })
  @ApiBody({
    type: UpdateModuleDto,
    description: 'Module update details',
  })
  @ApiResponse({
    status: 200,
    description: 'Module updated successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid module data',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - user does not have permission to update modules',
  })
  @ApiResponse({
    status: 404,
    description: 'Module not found',
  })
  async update(@Param('id') id: string, @Body() dto: UpdateModuleDto) {
    const module = await this.modulesService.update(id, dto);

    return {
      message: 'Module updated successfully',
      data: module,
    };
  }

  @Delete('modules/:id')
  @AuthType('ADMIN')
  @Roles('SUPER_ADMIN', 'ADMIN')
  @ApiOperation({
    summary: 'Delete a module',
    description:
      'Deletes a module.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: '32931b50-67c0-4ad6-9b5e-123456789abc',
    description: 'Module ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Module deleted successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - authentication token is missing or invalid',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - only administrators can delete modules',
  })
  @ApiResponse({
    status: 404,
    description: 'Module not found',
  })
  async remove(@Param('id') id: string) {
    const result = await this.modulesService.remove(id);

    return {
      message: 'Module deleted successfully',
      data: result,
    };
  }
}
