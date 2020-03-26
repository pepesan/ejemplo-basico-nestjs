import { IsInt, IsString } from 'class-validator';

export class RestDTOSinId {
  @IsString()
  name: string;
  @IsInt()
  age: number;
}
