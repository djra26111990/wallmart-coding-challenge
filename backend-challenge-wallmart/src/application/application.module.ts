import DomainModule from '../domain/domain.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import ProductSchema from '../infraestructure/adapters/repository/schema/product.schema';
import GetProductsUseCase from './use_cases/getProducts.usecase';
import { AppService } from '../application/use_cases/app.service';
import ProductRepositoryMongo from '../infraestructure/adapters/product.repository.mongo';

@Module({
  imports: [
    DomainModule,
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  providers: [
    GetProductsUseCase,
    AppService,
    {
      provide: 'ProductRepository',
      useClass: ProductRepositoryMongo,
    },
  ],
  exports: [GetProductsUseCase, AppService],
})
export default class ApplicationModule {}
