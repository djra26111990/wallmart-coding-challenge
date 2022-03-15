import { Inject, Injectable } from '@nestjs/common';
import Product from '../../domain/model/product';
import { ProductRepository } from '../../domain/ports/product.repository';

@Injectable()
export default class GetProductsUseCase {
  constructor(
    @Inject('ProductRepository')
    private productRepository: ProductRepository,
  ) {}
  public handler(_filter: string | number): Promise<Product[]> {
    return this.productRepository.getAll(_filter);
  }
}
