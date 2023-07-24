import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsDto } from 'src/dto/product.dto';
import { Products } from 'src/models/products.model';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel('products')
    private readonly productsModel: Model<Products>,
  ) {}

  async insertCategory(product: ProductsDto): Promise<Products> {
    return await new this.productsModel(product).save();
  }

  async findAll(): Promise<Products[]> {
    return await this.productsModel.find().exec();
  }
}
