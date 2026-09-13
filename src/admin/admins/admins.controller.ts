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
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { AuthType } from '../../auth/decorators/auth-type.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';

import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminsService } from './admins.service';
import { AdminRole } from '../../generated/prisma/client';
import { AuthTypeGuard } from '../../auth/guards/auth-type.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { PaginationDto } from '../../common/dto/pagination.dto';

@ApiTags('Admin Management')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Controller('admin/users')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiOperation({
    summary: 'Create admin',
    description: 'Creates a new admin user.',
  })
  @ApiResponse({
    status: 201,
    description: 'Admin created successfully.',
    schema: {
      example: {
        success: true,
        message: 'Admin created successfully',
        data: {
          id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'ADMIN',
          schoolId: 'school-uuid',
          status: 'ACTIVE',
          emailVerified: true,
          mobileVerified: false,
          isActive: true,
          createdAt: '2026-09-12T10:30:00.000Z',
          updatedAt: '2026-09-12T10:30:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid admin data or email already exists.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Admin access required.',
  })
  create(@Body() dto: CreateAdminDto) {
    return this.adminsService.create(dto);
  }

  @Get()
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiOperation({
    summary: 'Get all admins',
    description:
      'Retrieves a paginated list of admins. Pagination can be controlled using page and limit query parameters.',
  })
  @ApiResponse({
    status: 200,
    description: 'Admins retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Admins retrieved successfully',
        data: {
          data: [
            {
              id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
              name: 'Admin User',
              email: 'admin@example.com',
              role: 'ADMIN',
              schoolId: 'school-uuid',
              status: 'ACTIVE',
              isActive: true,
              createdAt: '2026-09-12T10:30:00.000Z',
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
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Admin access required.',
  })
  async findAll(@Query() pagination: PaginationDto) {
    return this.adminsService.findAll(pagination);
  }

  @Get(':id')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiOperation({
    summary: 'Get admin by ID',
    description: 'Retrieves a specific admin using the admin ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Admin retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Admin retrieved successfully',
        data: {
          id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'ADMIN',
          school: {
            id: 'adb26834-cc9f-47c4-82f6-883bf925ae4f',
            name: 'St. Xavier School',
            code: 'SXS001',
          },
          status: 'ACTIVE',
          emailVerified: true,
          mobileVerified: false,
          isActive: true,
          createdAt: '2026-09-12T10:30:00.000Z',
          updatedAt: '2026-09-12T10:30:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Admin access required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Admin not found.',
  })
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(id);
  }

  @Patch(':id')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiOperation({
    summary: 'Update admin',
    description: 'Updates the details of an existing admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Admin updated successfully.',
    schema: {
      example: {
        success: true,
        message: 'Admin updated successfully',
        data: {
          id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
          name: 'Updated Admin',
          email: 'admin@example.com',
          role: 'ADMIN',
          schoolId: 'school-uuid',
          status: 'ACTIVE',
          isActive: true,
          updatedAt: '2026-09-12T11:00:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid admin data.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Admin access required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Admin not found.',
  })
  update(@Param('id') id: string, @Body() dto: UpdateAdminDto) {
    return this.adminsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiOperation({
    summary: 'Delete admin',
    description: 'Deletes an existing admin by ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Admin deleted successfully.',
    schema: {
      example: {
        success: true,
        message: 'Admin deleted successfully',
        data: {
          message: 'Admin deleted successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Admin access required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Admin not found.',
  })
  remove(@Param('id') id: string) {
    return this.adminsService.remove(id);
  }
}
