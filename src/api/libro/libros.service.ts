import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Libro } from './libro';
import { Model } from 'mongoose';
import { RestDto } from '../rest/interfaces/rest-dto';
@Injectable()
export class LibrosService {
  constructor(@InjectModel('Libro')
              private readonly modelo: Model<Libro>) {
  }
  async findAll(): Promise<Libro[]> {
    // this.logger.log('query: limit :' + query.limit + ' page: ' + query.page);
    const promesa = this.modelo.find().exec();
    return promesa;
  }
}
