import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDto } from 'src/dto/product.dto';
import { IParamsConfig } from 'src/utils/paramConfig';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    const products = await this.productsService.getAllProducts();
    return products;
  }

  @Get('filter')
  async getProducts(@Query() params: IParamsConfig) {
    console.log(params);
    return await this.productsService.getProducts(params);
  }

  @Post()
  async insertProducts(@Body() product: ProductsDto) {
    const Newproduct = await this.productsService.insertProducts(product);
    return Newproduct;
  }
}
