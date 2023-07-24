import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ versionKey: false })
export class Categories {
  @Prop()
  id?: number;

  @Prop()
  name?: string;

  @Prop()
  image?: string;

  @Prop()
  path?: string;

  @Prop()
  ids?: number[];

  @Prop()
  parent_id?: number;
}
export type CategoriesDocument = HydratedDocument<Categories>;
export const CategoriesModel = SchemaFactory.createForClass(Categories);
