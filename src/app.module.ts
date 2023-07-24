import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './modules/categories/categories.module';
import { FiltersModule } from './modules/filters/filters.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    CategoriesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MOGODB_URL),
    FiltersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
