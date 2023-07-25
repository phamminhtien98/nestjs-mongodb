import { Injectable } from '@nestjs/common';
import { ProductsDto } from 'src/dto/product.dto';
import { IParamsConfig } from 'src/utils/paramConfig';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products } from 'src/models/products.model';
import { Categories } from 'src/models/categories.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('products')
    private readonly productsModel: Model<Products>,
    @InjectModel('categories')
    private readonly categoriesModel: Model<Categories>,
  ) {}
  async getAllProducts() {
    return await this.productsModel.find().exec();
  }
  async getProducts(params: IParamsConfig) {
    const filters = {};
    const andOption: any[] = [];

    //category
    let categoryId: Categories;
    if (params.cate_path) {
      categoryId = await this.categoriesModel.findOne({
        cate_path: params.cate_path,
      });
    }

    if (categoryId) {
      andOption.push({ category_ids: { $in: categoryId.id } });
    }

    //tìm kiếm
    if (params.q) {
      andOption.push({ name: params.q });
    }

    //địa điểm
    if (params.shop_warehouse_city_id) {
      andOption.push({
        shop_warehouse_city_id: {
          $in: params.shop_warehouse_city_id.split(','),
        },
      });
    }

    //phương thức vận chuyển
    const orPhuongThucVanChuyen: any[] = [];
    if (params.is_using_in_day) {
      orPhuongThucVanChuyen.push({ is_using_in_day: 1 });
    }
    if (params.is_using_instant) {
      orPhuongThucVanChuyen.push({ is_using_instant: 1 });
    }
    if (params.is_using_standard) {
      orPhuongThucVanChuyen.push({ is_using_standard: 1 });
    }
    if (orPhuongThucVanChuyen.length > 0) {
      andOption.push({ $or: orPhuongThucVanChuyen });
    }

    //loại shop
    const orLoaiShop: any[] = [];
    if (params.shop_type) {
      orLoaiShop.push({
        shop_badge_urls: { $elemMatch: { type: 'shop_mall' } },
      });
    }
    if (params.is_shop_plus) {
      orLoaiShop.push({
        shop_badge_urls: { $elemMatch: { type: 'shop_plus' } },
      });
    }
    if (params.is_self_shipping) {
      orLoaiShop.push({
        shop_badge_urls: { $elemMatch: { type: 'self_shipping' } },
      });
    }
    if (params.is_certified) {
      orLoaiShop.push({
        order_count: { $gte: 10 },
      });
    }
    if (orLoaiShop.length > 0) {
      andOption.push({ $or: orLoaiShop });
    }

    //ưu đãi
    const orUuDai: any[] = [];
    if (params.campaign_id) {
      if (params.campaign_id.split(',').includes('187')) {
        // lọc back to school (category đụng cụ học sinh)
        orUuDai.push({ category_ids: { $in: 2328 } });
      }
      if (params.campaign_id.split(',').includes('183')) {
        //khuyến mãi shop plus (thuộc shoplus và có giảm giá)
        orUuDai.push({
          $and: [
            { shop_badge_urls: { $elemMatch: { type: 'shop_plus' } } },
            { promotion_percentage: { $gt: 0 } },
          ],
        });
      }
    }
    if (params.is_mega_voucher) {
      //lọc mega voucher
      orUuDai.push({
        event_banners: { $elemMatch: { type: 'mega-voucher' } },
      });
    }
    if (params.is_flash_sale) {
      //lọc flash sale
      orUuDai.push({
        event_banners: { $elemMatch: { type: 'flash-sale' } },
      });
    }
    if (params.is_pay_later) {
      //mua trước trả sau ()
      orUuDai.push({
        promotion_sub_message: { type: 'pay_later' },
      });
    }
    if (params.is_combo_discount) {
      //mua gói siêu hời ()
      orUuDai.push({
        event_banners: { $elemMatch: { type: 'combo_discount' } },
      });
    }
    if (params.is_quantity_discount) {
      //mua nhiều giảm giá ()
      orUuDai.push({
        event_banners: { $elemMatch: { type: 'quantity_discount' } },
      });
    }
    if (params.is_promotion) {
      //Khuyến mãi ()
      orUuDai.push({ is_in_promotion: true });
    }
    if (params.is_shipping_discount) {
      //free ship ()
      orUuDai.push({
        event_banners: { $elemMatch: { type: 'free-ship' } },
      });
    }
    if (params.promotion_app) {
      //Khuyến mãi app ()
      orUuDai.push({
        app_discount_percentage: { $gt: 0 },
      });
    }
    if (params.is_installment) {
      //trả góp 0% ()
      orUuDai.push({
        is_installment: true,
      });
    }
    if (orUuDai.length > 0) {
      andOption.push({ $or: orUuDai });
    }

    //khoảng giá
    const andKhoangGia: any[] = [];
    if (params.gtprice) {
      andKhoangGia.push({ final_price: { $gte: Number(params.gtprice) } });
    }
    if (params.ltprice) {
      andKhoangGia.push({ final_price: { $lte: Number(params.ltprice) } });
    }
    if (andKhoangGia.length > 0) {
      andOption.push({ $and: andKhoangGia });
    }

    //Đánh giá
    const andDanhGia: any[] = [];
    if (params.gte_rating_percent) {
      andDanhGia.push({
        rating_percent: { $gte: Number(params.gte_rating_percent) },
      });
    }
    if (params.lte_rating_percent) {
      andDanhGia.push({
        rating_percent: { $lte: Number(params.lte_rating_percent) },
      });
    }
    if (andDanhGia.length > 0) {
      andOption.push({ $and: andDanhGia });
    }

    //Loại đĩa
    if (params.loai_dia) {
      andOption.push({
        loai_dia: {
          $in: params.loai_dia.split(','),
        },
      });
    }

    //Loại sách
    if (params.loai_sac) {
      andOption.push({
        loai_sac: {
          $in: params.loai_sac.split(','),
        },
      });
    }

    //ngôn ngữ
    if (params.ngon_ngu) {
      andOption.push({
        ngon_ngu: {
          $in: params.ngon_ngu.split(','),
        },
      });
    }

    //Nhà xuất bản
    if (params.nha_xuat_ban) {
      andOption.push({
        nha_xuat_ban: {
          $in: params.nha_xuat_ban.split(','),
        },
      });
    }

    //phiên bản
    if (params.phien_ban) {
      andOption.push({
        phien_ban: {
          $in: params.phien_ban.split(','),
        },
      });
    }

    //thể loại
    if (params.the_loai) {
      andOption.push({
        the_loai: {
          $in: params.the_loai.split(','),
        },
      });
    }

    //tình trạng sách
    if (params.tinh_trang_sach) {
      andOption.push({
        tinh_trang_sach: {
          $in: params.tinh_trang_sach.split(','),
        },
      });
    }

    //xuất sứ
    if (params.xuat_xu) {
      andOption.push({
        xuat_xu: {
          $in: params.xuat_xu.split(','),
        },
      });
    }

    //có video
    if (params.is_video) {
      andOption.push({
        img_highlight_urls: {
          $elemMatch: { type: 'video' },
        },
      });
    }

    if (andOption.length > 0) {
      filters['$and'] = andOption;
    }
    return await this.productsModel.find(filters);
  }
  async insertProducts(product: ProductsDto) {
    return await new this.productsModel(product).save();
  }
}
