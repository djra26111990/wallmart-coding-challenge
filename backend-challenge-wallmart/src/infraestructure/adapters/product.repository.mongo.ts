import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductRepository } from '../../domain/ports/product.repository';
import Product from '../../domain/model/product';
import { ProductEntity } from '../../infraestructure/adapters/repository/entity/product.entity';
import ProductMapper from '../mappers/product.mapper';

@Injectable()
export default class ProductRepositoryMongo implements ProductRepository {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<ProductEntity>,
  ) {}
  public async getAll(_filter: any): Promise<Product[]> {
    let filter: unknown;

    if (typeof _filter != 'undefined') {
      filter = {
        $or: [
          {
            id: isNaN(_filter) ? undefined : _filter,
          },
          { brand: typeof _filter === 'string' && _filter.length > 3 ? _filter : undefined },
          { description: new RegExp(_filter.toString(), 'i') },
        ],
      };
    }

    const products = await this.productModel.find(filter).exec();

    return ProductMapper.toDomains(products);
  }
}
