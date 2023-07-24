import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllCategories() {
    const categories = await this.productsService.getAllCategories();
    return categories;
  }
  @Post()
  async insertCategory(@Body() product: ProductsDto) {
    const categories = await this.productsService.insertCategory(product);
    return categories;
  }
}
