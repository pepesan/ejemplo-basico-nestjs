import { Module } from '@nestjs/common';
import { ObjetoController } from './objeto/objeto.controller';
import { RestController } from './rest/rest.controller';
import { RestService } from './rest/rest.service';

@Module({
  controllers: [ObjetoController, RestController],
  providers: [RestService],
})
export class ApiModule {}
