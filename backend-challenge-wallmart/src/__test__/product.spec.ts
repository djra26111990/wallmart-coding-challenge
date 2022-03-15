import Product from 'src/domain/model/product';
import { productNotPalindrome, productPalindrome } from './product.mock';

describe('Product model', () => {
  const productMockNotPalindrome = new Product(
    productNotPalindrome.id,
    productNotPalindrome.brand,
    productNotPalindrome.description,
    productNotPalindrome.image,
    productNotPalindrome.price,
  );

  const productMockPalindrome = new Product(
    productPalindrome.id,
    productPalindrome.brand,
    productPalindrome.description,
    productPalindrome.image,
    productPalindrome.price,
  );

  describe('Product not palindrome', () => {
    it('should match the new productMockNotPalindrome with productNotPalindrome', () => {
      expect(productMockNotPalindrome).toMatchObject(productNotPalindrome);
    });

    it('should not be a palindrome', () => {
      productMockNotPalindrome.isBrandPalindrome(
        productMockNotPalindrome.brand,
      );
      expect(productMockNotPalindrome.isPalindrome).toBe(false);
    });

    it('should not have discount', () => {
      productMockNotPalindrome.setDiscount(productMockNotPalindrome.price);
      expect(productMockNotPalindrome.discountPrice).toBe(0);
    });
  });

  describe('Product palindrome', () => {
    it('should match the new productMockPalindrome with productPalindrome', () => {
      expect(productMockPalindrome).toMatchObject(productPalindrome);
    });

    it('should be a palindrome', () => {
      productMockPalindrome.isBrandPalindrome(productMockPalindrome.brand);
      expect(productMockPalindrome.isPalindrome).toBe(true);
    });

    it('should have discount', () => {
      productMockPalindrome.setDiscount(productMockPalindrome.price);
      expect(productMockPalindrome.discountPrice).toBeGreaterThan(0);
    });
  });
});
