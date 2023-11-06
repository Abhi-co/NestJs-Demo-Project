/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
 // const app = await NestFactory.create(AppModule);
 const app = await NestFactory.create<NestExpressApplication>(AppModule);

 app.enableCors({
  origin: 'http://localhost:4200',  // Update with your Angular app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});


  await app.listen(5600);
}
bootstrap();
