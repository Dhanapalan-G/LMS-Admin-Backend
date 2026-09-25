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
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateSchoolDto } from './dto/create-school.dto';
import { SchoolsService } from './schools.service';
import { PaginationDto } from '../common/dto/pagination.dto';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { UpdateSchoolDto } from './dto/update-school.dto';

@ApiTags('Admin - Schools')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles('SUPER_ADMIN')
@Controller('admin/schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a school',
    description: 'Creates a new school with a unique school code.',
  })
  @ApiBody({
    type: CreateSchoolDto,
  })
  @ApiResponse({
    status: 201,
    description: 'School created successfully.',
    schema: {
      example: {
        success: true,
        message: 'School created successfully',
        data: {
          id: 'school-id',
          name: 'St. Xavier School',
          code: 'SXS001',
        },
      },
    },
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
    description: 'School code already exists.',
    schema: {
      example: {
        success: false,
        message: 'School code already exists',
      },
    },
  })
  async create(@Body() dto: CreateSchoolDto) {
    return this.schoolsService.create(dto);
  }
  @Patch(':id')
  @ApiOperation({
    summary: 'Update a school',
    description: 'Updates an existing school by ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'School ID',
    example: 'school-id',
  })
  @ApiBody({
    type: UpdateSchoolDto,
  })
  @ApiResponse({
    status: 200,
    description: 'School updated successfully.',
    schema: {
      example: {
        success: true,
        message: 'School updated successfully',
        data: {
          id: 'school-id',
          name: 'St. Xavier School',
          code: 'SXS001',
          board: 'CBSE',
          address: 'Nagercoil',
          phone: '9876543210',
          email: 'school@example.com',
          isActive: true,
        },
      },
    },
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
    description: 'School not found.',
    schema: {
      example: {
        success: false,
        message: 'School not found',
      },
    },
  })
  @ApiResponse({
    status: 409,
    description: 'School code already exists.',
    schema: {
      example: {
        success: false,
        message: 'School code already exists',
      },
    },
  })
  async update(@Param('id') id: string, @Body() dto: UpdateSchoolDto) {
    return this.schoolsService.update(id, dto);
  }
  @Get()
  @ApiOperation({
    summary: 'Get all schools',
    description:
      'Returns paginated schools with learner counts, completion percentage and filters.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    example: 10,
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search by school name or code',
    example: 'SBOA',
  })
  @ApiQuery({
    name: 'board',
    required: false,
    description: 'Filter by school board',
    example: 'CBSE',
  })
  @ApiQuery({
    name: 'isActive',
    required: false,
    example: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Schools fetched successfully.',
  })
  async findAll(
    @Query() paginationDto: PaginationDto,
    @Query('search') search?: string,
    @Query('board') board?: string,
    @Query('isActive') isActive?: string,
  ) {
    return this.schoolsService.findAll(
      paginationDto,
      search,
      board,
      isActive !== undefined ? isActive === 'true' : undefined,
    );
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get school by ID',
    description:
      'Returns school details including learner statistics, completion, certification, overdue learners, assigned roles, and departments.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: 'school-id',
    description: 'Unique school ID',
  })
  @ApiResponse({
    status: 200,
    description: 'School retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'School retrieved successfully',
        data: {
          id: 'school-id',
          name: 'SBOA School & Junior College, Chennai',
          code: 'SBOA001',
          board: 'CBSE',

          statistics: {
            totalLearners: 142,
            activeLearners: 138,
            completionPercentage: 78,
            certifiedLearners: 94,
            overdueLearners: 12,
          },

          publishingStatus: 'ACTIVE',

          assignedRoles: [
            {
              id: 'learner-type-1',
              name: 'Prime Members',
            },
            {
              id: 'learner-type-2',
              name: 'Principal',
            },
            {
              id: 'learner-type-3',
              name: 'Teacher',
            },
          ],

          assignedDepartments: [
            {
              id: 'department-1',
              name: 'Maths',
              code: 'MATH',
            },
            {
              id: 'department-2',
              name: 'Science',
              code: 'SCI',
            },
            {
              id: 'department-3',
              name: 'English',
              code: 'ENG',
            },
          ],

          overallCompletion: 78,
        },
      },
    },
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
    description: 'School not found.',
    schema: {
      example: {
        success: false,
        message: 'School not found',
      },
    },
  })
  async findById(@Param('id') id: string) {
    return this.schoolsService.findById(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a school',
    description: 'Deletes an existing school by ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'School ID',
    example: 'school-id',
  })
  @ApiResponse({
    status: 200,
    description: 'School deleted successfully.',
    schema: {
      example: {
        success: true,
        message: 'School deleted successfully',
        data: {
          id: 'school-id',
          name: 'St. Xavier School',
          code: 'SXS001',
        },
      },
    },
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
    description: 'School not found.',
    schema: {
      example: {
        success: false,
        message: 'School not found',
      },
    },
  })
  @ApiResponse({
    status: 409,
    description: 'School cannot be deleted because it is being used.',
    schema: {
      example: {
        success: false,
        message: 'School cannot be deleted because it is being used',
      },
    },
  })
  async remove(@Param('id') id: string) {
    return this.schoolsService.remove(id);
  }
}
