import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class UpdateLessonFileDto {
  @ApiPropertyOptional({
    example: 'updated-document.pdf',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fileName?: string;

  @ApiPropertyOptional({
    example: 'https://cdn.example.com/updated-document.pdf',
  })
  @IsString()
  @IsUrl()
  @IsOptional()
  fileUrl?: string;

  @ApiPropertyOptional({
    example: 'PDF',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fileType?: string;

  @ApiPropertyOptional({
    example: 'application/pdf',
  })
  @IsString()
  @IsOptional()
  mimeType?: string;

  @ApiPropertyOptional({
    example: 2456789,
  })
  @IsInt()
  @Min(0)
  @IsOptional()
  fileSize?: number;
}
