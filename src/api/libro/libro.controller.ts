import { Controller, Get } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { Libro } from './libro';

@Controller('libro')
export class LibroController {
  constructor(private librosService: LibrosService) {
  }
  @Get()
  async getAll(): Promise<Libro[]> {
    return this.librosService.findAll();
  }
}
