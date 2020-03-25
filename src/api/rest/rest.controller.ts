import { Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query } from '@nestjs/common';
import { RestDto } from './rest-dto';
import {RestDTOSinId} from './rest-dtosin-id';
import {ListAllEntities} from './list-all-entities';
import { ListResponse } from './list-response';
import { RestService } from './rest.service';

@Controller('rest')
export class RestController {
  private idActual: number = 0;
  constructor(private restService: RestService) {
  }
  @Get() // listado
  findAll(@Query() query: ListAllEntities): ListResponse {
    // buscar los datos en la BBDD
    const  response = new ListResponse();
    response.data = this.restService.getListado();
    response.pagination = query;
    response.pagination.numElements = response.data.length;
    response.status = 'OK';
    response.message = 'Correct Query';
    return response;
  }
  @Post() // añadir un objeto
  addOne(@Body() createDto: RestDTOSinId): RestDto {
    // recoger el objeto y meterlo en la BBDD
    const restDTO = new RestDto();
    restDTO.id = this.idActual;
    restDTO.name = createDto.name;
    restDTO.age = createDto.age;
    this.restService.addData(restDTO);
    this.idActual++;
    return restDTO;
  }
  @Get('/:id') // mostrar
  getById(@Param() params): RestDto {
    // Capturar e id y consultar a la BBDD
    /*const restDTO = new RestDto();
    restDTO.id = params.id;
    restDTO.name = 'Pepe';
    restDTO.age = 14;
     */
    return this.restService.getElementById(params.id);
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
