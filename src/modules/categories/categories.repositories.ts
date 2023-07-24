import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoriesDto } from 'src/dto/categories.dto';
import { Categories } from 'src/models/categories.model';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectModel('categories')
    private readonly categoriesModel: Model<Categories>,
  ) {}

  async insertCategory(category: CategoriesDto): Promise<Categories> {
    return await new this.categoriesModel(category).save();
  }

  async findAll(): Promise<Categories[]> {
    return await this.categoriesModel.find().exec();
  }
  async findCategoriesParent(): Promise<Categories[]> {
    return await this.categoriesModel.aggregate([
      {
        $match: {
          parent_id: 2,
        },
      },
      {
        $lookup: {
          from: 'categories',
          let: {
            parent_id: '$id',
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$$parent_id', '$parent_id'],
                },
              },
            },
            {
              $lookup: {
                from: 'categories',
                localField: 'id',
                foreignField: 'parent_id',
                as: 'sub_category',
              },
            },
          ],
          as: 'sub_category',
        },
      },
    ]);
  }
}
