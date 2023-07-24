import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesDto } from 'src/dto/categories.dto';
import { CategoriesService } from 'src/modules/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories() {
    const categories = await this.categoriesService.getAllCategories();
    return categories;
  }
  @Get('categories-parent')
  async getCategoriesParent() {
    const categories = await this.categoriesService.findCategoriesParent();
    return categories;
  }

  @Post()
  async insertCategory(@Body() category: CategoriesDto) {
    const categories = await this.categoriesService.insertCategory(category);
    return categories;
  }
}
