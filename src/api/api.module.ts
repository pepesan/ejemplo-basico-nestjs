import { Module } from '@nestjs/common';
import { ObjetoController } from './objeto/objeto.controller';

@Module({
  controllers: [ObjetoController]
})
export class ApiModule {}
