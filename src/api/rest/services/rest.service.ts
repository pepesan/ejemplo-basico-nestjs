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
                private readonly modelo: Model<RestDto>) {
    this.listado = [];
  }
  async findAllSimple(): Promise<RestDto[]> {
    // this.logger.log('query: limit :' + query.limit + ' page: ' + query.page);
    const promesa = this.modelo.find().exec();
    this.logger.log(promesa);
    return promesa;
  }
  async create(restDTOSinId: RestDTOSinId): Promise<RestDto> {
    const createdRestDto = new this.modelo(restDTOSinId);
    return await createdRestDto.save();
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
  async findById(id: string): Promise<RestDto> {
    return await this.modelo.findById(id);
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
    // ret = this.listado.find(value => value.id == id);
    this.logger.log('ret:' + ret);
    if (ret === undefined) {
      return new RestDto();
    }
    return  ret;
  }
  async updateById(id: string, restDTOSinId: RestDTOSinId): Promise<RestDto> {
    await this.modelo.updateOne({ _id : id }, restDTOSinId);
    return await this.modelo.findById(id);
  }
  async patchById(id: string, restDTOSinId: RestDTOSinId): Promise<RestDto> {
    const objetoGuardado = await this.modelo.findById(id);
    if (restDTOSinId.name != null) {
      objetoGuardado.name = restDTOSinId.name;
    }
    if (restDTOSinId.age != null) {
      objetoGuardado.age = restDTOSinId.age;
    }
    await this.modelo.updateOne({ _id : id }, restDTOSinId);
    return await this.modelo.findById(id);
  }
  async delete(id: string): Promise<RestDto> {
    const datoGuardado = await this.modelo.findById(id);
    await this.modelo.findOneAndRemove({ _id : id });
    return datoGuardado;
  }
}
