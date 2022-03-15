import { Injectable } from '@nestjs/common';
import Product from '../../domain/model/product';
import ProductCommand from '../commands/Product.command';

@Injectable()
export class ProductFactory {
  public createProduct(productCommand: ProductCommand): Product {
    return new Product(
      productCommand.id,
      productCommand.brand,
      productCommand.description,
      productCommand.image,
      productCommand.price,
    );
  }
}
