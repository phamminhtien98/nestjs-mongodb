import { Injectable } from '@nestjs/common';
import { CategoriesDto } from 'src/dto/categories.dto';
import { Categories } from 'src/models/categories.model';
import { CategoriesRepository } from 'src/modules/categories/categories.repositories';
@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}
  async getAllCategories() {
    return await this.categoriesRepository.findAll();
  }
  async insertCategory(category: CategoriesDto) {
    return await this.categoriesRepository.insertCategory(category);
  }
  async findCategoriesParent(): Promise<Categories[]> {
    return await this.categoriesRepository.findCategoriesParent();
  }
}
