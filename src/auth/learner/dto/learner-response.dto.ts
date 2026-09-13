import { ApiProperty } from '@nestjs/swagger';

export class LearnerMeResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ nullable: true })
  phone: string | null;

  @ApiProperty()
  employeeId: string;

  @ApiProperty({ nullable: true })
  board: string | null;

  @ApiProperty({ nullable: true })
  department: string | null;

  @ApiProperty({ nullable: true })
  dateOfJoining: Date | null;

  @ApiProperty()
  status: string;

  @ApiProperty()
  school: {
    id: string;
    name: string;
    code: string;
  };

  @ApiProperty()
  learnerType: {
    id: string;
    name: string;
    code: string;
  };

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
