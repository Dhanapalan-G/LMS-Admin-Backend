import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CertificationsService } from './certifications.service';
import { CertificationQueryDto } from './dto/certification-query.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { RolesGuard } from '../common/guards/roles.guard';

import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';

import { AdminRole } from '../generated/prisma/enums';

@ApiTags('Admin - Certifications')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('admin/certifications')
export class CertificationsController {
  constructor(private readonly certificationsService: CertificationsService) {}

  // ============================================================
  // FIND ALL
  // ============================================================

  @Get()
  @ApiOperation({
    summary: 'Get certification records',
    description:
      'Returns learner certification records with summary counts, search, filters, and pagination.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    example: 'Anitha',
    description:
      'Search learner name, employee ID, email, course title, or certificate number',
  })
  @ApiQuery({
    name: 'schoolId',
    required: false,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiQuery({
    name: 'learnerRoleId',
    required: false,
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  @ApiQuery({
    name: 'departmentId',
    required: false,
    example: '550e8400-e29b-41d4-a716-446655440002',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ['CERTIFIED', 'IN_PROGRESS', 'NOT_CERTIFIED'],
    example: 'CERTIFIED',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'Certification records retrieved successfully.',
    schema: {
      example: {
        success: true,
        message: 'Certification records retrieved successfully',
        data: {
          summary: {
            certified: 6,
            inProgress: 1,
            notCertified: 1,
            totalRecords: 8,
          },
          items: [
            {
              id: 'enrollment-uuid',
              learner: {
                id: 'learner-uuid',
                name: 'Anitha Kumar',
                employeeId: 'EMP001',
                email: 'anitha.kumar@lms.edu',
              },
              role: {
                id: 'role-uuid',
                name: 'Teacher',
              },
              school: {
                id: 'school-uuid',
                name: 'SBOA School & Junior College',
                code: 'SBOA',
              },
              course: {
                id: 'course-uuid',
                title: 'Digital Classroom',
                code: 'CRS001',
              },
              categories: [
                {
                  id: 'category-uuid',
                  name: 'Technology',
                },
              ],
              department: {
                id: 'department-uuid',
                name: 'Academic',
              },
              completedAt: '2025-04-10T00:00:00.000Z',
              certificate: {
                id: 'certificate-uuid',
                certificateNumber: 'CERT-2025-0001',
                fileUrl:
                  'https://cdn.example.com/certificates/CERT-2025-0001.pdf',
                issuedAt: '2025-04-10T00:00:00.000Z',
              },
              status: 'CERTIFIED',
            },
          ],
          pagination: {
            page: 1,
            limit: 10,
            total: 8,
            totalPages: 1,
          },
        },
      },
    },
  })
  async findAll(@Query() query: CertificationQueryDto) {
    return await this.certificationsService.findAll(query);
  }

  // ============================================================
  // FIND ONE
  // ============================================================

  @Get(':enrollmentId')
  @ApiOperation({
    summary: 'Get certification record by ID',
    description:
      'Returns complete certification information for one learner-course enrollment.',
  })
  @ApiParam({
    name: 'id',
    description: 'Enrollment/Certification record ID',
    example: '550e8400-e29b-41d4-a716-446655440003',
  })
  @ApiResponse({
    status: 200,
    description: 'Certification record retrieved successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Certification record not found.',
  })
  async findOne(@Param('enrollmentId') id: string) {
    const data = await this.certificationsService.findOne(id);

    return {
      success: true,
      message: 'Certification record retrieved successfully',
      data,
    };
  }
}
