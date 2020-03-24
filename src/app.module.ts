import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './rutas/rutas.controller';
import { PatronesController } from './patrones/patrones.controller';
import { ParamsController } from './params/params.controller';
import { RestController } from './rest/rest.controller';
import { PayloadController } from './payload/payload.controller';

@Module({
  imports: [],
  controllers: [AppController, RutasController, PatronesController, ParamsController, RestController, PayloadController],
  providers: [AppService],
})
export class AppModule {}
