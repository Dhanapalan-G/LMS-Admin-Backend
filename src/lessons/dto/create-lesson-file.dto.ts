import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateLessonFileDto {
  @ApiProperty({
    example: 'Introduction to Photosynthesis.pdf',
    description: 'Original file name.',
  })
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @ApiProperty({
    example: 'https://cdn.example.com/lessons/photosynthesis.pdf',
    description: 'S3/CDN URL of the uploaded file.',
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  fileUrl: string;

  @ApiProperty({
    example: 'PDF',
    description: 'File type such as PDF, VIDEO, PPTX, AUDIO, IMAGE, etc.',
  })
  @IsString()
  @IsNotEmpty()
  fileType: string;

  @ApiPropertyOptional({
    example: 'application/pdf',
    description: 'MIME type of the file.',
  })
  @IsString()
  @IsOptional()
  mimeType?: string;

  @ApiPropertyOptional({
    example: 2456789,
    description: 'File size in bytes.',
  })
  @IsInt()
  @Min(0)
  @IsOptional()
  fileSize?: number;
}
