import { Injectable, Logger } from '@nestjs/common';
import { RestDto } from '../interfaces/rest-dto';
import {RestDTOSinId} from '../interfaces/rest-dtosin-id';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ListAllEntities } from '../interfaces/list-all-entities';

@Injectable()
export class RestService {
  private readonly logger = new Logger(RestService.name);
  private listado: RestDto[];
  constructor(@InjectModel('Persona')
                private readonly modelo: Model<RestDTOSinId>) {
    this.listado = [];
  }
  async findAllAsync(query: ListAllEntities): Promise<RestDto[]> {
    this.logger.log('query: limit :' + query.limit + ' page: ' + query.page);
    const promesa = this.modelo.find(
      {},
      'name age')
      .limit(+query.limit)
      .skip((+query.limit) * (+query.page)).exec();
    return promesa;
  }
  findAll(query: ListAllEntities): Promise<RestDto[]> {
    this.logger.log('query: limit :' + query.limit + ' page: ' + query.page);
    const promesa = this.modelo.find(
      {},
      'name age')
      .limit(+query.limit)
      .skip((+query.limit) * (+query.page)).exec();
    return promesa;
  }
  getListado() {
    return this.listado;
  }
  addData(restDTO: RestDto) {
    this.listado.push(restDTO);
  }
  getElementById(id: number): RestDto {
    let ret: RestDto;
    /*
    this.listado.forEach(value => {
      this.logger.log('value: ' + value);
      this.logger.log('value: ' + value.id);
      this.logger.log('id: ' + id);
      if (value.id == id) {
        this.logger.log('iguales');
        ret = value;
      } else {
        this.logger.log('distintos');
      }
    });

     */
    ret = this.listado.find(value => value.id == id);
    this.logger.log('ret:' + ret);
    if (ret === undefined) {
      return new RestDto();
    }
    return  ret;
  }
}
