import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateLearnerTypeDto } from './dto/create-learner-type.dto';
import { UpdateLearnerTypeDto } from './dto/update-learner-type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LearnerTypesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    dto: CreateLearnerTypeDto,
    user: {
      id: string;
      schoolId: string | null;
    },
  ) {
    const schoolId = user.schoolId;

    if (!schoolId) {
      throw new ConflictException(
        'School is required to create a learner type',
      );
    }

    const existing = await this.prisma.learnerType.findUnique({
      where: {
        schoolId_code: {
          schoolId,
          code: dto.code,
        },
      },
    });

    if (existing) {
      throw new ConflictException(
        'Learner type code already exists in this school',
      );
    }

    return this.prisma.learnerType.create({
      data: {
        schoolId,
        name: dto.name,
        code: dto.code,
      },
    });
  }

  async findAll(user: { schoolId: string | null }) {
    if (!user.schoolId) {
      return [];
    }

    const items = await this.prisma.learnerType.findMany({
      where: {
        schoolId: user.schoolId,
      },
      orderBy: {
        name: 'asc',
      },
    });
    return items;
  }

  async findOne(
    id: string,
    user: {
      schoolId: string | null;
    },
  ) {
    const learnerType = await this.prisma.learnerType.findFirst({
      where: {
        id,
        schoolId: user.schoolId ?? undefined,
      },
    });

    if (!learnerType) {
      throw new NotFoundException('Learner type not found');
    }

    return learnerType;
  }

  async update(
    id: string,
    dto: UpdateLearnerTypeDto,
    user: {
      schoolId: string | null;
    },
  ) {
    const existing = await this.prisma.learnerType.findFirst({
      where: {
        id,
        schoolId: user.schoolId ?? undefined,
      },
    });

    if (!existing) {
      throw new NotFoundException('Learner type not found');
    }

    if (dto.code && dto.code !== existing.code) {
      const duplicate = await this.prisma.learnerType.findUnique({
        where: {
          schoolId_code: {
            schoolId: existing.schoolId,
            code: dto.code,
          },
        },
      });

      if (duplicate) {
        throw new ConflictException(
          'Learner type code already exists in this school',
        );
      }
    }

    return this.prisma.learnerType.update({
      where: {
        id,
      },
      data: {
        ...(dto.name !== undefined && {
          name: dto.name,
        }),
        ...(dto.code !== undefined && {
          code: dto.code,
        }),
      },
    });
  }

  async deactivate(
    id: string,
    user: {
      schoolId: string | null;
    },
  ) {
    const existing = await this.prisma.learnerType.findFirst({
      where: {
        id,
        schoolId: user.schoolId ?? undefined,
      },
    });

    if (!existing) {
      throw new NotFoundException('Learner type not found');
    }

    return this.prisma.learnerType.update({
      where: {
        id,
      },
      data: {
        isActive: false,
      },
    });
  }
}
