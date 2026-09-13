import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateLearnerTypeDto } from './dto/create-learner-type.dto';
import { UpdateLearnerTypeDto } from './dto/update-learner-type.dto';
import { LearnerTypesService } from './learner-type.service';

import { AuthType } from '../auth/decorators/auth-type.decorator';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { AdminRole } from '../generated/prisma/client';

@ApiTags('Admin - Learner Types')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/learner-types')
export class LearnerTypesController {
  constructor(private readonly learnerTypesService: LearnerTypesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create learner type',
    description:
      'Creates a learner type for the authenticated school. SCHOOL_ADMIN can create learner types only for their own school.',
  })
  @ApiResponse({
    status: 201,
    description: 'Learner type created successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: 409,
    description: 'Learner type code already exists',
  })
  async create(@Body() dto: CreateLearnerTypeDto, @Req() req: any) {
    return await this.learnerTypesService.create(dto, req.user);
  }

  @Get('/get')
  @ApiOperation({
    summary: 'Get all learner types',
    description:
      'Returns learner types available for the authenticated school.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner types retrieved successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  findAll(@Req() req: any) {
    return this.learnerTypesService.findAll(req.user);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get learner type by ID',
    description:
      'Returns a learner type belonging to the authenticated school.',
  })
  @ApiParam({
    name: 'id',
    description: 'Learner type UUID',
    example: '8d8f0c4a-1234-4567-8901-abcdef123456',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner type retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner type not found',
  })
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.learnerTypesService.findOne(id, req.user);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update learner type',
    description:
      'Updates a learner type belonging to the authenticated school.',
  })
  @ApiParam({
    name: 'id',
    description: 'Learner type UUID',
    example: '8d8f0c4a-1234-4567-8901-abcdef123456',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner type updated successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner type not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Learner type code already exists',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateLearnerTypeDto,
    @Req() req: any,
  ) {
    return this.learnerTypesService.update(id, dto, req.user);
  }

  @Patch(':id/deactivate')
  @ApiOperation({
    summary: 'Deactivate learner type',
    description:
      'Deactivates a learner type. Deactivated learner types should not be available when creating new learners.',
  })
  @ApiParam({
    name: 'id',
    description: 'Learner type UUID',
    example: '8d8f0c4a-1234-4567-8901-abcdef123456',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner type deactivated successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner type not found',
  })
  deactivate(@Param('id') id: string, @Req() req: any) {
    return this.learnerTypesService.deactivate(id, req.user);
  }
}
