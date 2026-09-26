import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  Body,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { FileInterceptor } from '@nestjs/platform-express';

import { S3Service } from '../common/services/s3.service';
import type { MulterFile } from '../common/services/types/multer-file.type';
import { PresignedUploadDto } from './dto/presigned-upload.dto';
import { AuthType } from '../auth/decorators/auth-type.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthTypeGuard } from '../auth/guards/auth-type.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { AdminRole } from '../generated/prisma/enums';

@ApiTags('Admin - Files upload')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, AuthTypeGuard, RolesGuard)
@AuthType('ADMIN')
@Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
@Controller('files')
export class FilesController {
  constructor(private readonly s3Service: S3Service) {}

  @Post('upload')
  @ApiOperation({
    summary: 'Upload file to S3',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
      required: ['file'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'File uploaded successfully',
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: MulterFile) {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    return this.s3Service.uploadFile(file, 'learning');
  }

  @Post('presigned-url')
  @ApiOperation({
    summary: 'Generate S3 pre-signed upload URL',
    description:
      'Generates a temporary pre-signed URL for direct file upload to AWS S3.',
  })
  @ApiBody({
    type: PresignedUploadDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Pre-signed upload URL generated successfully.',
    schema: {
      example: {
        uploadUrl:
          'https://your-bucket.s3.ap-south-1.amazonaws.com/lessons/550e8400-e29b-41d4-a716-446655440000.pdf?X-Amz-Algorithm=...',
        fileUrl:
          'https://your-bucket.s3.ap-south-1.amazonaws.com/lessons/550e8400-e29b-41d4-a716-446655440000.pdf',
        key: 'lessons/550e8400-e29b-41d4-a716-446655440000.pdf',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid file type, file size, or request data.',
  })
  async generatePresignedUrl(@Body() dto: PresignedUploadDto) {
    return this.s3Service.generatePresignedUploadUrl(
      dto.fileName,
      dto.fileType,
      dto.folder,
      dto.fileSize,
    );
  }
}
