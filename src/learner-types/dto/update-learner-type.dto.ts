import { PartialType } from '@nestjs/swagger';
import { CreateLearnerTypeDto } from './create-learner-type.dto';

export class UpdateLearnerTypeDto extends PartialType(CreateLearnerTypeDto) {}
