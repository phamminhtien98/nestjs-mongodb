import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductsDto } from 'src/dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}
  async getAllCategories() {
    return await this.productsRepository.findAll();
  }
  async insertCategory(product: ProductsDto) {
    return await this.productsRepository.insertCategory(product);
  }
}
