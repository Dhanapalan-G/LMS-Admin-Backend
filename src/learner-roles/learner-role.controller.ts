import {
  Body,
  Controller,
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
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateLearnerRoleDto } from './dto/create-learner-role.dto';

import { AuthType } from '../auth/decorators/auth-type.decorator';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';

import { AdminRole } from '../generated/prisma/client';
import { PaginationDto } from '../common/dto/pagination.dto';
import { LearnerRolesService } from './learner-role.service';

@ApiTags('Admin - Learner Roles')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/learner-roles')
export class LearnerRolesController {
  constructor(private readonly learnerRolesService: LearnerRolesService) {}

  // --------------------------------------------------
  // CREATE
  // --------------------------------------------------

  @Post()
  @ApiOperation({
    summary: 'Create learner role',
    description:
      'Creates a global learner role and assigns it to the selected schools.',
  })
  @ApiResponse({
    status: 201,
    description: 'Learner role created successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid school assignment',
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
    description: 'Learner role code already exists',
  })
  async create(@Body() dto: CreateLearnerRoleDto, @Req() req: any) {
    return this.learnerRolesService.create(dto, req.user);
  }

  // --------------------------------------------------
  // FIND ALL
  // --------------------------------------------------

  @Get()
  @ApiOperation({
    summary: 'Get all learner roles',
    description:
      'Retrieves paginated global learner roles with optional school, search, and status filters.',
  })
  @ApiQuery({
    name: 'schoolId',
    required: false,
    type: String,
    example: 'school-uuid',
    description: 'Filter learner roles assigned to a particular school.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    example: 'teacher',
    description: 'Search learner roles by name or code.',
  })
  @ApiQuery({
    name: 'isActive',
    required: false,
    type: String,
    example: 'true',
    description: 'Filter learner roles by active status.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Page number.',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
    description: 'Number of learner roles per page.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner roles retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learner roles retrieved successfully',
        data: {
          items: [
            {
              id: 'role-uuid-1',
              name: 'Teacher',
              code: 'TEACHER',
              isActive: true,
              schoolsCount: 3,
              learnersCount: 500,
              schools: [
                {
                  id: 'school-uuid-1',
                  name: 'ABC School',
                  code: 'ABC001',
                },
              ],
            },
          ],
          meta: {
            page: 1,
            limit: 10,
            total: 1,
            totalPages: 1,
          },
        },
      },
    },
  })
 async findAll(
  @Req() req: any,
  @Query() paginationDto: PaginationDto,
  @Query('schoolId') schoolId?: string,
  @Query('search') search?: string,
  @Query('isActive') isActive?: string,
) {
  return this.learnerRolesService.findAll(
    {
      role: req.user.role,
      schoolId: req.user.schoolId,
    },
    paginationDto,
    search,
    schoolId,
    isActive !== undefined
      ? isActive === 'true'
      : undefined,
  );
}

  // --------------------------------------------------
  // FIND ONE
  // --------------------------------------------------

  @Get(':id')
  @ApiOperation({
    summary: 'Get learner role by ID',
    description:
      'Returns global learner role details, assigned schools, learner statistics, completion and certification statistics.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: 'learner-role-uuid',
    description: 'Unique learner role ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner role retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learner role retrieved successfully',
        data: {
          id: 'learner-role-uuid',
          name: 'Teacher',
          code: 'TEACHER',

          statistics: {
            totalLearners: 500,
            activeLearners: 450,
            completionPercentage: 68,
            certifiedLearners: 150,
            overdueLearners: 20,
          },

          publishingStatus: 'ACTIVE',

          schoolsAssigned: [
            {
              id: 'school-uuid-1',
              name: 'ABC School',
              code: 'ABC001',
            },
            {
              id: 'school-uuid-2',
              name: 'XYZ School',
              code: 'XYZ001',
            },
          ],

          overallCompletion: 68,
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Learner role not found.',
  })
  async findOne(@Param('id') id: string) {
    return this.learnerRolesService.findOne(id);
  }

  // --------------------------------------------------
  // UPDATE
  // --------------------------------------------------

  @Patch(':id')
  @ApiOperation({
    summary: 'Update learner role',
    description: 'Updates a global learner role and its school assignments.',
  })
  @ApiParam({
    name: 'id',
    description: 'Learner role UUID',
    example: '8d8f0c4a-1234-4567-8901-abcdef123456',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner role updated successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner role or school not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Learner role code already exists',
  })
  update(
    @Param('id') id: string,
    @Body() dto: CreateLearnerRoleDto,
    @Req() req: any,
  ) {
    return this.learnerRolesService.update(id, dto, req.user);
  }

  // --------------------------------------------------
  // DEACTIVATE
  // --------------------------------------------------

  @Patch(':id/deactivate')
  @ApiOperation({
    summary: 'Deactivate learner role',
    description:
      'Deactivates a global learner role. A deactivated role should not be available when creating or updating learners.',
  })
  @ApiParam({
    name: 'id',
    description: 'Learner role UUID',
    example: '8d8f0c4a-1234-4567-8901-abcdef123456',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner role deactivated successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner role not found',
  })
  deactivate(@Param('id') id: string, @Req() req: any) {
    return this.learnerRolesService.deactivate(id, req.user);
  }
}
