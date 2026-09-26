import { BadRequestException, Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { MulterFile } from './types/multer-file.type';
import { randomUUID } from 'crypto';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
@Injectable()
export class S3Service {
  private readonly s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  async uploadFile(file: MulterFile, folder: string) {
    const fileName = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`;

    const key = `${folder}/${fileName}`;

    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      }),
    );

    const fileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    const data = {
      key,
      fileUrl,
      fileName: file.originalname,
      fileType: file.mimetype,
      fileSize: file.size,
    };
    return {
      message: 'File Uploaded successfully.',
      data,
    };
  }

  async generatePresignedUploadUrl(
    fileName: string,
    fileType: string,
    folder: string,
    fileSize: number,
  ) {
    // --------------------------------------------
    // 1. Validate file type
    // --------------------------------------------

    const allowedFileTypes = [
      'application/pdf',

      'image/jpeg',
      'image/png',
      'image/webp',

      'video/mp4',
      'video/webm',

      'audio/mpeg',
      'audio/wav',

      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ];

    if (!allowedFileTypes.includes(fileType)) {
      throw new BadRequestException(`File type ${fileType} is not allowed`);
    }

    // --------------------------------------------
    // 2. Validate file size
    // --------------------------------------------

    const maxFileSize = 100 * 1024 * 1024; // 100 MB

    if (fileSize > maxFileSize) {
      throw new BadRequestException('File size cannot exceed 100 MB');
    }

    if (fileSize <= 0) {
      throw new BadRequestException('File size must be greater than 0');
    }

    // --------------------------------------------
    // 3. Generate unique file name
    // --------------------------------------------

    const extension = fileName.includes('.')
      ? fileName.substring(fileName.lastIndexOf('.'))
      : '';

    const uniqueFileName = `${randomUUID()}${extension}`;

    const key = `${folder}/${uniqueFileName}`;

    // --------------------------------------------
    // 4. Create S3 command
    // --------------------------------------------

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: key,
      ContentType: fileType,
    });

    // --------------------------------------------
    // 5. Generate temporary URL
    // --------------------------------------------

    const uploadUrl = await getSignedUrl(this.s3Client, command, {
      expiresIn: 300,
    });

    // --------------------------------------------
    // 6. File URL
    // --------------------------------------------

    const fileUrl =
      `https://${process.env.AWS_S3_BUCKET_NAME}` +
      `.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    const data = {
      uploadUrl,
      fileUrl,
      key,
    };
    return {
      message: 'Pre-signed upload URL generated successfully.',
      data,
    };
  }
}
