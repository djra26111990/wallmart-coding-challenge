export default class Product {
  id: number;
  brand: string;
  description: string;
  image: string;
  price: number;
  discountPrice: number;
  porcentageDiscount: number;
  isPalindrome: boolean;

  constructor(
    id: number,
    brand: string,
    description: string,
    image: string,
    price: number,
  ) {
    this.id = id;
    this.brand = brand;
    this.description = description;
    this.image = image;
    this.price = price;
  }

  public getId(): number {
    return this.id;
  }

  public getBrand(): string {
    return this.brand;
  }

  public getDescription(): string {
    return this.description;
  }

  public getImage(): string {
    return this.image;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPorcentageDiscount(porcentageDiscount: number): number {
    return (this.porcentageDiscount = porcentageDiscount);
  }

  public isBrandPalindrome(brand: string): this {
    const compareBrand = brand.split('').reverse().join('');
    this.isPalindrome = brand.toLowerCase() === compareBrand.toLowerCase();
    return this;
  }

  public setDiscount(price: number): this {
    
    this.discountPrice = this.isPalindrome
      ? price - (price * this.porcentageDiscount) / 100
      : 0;
    return this;
  }
}
