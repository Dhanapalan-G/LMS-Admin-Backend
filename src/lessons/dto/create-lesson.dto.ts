import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { LessonStatus, LessonType } from '../../generated/prisma/client';
import { CreateLessonFileDto } from './create-lesson-file.dto';

export class CreateLessonDto {
  @ApiProperty({
    example: 'Introduction to Photosynthesis',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({
    example: 'Learn the basic concepts of photosynthesis.',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    enum: LessonType,
    example: LessonType.VIDEO,
  })
  @IsEnum(LessonType)
  type: LessonType;

  @ApiPropertyOptional({
    enum: LessonStatus,
    example: LessonStatus.DRAFT,
  })
  @IsOptional()
  @IsEnum(LessonStatus)
  status?: LessonStatus;

  @ApiPropertyOptional({
    example: 'https://example.com/video/photosynthesis.mp4',
    description:
      'Optional content value for TEXT or externally hosted content.',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({
    example: 1,
    description: 'Lesson order inside the module.',
  })
  @IsInt()
  @Min(1)
  position: number;

  @ApiPropertyOptional({
    example: 15,
    description: 'Lesson duration in minutes.',
  })
  @IsInt()
  @Min(0)
  @IsOptional()
  duration?: number;

  @ApiPropertyOptional({
    example: true,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  isRequired?: boolean;

  @ApiPropertyOptional({
    type: [CreateLessonFileDto],
    description: 'Files associated with this lesson.',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLessonFileDto)
  @IsOptional()
  files?: CreateLessonFileDto[];
}
