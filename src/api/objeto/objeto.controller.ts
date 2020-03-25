import { Controller, Get } from '@nestjs/common';

@Controller('objeto')
export class ObjetoController {
  @Get()
  cogeCosas(): string {
    return 'Cosas';
  }
}
