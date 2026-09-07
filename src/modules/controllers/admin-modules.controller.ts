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
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UserRole } from '../../generated/prisma/client';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';

import { ModulesService } from '../modules.service';
import { CreateModuleDto } from '../dto/create-module.dto';
import { UpdateModuleDto } from '../dto/update-module.dto';
import { ModuleResponseDto } from '../dto/module-response.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@ApiTags('Admin - Modules')
@ApiBearerAuth('access-token')
@Controller('api/v1/admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post('courses/:courseId/modules')
  @Roles(UserRole.ADMIN, UserRole.PRINCIPAL)
  @ApiOperation({
    summary: 'Create a module inside a course',
  })
  async create(
    @Param('courseId') courseId: string,
    @Body() dto: CreateModuleDto,
    @Req() req: any,
  ) {
    const module = await this.modulesService.create(
      courseId,
      dto,
      req.user.schoolId,
    );

    return {
      message: 'Module created successfully',
      data: module,
    };
  }

  @Get('courses/:courseId/modules')
  @Roles(UserRole.ADMIN, UserRole.PRINCIPAL)
  @ApiOperation({
    summary: 'Get all modules of a course',
  })
  @ApiResponse({
    status: 200,
    description: 'Modules retrieved successfully',
    type: ModuleResponseDto,
    isArray: true,
  })
  async findAll(
    @Param('courseId') courseId: string,
    @Req() req: any,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.modulesService.findAll(
      courseId,
      req.user.schoolId,
      paginationDto,
    );
  }

  @Patch('modules/:id')
  @Roles(UserRole.ADMIN, UserRole.PRINCIPAL)
  @ApiOperation({
    summary: 'Update a module',
  })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateModuleDto,
    @Req() req: any,
  ) {
    const module = await this.modulesService.update(id, dto, req.user.schoolId);

    return {
      message: 'Module updated successfully',
      data: module,
    };
  }

  @Delete('modules/:id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Delete a module',
  })
  async remove(@Param('id') id: string, @Req() req: any) {
    const result = await this.modulesService.remove(id, req.user.schoolId);

    return {
      message: 'Module deleted successfully',
      data: result,
    };
  }
}
