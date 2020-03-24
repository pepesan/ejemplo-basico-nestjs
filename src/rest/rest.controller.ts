import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RestDto } from './rest-dto';
import {RestDTOSinId} from './rest-dtosin-id';

@Controller('rest')
export class RestController {
  @Get() // listado
  findAll(): RestDto[] {
    // buscar los datos en la BBDD
    return [];
  }
  @Post() // añadir un objeto
  addOne(@Body() createDto: RestDTOSinId): RestDto {
    // recoger el objeto y meterlo en la BBDD
    const restDTO = new RestDto();
    restDTO.id = 1;
    restDTO.name = createDto.name;
    restDTO.age = createDto.age;
    return restDTO;
  }
  @Get('/:id') // mostrar
  getById(@Param() params): RestDto {
    // Capturar e id y consultar a la BBDD
    const restDTO = new RestDto();
    restDTO.id = params.id;
    restDTO.name = 'Pepe';
    restDTO.age = 14;
    return restDTO;
  }
  @Put('/:id') // modificar un objeto
  modifyById(@Param() params,
             @Body() updateDto: RestDTOSinId): RestDto {
    // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
    const restDTO = new RestDto();
    restDTO.id = params.id;
    restDTO.name = updateDto.name;
    restDTO.age = updateDto.age;
    return restDTO;
  }
  @Delete('/:id') // borrar
  deleteById(@Param() params): RestDto {
    // coger el id consultar a la bbdd y luego borrar el objeto
    const restDTO = new RestDto();
    restDTO.id = params.id;
    restDTO.name = 'Pepe';
    restDTO.age = 12;
    return restDTO;
  }
}
