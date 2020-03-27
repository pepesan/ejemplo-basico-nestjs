import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// Uso de la biblioteca https://github.com/typestack/class-validator
export class ListAllEntities {
  @IsString()
  @ApiProperty()
  readonly limit: string;
  @IsString()
  @ApiProperty()
  readonly page: string;
  constructor(limit: string = '10', page: string = '0') {
    this.limit = limit;
    this.page = page;
  }
}
