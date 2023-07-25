import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModel } from 'src/models/products.model';
import { CategoriesModel } from 'src/models/categories.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'products', schema: ProductsModel },
      { name: 'categories', schema: CategoriesModel },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
