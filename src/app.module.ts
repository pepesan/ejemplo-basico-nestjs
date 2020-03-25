import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './rutas/rutas.controller';
import { PatronesController } from './patrones/patrones.controller';
import { ParamsController } from './params/params.controller';
import { PayloadController } from './payload/payload.controller';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ApiModule],
  controllers: [AppController,
    RutasController,
    PatronesController,
    ParamsController,
    PayloadController],
  providers: [AppService],
})
export class AppModule {}
