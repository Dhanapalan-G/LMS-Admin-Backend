import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { FilesController } from '../../files/files.controller';

@Module({
  controllers: [FilesController],
  providers: [S3Service],
  exports: [S3Service],
})
export class S3Module {}
