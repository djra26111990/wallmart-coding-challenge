import { Controller, Get, HttpStatus, Res, Param } from '@nestjs/common';
import GetProductsUseCase from '../../../application/use_cases/getProducts.usecase';

@Controller('/api/v1/products')
export default class ProductController {
  constructor(private getProductsUseCase: GetProductsUseCase) {}

  @Get('/:filter?')
  public async getProducts(
    @Res() res,
    @Param('filter') _filter: string,
  ): Promise<any> {
    const products = await this.getProductsUseCase.handler(_filter);
    return res.status(HttpStatus.OK).json(products);
  }
}
