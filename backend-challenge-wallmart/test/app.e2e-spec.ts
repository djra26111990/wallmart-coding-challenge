import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import AppModule from '../src/app.module';
import ProductController from '../src/infraestructure/web/controllers/product.controller';
import GetProductsUseCase from '../src/application/use_cases/getProducts.usecase';

jest.setTimeout(30000);

describe('Products mock (e2e)', () => {
  let app: INestApplication;

  const mockProducts = [
    {
      id: 1,
      brand: 'qweewq',
      description: 'oawiad osaops',
      price: 100000,
      image: 'http://product.com/the-product-1',
    },
    {
      id: 2,
      brand: 'dsaasd',
      description: 'oawiad osaops',
      price: 100000,
      image: 'http://product.com/the-product-1',
    },
  ];
  const mockProductRepository = {
    handler: jest.fn().mockImplementation(() => Promise.resolve(mockProducts)),
  };

  const endpoint = '/api/v1/products';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [GetProductsUseCase],
      imports: [AppModule],
    })
      .overrideProvider(GetProductsUseCase)
      .useValue(mockProductRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', async () => {
    return await request(app.getHttpServer())
      .get(endpoint)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(mockProducts);
  });

  afterAll(async () => {
    await app.close();
  });
});
