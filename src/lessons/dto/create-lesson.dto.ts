import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { LessonType } from '../../generated/prisma/client';

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
}
