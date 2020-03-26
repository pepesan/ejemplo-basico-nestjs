import { RestDto } from './rest-dto';
import { ListAllEntities } from './list-all-entities';

export class ListResponse {
  data: RestDto[];
  pagination: ListAllEntities;
  status: string;
  message: string;
}
