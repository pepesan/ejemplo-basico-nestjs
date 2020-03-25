import { IsInt } from 'class-validator';
// Uso de la biblioteca https://github.com/typestack/class-validator
export class ListAllEntities {
  @IsInt()
  readonly limit: number;
  @IsInt()
  readonly page: number;
  @IsInt()
  numElements: number;
}
