import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('params')
export class ParamsController {
  // Ruta con parámetro
  @Get('/:id')
  findById(@Param() params) {
    return 'post /rutas/:id ' + params.id;
  }
  // Ruta con parámetros
  @Get('sub/:id/:otro')
  findByIdAndOtro(@Param() params) {
    return 'post /sub/:id/:otro ' + params.id + ':' + params.otro;
  }
  @Post('sub/:id/:otro')
  modifyById(@Param('id') id: number,
             @Param('otro') otro: string) {
    return 'post /params/sub/:id/:otro ' + id + ':' + otro;
  }

}
