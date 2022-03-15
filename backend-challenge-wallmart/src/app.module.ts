import InfraestructureModule from './infraestructure/infraestructure.module';
import DomainModule from './domain/domain.module';
import { DynamicModule, Module } from '@nestjs/common';
import ApplicationModule from './application/application.module';

@Module({})
export default class AppModule {
  static foorRoot(setting: any): DynamicModule {
    return {
      module: AppModule,
      imports: [
        DomainModule,
        ApplicationModule,
        InfraestructureModule.foorRoot(setting),
      ],
    };
  }
}
