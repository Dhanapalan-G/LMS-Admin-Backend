import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { ModuleStatus } from '../../generated/prisma/enums';

export class CreateModuleDto {
  @ApiProperty({
    example: 'Introduction to Node.js',
  })
  @IsString()
  title: string;

  @ApiPropertyOptional({
    example: 'Learn the fundamentals of Node.js',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    enum: ModuleStatus,
    example: ModuleStatus.DRAFT,
  })
  @IsOptional()
  @IsEnum(ModuleStatus)
  status?: ModuleStatus;

  @ApiProperty({
    example: 1,
    description: 'Module display position',
  })
  @IsInt()
  @Min(1)
  orderIndex: number;
}
