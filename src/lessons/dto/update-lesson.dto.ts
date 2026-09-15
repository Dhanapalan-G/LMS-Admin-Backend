import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsArray, IsEnum, IsOptional, IsUUID } from 'class-validator';

import { CreateLessonDto } from './create-lesson.dto';
import { CreateLessonFileDto } from './create-lesson-file.dto';
import { LessonStatus } from '../../generated/prisma/client';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
  @ApiPropertyOptional({
    type: [CreateLessonFileDto],
    description: 'New files to add to the lesson.',
  })
  @IsArray()
  @IsOptional()
  filesToAdd?: CreateLessonFileDto[];

  @ApiPropertyOptional({
    type: [String],
    example: ['FILE001', 'FILE002'],
    description: 'Existing file IDs to delete.',
  })
  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  fileIdsToDelete?: string[];

  @ApiPropertyOptional({
    enum: LessonStatus,
    example: LessonStatus.DRAFT,
  })
  @IsOptional()
  @IsEnum(LessonStatus)
  status?: LessonStatus;
}
