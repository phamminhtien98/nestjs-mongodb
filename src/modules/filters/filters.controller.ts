import { Body, Controller, Get, Post } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { FiltersDto } from 'src/dto/filters.dto';

@Controller('filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}
  @Get()
  async getAllCategories() {
    const categories = await this.filtersService.findAll();
    return categories;
  }

  @Post()
  async insertCategory(@Body() filter: FiltersDto) {
    const categories = await this.filtersService.insertCategory(filter);
    return categories;
  }
}
