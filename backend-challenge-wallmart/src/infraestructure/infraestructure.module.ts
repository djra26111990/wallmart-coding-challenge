import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ApplicationModule from '../application/application.module';
import ProductSchema from './adapters/repository/schema/product.schema';
import ProductController from './web/controllers/product.controller';
import { ConfigModule } from './config.module';
import { ConfigService } from './config.service';
import { AppController } from './web/controllers/app.controller';

@Module({})
export default class InfraestructureModule {
  static foorRoot(setting: any): DynamicModule {
    return {
      module: InfraestructureModule,
      imports: [
        ApplicationModule,
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => ({
            uri: `${configService.get('MONGO_URI')}`,
          }),
          inject: [ConfigService],
        }),
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
      ],
      controllers: [ProductController, AppController],
    };
  }
}
