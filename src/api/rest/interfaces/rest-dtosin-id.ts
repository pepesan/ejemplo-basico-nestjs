import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RestDTOSinId {
  @IsString()
  @ApiProperty({
    type: 'string',
  })
  name: string;
  @IsInt()
  @ApiProperty({
    type: 'number',
  })
  age: number;
}
