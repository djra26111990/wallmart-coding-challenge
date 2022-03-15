import Product from '../model/product';

export interface ProductRepository {
  getAll(_filter: string | number): Promise<Product[]>;
}
