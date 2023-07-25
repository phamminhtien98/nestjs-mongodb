export interface IParamsConfig {
  p?: string; //page
  cate_path?: string;
  q?: string; //search
  sort_type?: string;

  shop_warehouse_city_id?: string; //Địa điểm

  is_using_instant?: string; //Phương thức vận chuyển Hỏa tốc
  is_using_in_day?: string; //Phương thức vận chuyển Nhanh
  is_using_standard?: string; //Phương thức vận chuyển "Tiêu chuẩn

  shop_type?: string; //Loại shop SenMall
  is_shop_plus?: string; //Loại shop Shop+
  is_self_shipping?: string; //Loại shop Shop tự giao
  is_certified?: string; //Loại shop Shop Shop uy tín
  campaign_id?: string; //Ưu đãi
  is_flash_sale?: string; //Flash Sale
  is_mega_voucher?: string; //Siêu voucher tháng
  is_pay_later?: string; //Mua trước trả sau
  is_combo_discount?: string; //Mua gói siêu hời
  is_quantity_discount?: string; //Mua nhiều giảm giá
  is_shipping_discount?: string; //Freeship
  is_promotion?: string; //Khuyến mãi
  promotion_app?: string; //Khuyến mãi app
  is_installment?: string; //Trả góp 0%
  gtprice?: string; // giá thấp
  ltprice?: string; // giá cao
  gte_rating_percent?: string; //đánh giá
  lte_rating_percent?: string; //đánh giá
  mau_sac?: string; //màu sắc
  loai_dia?: string; //loại đĩa
  tinh_trang_sach?: string; //Tình trạng sách
  xuat_xu?: string; //Xuất xứ
  ngon_ngu?: string; //ngôn ngữ
  nha_xuat_ban?: string; //nhà xuất bản
  phien_ban?: string; //Phiên bản
  the_loai?: string; //Thể loại
  loai_sac?: string; //Loại sách
  is_video?: string; //có video
}
