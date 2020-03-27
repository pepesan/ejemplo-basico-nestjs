import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './rutas/rutas.controller';
import { PatronesController } from './patrones/patrones.controller';
import { ParamsController } from './params/params.controller';
import { PayloadController } from './payload/payload.controller';
import { ApiModule } from './api/api.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    ApiModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })],
  controllers: [AppController,
    RutasController,
    PatronesController,
    ParamsController,
    PayloadController],
  providers: [AppService],
})
export class AppModule {}
