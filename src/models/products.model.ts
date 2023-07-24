import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

interface Ishopbadgeurl {
  type?: string;
  icon_url?: string;
}
interface Ieventbanners {
  type?: string;
  image?: string;
}
interface Ipromotionsubmessage {
  type?: string;
  text?: string;
  icon?: string;
}

@Schema({ versionKey: false })
export class Products {
  @Prop()
  type?: string;

  @Prop()
  name?: string;

  @Prop()
  category_ids?: number[];

  @Prop()
  category_id?: number;

  @Prop()
  final_price?: number;

  @Prop()
  buy_limit?: number;

  @Prop()
  price?: number;

  @Prop()
  quantity?: number;

  @Prop()
  remaining?: number;

  @Prop()
  promotion_percentage?: number;

  @Prop()
  app_discount_percentage?: number;

  @Prop()
  order_count?: number;

  @Prop()
  rating_percent?: number;

  @Prop()
  is_using_in_day?: number;

  @Prop()
  is_using_instant?: number;

  @Prop()
  is_using_standard?: number;

  @Prop()
  shop_badge_urls?: Ishopbadgeurl[];

  @Prop()
  shop_warehouse_city?: string;

  @Prop()
  shop_warehouse_city_id?: number;

  @Prop()
  thumbnail_url?: string;

  @Prop()
  price_range?: string;

  @Prop()
  event_banners?: Ieventbanners[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Ipromotionsubmessage' })
  promotion_sub_message?: Ipromotionsubmessage;

  @Prop()
  is_shop_mall?: boolean;

  @Prop()
  is_in_promotion?: boolean;

  @Prop()
  is_in_promotion_app?: boolean;

  @Prop()
  is_installment?: boolean;

  @Prop()
  loai_dia?: string[];

  @Prop()
  loai_sac?: string[];

  @Prop()
  ngon_ngu?: string[];

  @Prop()
  nha_xuat_ban?: string[];

  @Prop()
  phien_ban?: string[];

  @Prop()
  the_loai?: string[];

  @Prop()
  tinh_trang_sach?: string[];

  @Prop()
  xuat_xu?: string[];
}
export type CategoriesDocument = HydratedDocument<Products>;
export const ProductsModel = SchemaFactory.createForClass(Products);
