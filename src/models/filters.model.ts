import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export interface Option {
  option_id?: number;
  option_name?: string;
  name?: string;
  value?: number;
  search_key?: string;
  gtprice?: string | number;
  ltprice?: string | number;
  gte_rating_percent?: string;
  lte_rating_percent?: string;
  color_id?: number;
  image?: string;
  color_hexRgb?: string;
  color_name?: string;
}

@Schema({ versionKey: false })
export class Filters {
  @Prop()
  attribute_term?: string;

  @Prop()
  attribute_name?: string;

  @Prop()
  attribute_key?: string;

  @Prop()
  attribute_icon?: string;

  @Prop()
  attribute_label?: string;

  @Prop()
  attribute_value?: Option[];
}
export type FiltersDocument = HydratedDocument<Filters>;
export const FiltersModel = SchemaFactory.createForClass(Filters);
