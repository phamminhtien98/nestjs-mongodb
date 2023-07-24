import { Injectable } from '@nestjs/common';
import { FiltersRepository } from './filters.repository';
import { FiltersDto } from 'src/dto/filters.dto';
import { Filters } from 'src/models/filters.model';

@Injectable()
export class FiltersService {
  constructor(private readonly filtersRepository: FiltersRepository) {}

  async insertCategory(filter: FiltersDto): Promise<Filters> {
    return await this.filtersRepository.insertCategory(filter);
  }

  async findAll(): Promise<Filters[]> {
    return await this.filtersRepository.findAll();
  }
}
