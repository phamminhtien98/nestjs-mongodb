import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModel } from 'src/models/categories.model';
import { CategoriesController } from 'src/modules/categories/categories.controller';
import { CategoriesRepository } from 'src/modules/categories/categories.repositories';
import { CategoriesService } from 'src/modules/categories/categories.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'categories', schema: CategoriesModel },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesRepository],
})
export class CategoriesModule {}
