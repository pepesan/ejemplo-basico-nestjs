import { Module } from '@nestjs/common';
import { ObjetoController } from './objeto/objeto.controller';
import { RestController } from './rest/controllers/rest.controller';
import { RestService } from './rest/services/rest.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from './rest/schemas/person.schema';

@Module({
  controllers: [ObjetoController, RestController],
  providers: [RestService],
  imports: [AdminModule,
    MongooseModule.forFeature([{
      name: 'Persona',
      schema: PersonSchema }])],
})
export class ApiModule {}
