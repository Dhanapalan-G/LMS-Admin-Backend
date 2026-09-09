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
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';

import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../users.service';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { UserRole } from '../../generated/prisma/client';

@ApiTags('Admin - Users')
@ApiBearerAuth('access-token')
@Controller('api/v1/admin/users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(UserRole.SUPER_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiOperation({
    summary: 'Create a user',
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
  })
  @ApiResponse({
    status: 403,
    description: 'Insufficient permissions',
  })
  async create(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);

    return {
      message: 'User created successfully',
      data: user,
    };
  }

  @Get()
  @Roles(UserRole.SUPER_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiOperation({
    summary: 'Get all users',
  })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.usersService.findAll(paginationDto);
  }

  @Get(':id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiOperation({
    summary: 'Get user by ID',
  })
  async findById(@Param('id') id: string) {
    const user = await this.usersService.findById(id);

    return {
      message: 'User retrieved successfully',
      data: user,
    };
  }
}
