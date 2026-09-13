import {
  Body,
  Controller,
  Get,
  Param,
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
        message: 'Request successful',
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

  @Get()
  @ApiOperation({
    summary: 'Get all schools',
    description: 'Returns a paginated list of schools.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Page number. Defaults to 1.',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
    description: 'Number of records per page. Defaults to 10. Maximum 100.',
  })
  @ApiResponse({
    status: 200,
    description: 'Schools retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Request successful',
        data: {
          items: [
            {
              id: 'school-id-1',
              name: 'St. Xavier School',
              code: 'SXS001',
            },
          ],
          meta: {
            page: 1,
            limit: 10,
            total: 1,
            totalPages: 1,
            hasNextPage: false,
            hasPreviousPage: false,
          },
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
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.schoolsService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get school by ID',
    description:
      'Returns school details including the number of users and courses.',
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
        message: 'Request successful',
        data: {
          id: 'school-id',
          name: 'St. Xavier School',
          code: 'SXS001',
          _count: {
            users: 125,
            courses: 18,
          },
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
}
