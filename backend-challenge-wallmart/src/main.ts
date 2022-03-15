import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import AppModule from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule.foorRoot({}));
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('Products')
    .setDescription('The promotion production API description')
    .setVersion('1.0')
    .addTag('Products')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(4000, '0.0.0.0');
  console.log(`🚀 Server started at ${await app.getUrl()}`);
}
bootstrap();
