import { Controller, Post, Body } from '@nestjs/common';
import { EjemploDto } from '../ejemplo-dto';

@Controller('payload')
export class PayloadController {
  @Post()
  async create(@Body() createDto: EjemploDto) {
    return `This action adds a new object with name: ${createDto.name}`;
  }
}
