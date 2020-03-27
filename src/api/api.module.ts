import { Module } from '@nestjs/common';
import { ObjetoController } from './objeto/objeto.controller';
import { RestController } from './rest/controllers/rest.controller';
import { RestService } from './rest/services/rest.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from './rest/schemas/person.schema';
import { LibroSchema } from './libro/libro.schema';
import { LibrosService } from './libro/libros.service';
import { LibroController } from './libro/libro.controller';

@Module({
  controllers: [ObjetoController, RestController, LibroController],
  providers: [RestService, LibrosService],
  imports: [AdminModule,
    MongooseModule.forFeature([
      {
      name: 'Persona',
      schema: PersonSchema,
      collection: 'personas',
      },
      {
        name : 'Libro',
        schema: LibroSchema,
        collection: 'mislibros',
      },
    ])],
})
export class ApiModule {}
