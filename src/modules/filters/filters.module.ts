import { Module } from '@nestjs/common';
import { FiltersController } from './filters.controller';
import { FiltersService } from './filters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FiltersModel } from 'src/models/filters.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'filters', schema: FiltersModel }]),
  ],
  controllers: [FiltersController],
  providers: [FiltersService],
})
export class FiltersModule {}
