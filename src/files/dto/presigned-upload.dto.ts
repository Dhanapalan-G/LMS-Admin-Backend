import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

export enum S3UploadFolder {
  LESSONS = 'lessons',
  QUIZ = 'quiz',
  COURSES = 'courses',
}

export class PresignedUploadDto {
  @ApiProperty({
    example: 'lesson.pdf',
    description: 'Original name of the file.',
  })
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @ApiProperty({
    example: 'application/pdf',
    description: 'MIME type of the file.',
  })
  @IsString()
  @IsNotEmpty()
  fileType: string;

  @ApiProperty({
    enum: S3UploadFolder,
    enumName: 'S3UploadFolder',
    example: S3UploadFolder.LESSONS,
    description: 'Folder where the file will be stored in S3.',
  })
  @IsEnum(S3UploadFolder)
  folder: S3UploadFolder;

  @ApiProperty({
    example: 5242880,
    description: 'File size in bytes.',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  fileSize: number;
}
