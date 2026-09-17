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
import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PaginationDto } from '../common/dto/pagination.dto';
import { RolesGuard } from '../common/guards/roles.guard';
import { AdminRole } from '../generated/prisma/enums';
import { CreateLearnerDto } from './dto/create-learner.dto';
import { RejectLearnerDto } from './dto/reject-learner.dto';
import { UpdateLearnerDto } from './dto/update-learner.dto';
import { LearnersService } from './learners.service';

@ApiTags('Admin - Learners Management')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/learners')
export class LearnersController {
  constructor(private readonly learnersService: LearnersService) {}

  @Post()
  @ApiOperation({
    summary: 'Create learner',
    description:
      'Creates a new learner. The learner is associated with the authenticated admin user’s school.',
  })
  @ApiResponse({
    status: 201,
    description: 'Learner created successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learner created successfully',
        data: {
          id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
          name: 'John Doe',
          email: 'john.doe@example.com',
          role: 'LEARNER',
          schoolId: 'school-uuid',
          status: 'PENDING_VERIFICATION',
          emailVerified: false,
          mobileVerified: false,
          isActive: false,
          createdAt: '2026-09-12T10:30:00.000Z',
          updatedAt: '2026-09-12T10:30:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid learner data or email already exists.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Insufficient permissions.',
  })
  create(@Body() dto: CreateLearnerDto, @Req() req: any) {
    return this.learnersService.create(
      dto,
      req.user.role,
      req.user.schoolId ?? null,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Get learners',
    description:
      'Retrieves a paginated list of learners based on the authenticated user’s role and school.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learners retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learners retrieved successfully',
        data: {
          data: [
            {
              id: 'df38a301-6ba6-46f0-a9c8-8878cf40a96c',
              schoolId: 'b88f340c-538b-425a-bceb-9ac17d853e9d',
              name: 'John Student',
              email: 'john.student@school.com',
              phone: '+919876543210',
              passwordSet: true,
              learnerTypeId: '8df7a2f3-805d-4ae2-b58a-4e90f12415d7',
              employeeId: 'EMP001',
              board: 'CBSE',
              department: 'Computer Science',
              dateOfJoining: '2026-06-01T00:00:00.000Z',
              status: 'ACTIVE',
              rejectionReason: null,
              rejectedAt: null,
              rejectedBy: null,
              approvedAt: '2026-09-13T03:51:49.402Z',
              approvedBy: 'SUPER_ADMIN',
              createdAt: '2026-09-13T03:51:49.421Z',
              updatedAt: '2026-09-13T03:51:49.421Z',
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
    description: 'Forbidden - Insufficient permissions.',
  })
  async findAll(@Req() req: any, @Query() paginationDto: PaginationDto) {
    return this.learnersService.findAll(
      req.user.role,
      req.user.schoolId ?? null,
      paginationDto,
    );
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get learner by ID',
    description:
      'Retrieves a learner by ID. Access is restricted according to the authenticated user’s role and school.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learner retrieved successfully',
        data: {
          id: 'df38a301-6ba6-46f0-a9c8-8878cf40a96c',
          schoolId: 'b88f340c-538b-425a-bceb-9ac17d853e9d',
          name: 'John Student',
          email: 'john.student@school.com',
          phone: '+919876543210',
          passwordSet: true,
          learnerTypeId: '8df7a2f3-805d-4ae2-b58a-4e90f12415d7',
          employeeId: 'EMP001',
          board: 'CBSE',
          department: 'Computer Science',
          dateOfJoining: '2026-06-01T00:00:00.000Z',
          status: 'ACTIVE',
          rejectionReason: null,
          rejectedAt: null,
          rejectedBy: null,
          approvedAt: '2026-09-13T03:51:49.402Z',
          approvedBy: 'SUPER_ADMIN',
          createdAt: '2026-09-13T03:51:49.421Z',
          updatedAt: '2026-09-13T03:51:49.421Z',
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
    description: 'Forbidden - Insufficient permissions.',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner not found.',
  })
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.learnersService.findOne(
      id,
      req.user.role,
      req.user.schoolId ?? null,
    );
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update learner',
    description:
      'Updates an existing learner. Access is restricted according to the authenticated user’s role and school.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner updated successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learner updated successfully',
        data: {
          id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
          name: 'John Updated',
          email: 'john.doe@example.com',
          role: 'LEARNER',
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
    description: 'Invalid learner data.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Insufficient permissions.',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner not found.',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateLearnerDto,
    @Req() req: any,
  ) {
    return this.learnersService.update(
      id,
      dto,
      req.user.role,
      req.user.schoolId ?? null,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete learner',
    description:
      'Deletes a learner. Access is restricted according to the authenticated user’s role and school.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner deleted successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learner deleted successfully',
        data: {
          message: 'Learner deleted successfully',
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
    description: 'Forbidden - Insufficient permissions.',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner not found.',
  })
  remove(@Param('id') id: string, @Req() req: any) {
    return this.learnersService.remove(
      id,
      req.user.role,
      req.user.schoolId ?? null,
    );
  }

  @Patch(':id/approve')
  @ApiOperation({
    summary: 'Approve learner registration',
    description:
      'Approves a pending learner registration and changes the learner status to ACTIVE.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner approved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learner approved successfully',
        data: {
          id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
          name: 'John Doe',
          email: 'john.doe@example.com',
          role: 'LEARNER',
          status: 'ACTIVE',
          isActive: true,
          approvedAt: '2026-09-12T11:30:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Learner cannot be approved.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Insufficient permissions.',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner not found.',
  })
  async approve(@Param('id') id: string, @Req() req: any) {
    return this.learnersService.approve(
      id,
      req.user.id,
      req.user.role,
      req.user.schoolId,
    );
  }

  @Patch(':id/reject')
  @ApiOperation({
    summary: 'Reject learner registration',
    description:
      'Rejects a pending learner registration and records the rejection reason.',
  })
  @ApiResponse({
    status: 200,
    description: 'Learner rejected successfully.',
    schema: {
      example: {
        success: true,
        message: 'Learner rejected successfully',
        data: {
          id: '8f5c7b7a-3b8e-4e6a-9c1a-123456789abc',
          name: 'John Doe',
          email: 'john.doe@example.com',
          role: 'LEARNER',
          status: 'REJECTED',
          rejectionReason: 'Invalid employee details',
          rejectedAt: '2026-09-12T11:30:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Learner cannot be rejected.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing access token.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Insufficient permissions.',
  })
  @ApiResponse({
    status: 404,
    description: 'Learner not found.',
  })
  async reject(
    @Param('id') id: string,
    @Body() dto: RejectLearnerDto,
    @Req() req: any,
  ) {
    return this.learnersService.reject(
      id,
      dto,
      req.user.id,
      req.user.role,
      req.user.schoolId,
    );
  }
}
