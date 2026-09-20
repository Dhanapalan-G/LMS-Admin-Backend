import { PartialType } from '@nestjs/swagger';
import { CreateLearnerRoleDto } from './create-learner-role.dto';

export class UpdateLearnerRoleDto extends PartialType(CreateLearnerRoleDto) {}
