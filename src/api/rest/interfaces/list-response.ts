import { RestDto } from './rest-dto';
import { ListAllEntities } from './list-all-entities';
import { ApiProperty } from '@nestjs/swagger';

export class ListResponse {
  @ApiProperty()
  data: RestDto[];
  @ApiProperty()
  pagination: ListAllEntities;
  @ApiProperty()
  status: string;
  @ApiProperty()
  message: string;
}
