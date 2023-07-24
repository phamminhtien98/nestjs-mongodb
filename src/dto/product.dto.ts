export class Shopbadgeurl {
  type?: string;
  icon_url?: string;
  constructor(data: Shopbadgeurl) {
    this.type = data.type;
    this.icon_url = data.icon_url;
  }
}
export class Eventbanners {
  type?: string;
  image?: string;
  constructor(data: Eventbanners) {
    this.type = data.type;
    this.image = data.image;
  }
}
export class Promotionsubmessage {
  type?: string;
  text?: string;
  icon?: string;
  constructor(data: Promotionsubmessage) {
    this.type = data.type;
    this.text = data.text;
    this.icon = data.icon;
  }
}

export class ProductsDto {
  type?: string;
  name?: string;
  category_ids?: number[];
  category_id?: number;
  final_price?: number;
  buy_limit?: number;
  price?: number;
  quantity?: number;
  remaining?: number;
  promotion_percentage?: number;
  app_discount_percentage?: number;
  order_count?: number;
  rating_percent?: number;
  is_using_in_day?: number;
  is_using_instant?: number;
  is_using_standard?: number;
  shop_badge_urls?: Shopbadgeurl[];
  shop_warehouse_city?: string;
  shop_warehouse_city_id?: number;
  thumbnail_url?: string;
  price_range?: string;
  event_banners?: Eventbanners[];
  promotion_sub_message?: Promotionsubmessage;
  is_shop_mall?: boolean;
  is_in_promotion?: boolean;
  is_in_promotion_app?: boolean;
  is_installment?: boolean;
  loai_dia?: string[];
  loai_sac?: string[];
  ngon_ngu?: string[];
  nha_xuat_ban?: string[];
  phien_ban?: string[];
  the_loai?: string[];
  tinh_trang_sach?: string[];
  xuat_xu?: string[];
  constructor(data: ProductsDto) {
    this.type = data.type;
    this.name = data.name;
    this.category_ids = data.category_ids;
    this.category_id = data.category_id;
    this.final_price = data.final_price;
    this.buy_limit = data.buy_limit;
    this.price = data.price;
    this.quantity = data.quantity;
    this.remaining = data.remaining;
    this.promotion_percentage = data.promotion_percentage;
    this.app_discount_percentage = data.app_discount_percentage;
    this.order_count = data.order_count;
    this.rating_percent = data.rating_percent;
    this.is_using_in_day = data.is_using_in_day;
    this.is_using_instant = data.is_using_instant;
    this.is_using_standard = data.is_using_standard;
    this.shop_badge_urls = data.shop_badge_urls
      ? data.shop_badge_urls.map((option) => new Shopbadgeurl(option))
      : [];
    this.shop_warehouse_city = data.shop_warehouse_city;
    this.shop_warehouse_city_id = data.shop_warehouse_city_id;
    this.thumbnail_url = data.thumbnail_url;
    this.price_range = data.price_range;
    this.event_banners = data.event_banners
      ? data.event_banners.map((option) => new Eventbanners(option))
      : [];
    this.promotion_sub_message = data.promotion_sub_message;
    this.is_shop_mall = data.is_shop_mall;
    this.is_in_promotion = data.is_in_promotion;
    this.is_in_promotion_app = data.is_in_promotion_app;
    this.is_installment = data.is_installment;
    this.loai_dia = data.loai_dia;
    this.loai_sac = data.loai_sac;
    this.ngon_ngu = data.ngon_ngu;
    this.nha_xuat_ban = data.nha_xuat_ban;
    this.phien_ban = data.phien_ban;
    this.the_loai = data.the_loai;
    this.tinh_trang_sach = data.tinh_trang_sach;
    this.xuat_xu = data.xuat_xu;
  }
}
