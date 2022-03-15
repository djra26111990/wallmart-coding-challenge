import Product from '../../domain/model/product';
import { Optional } from 'typescript-optional';
import { ProductEntity } from '../../infraestructure/adapters/repository/entity/product.entity';

export default class ProductMapper {
  public static toDomain(productEntity: ProductEntity): Optional<Product> {
    if (!productEntity) {
      return Optional.empty<Product>();
    }
    const product = new Product(
      productEntity.id,
      productEntity.brand,
      productEntity.description,
      productEntity.image,
      productEntity.price,
    );

    const DISCOUNT = 50;

    product.setPorcentageDiscount(DISCOUNT);

    product.isBrandPalindrome(productEntity.brand);

    product.setDiscount(productEntity.price);

    return Optional.of(product);
  }

  public static toDomains(productsEntity: ProductEntity[]): Product[] {
    const products = new Array<Product>();
    productsEntity.forEach((productEntity) => {
      const product = this.toDomain(productEntity);
      products.push(product.get());
    });
    return products;
  }
}
