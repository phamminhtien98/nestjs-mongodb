import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Filters } from 'src/models/filters.model';
import { FiltersDto } from 'src/dto/filters.dto';

@Injectable()
export class FiltersRepository {
  constructor(
    @InjectModel('filters')
    private readonly filtersModel: Model<Filters>,
  ) {}

  async findAll(): Promise<Filters[]> {
    return await this.filtersModel.find().exec();
  }
  async insertCategory(filter: FiltersDto): Promise<Filters> {
    return await new this.filtersModel(filter).save();
  }
}
