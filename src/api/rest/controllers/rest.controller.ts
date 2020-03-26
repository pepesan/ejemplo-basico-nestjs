import { Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query } from '@nestjs/common';
import { RestDto } from '../interfaces/rest-dto';
import {RestDTOSinId} from '../interfaces/rest-dtosin-id';
import {ListAllEntities} from '../interfaces/list-all-entities';
import { ListResponse } from '../interfaces/list-response';
import { RestService } from '../services/rest.service';
import { ObjectResponse } from '../interfaces/object-response';

@Controller('rest')
export class RestController {
  private idActual: number = 0;
  constructor(private restService: RestService) {
  }
  @Get() // listado
  async findAll(): Promise<RestDTOSinId[]> {
    return this.restService.findAll();
  }
  /*
  findAll(@Query() query: ListAllEntities): ListResponse {
    // buscar los datos en la BBDD
    const  response = new ListResponse();
    response.data = this.restService.findAll();
    response.pagination = query;
    response.status = 'OK';
    response.message = 'Correct Query';
    return response;
  }

   */
  @Post() // añadir un objeto
  addOne(@Body() createDto: RestDTOSinId): ObjectResponse {
    // recoger el objeto y meterlo en la BBDD
    const restDTO = new RestDto();
    restDTO.id = this.idActual;
    restDTO.name = createDto.name;
    restDTO.age = createDto.age;
    this.restService.addData(restDTO);
    this.idActual++;
    const res = new ObjectResponse();
    res.data = restDTO;
    res.status = 'OK';
    res.message = 'Object saved!';
    return res;
  }
  @Get('/:id') // mostrar
  getById(@Param('id') id: number): ObjectResponse {
    // Capturar e id y consultar a la BBDD
    /*const restDTO = new RestDto();
    restDTO.id = params.id;
    restDTO.name = 'Pepe';
    restDTO.age = 14;
     */
    const res = new ObjectResponse();
    res.data = this.restService.getElementById(id);
    res.status = 'OK';
    res.message = 'Correct ID!';
    return res;
  }
  @Put('/:id') // modificar un objeto
  modifyById(@Param() params,
             @Body() updateDto: RestDTOSinId): ObjectResponse {
    // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
    const restDTO = new RestDto();
    restDTO.id = params.id;
    restDTO.name = updateDto.name;
    restDTO.age = updateDto.age;
    const res = new ObjectResponse();
    res.data = restDTO;
    res.status = 'OK';
    res.message = 'Correct ID!';
    return res;
  }
  @Delete('/:id') // borrar
  deleteById(@Param() params): ObjectResponse {
    // coger el id consultar a la bbdd y luego borrar el objeto
    const restDTO = new RestDto();
    restDTO.id = params.id;
    restDTO.name = 'Pepe';
    restDTO.age = 12;
    const res = new ObjectResponse();
    res.data = restDTO;
    res.status = 'OK';
    res.message = 'Correct ID!';
    return res;
  }
}
