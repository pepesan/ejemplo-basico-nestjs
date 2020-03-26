import { IsInt, IsString } from 'class-validator';
// Uso de la biblioteca https://github.com/typestack/class-validator
export class ListAllEntities {
  @IsString()
  readonly limit: number;
  @IsString()
  readonly page: number;
}
