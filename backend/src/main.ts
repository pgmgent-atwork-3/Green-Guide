import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

// somewhere in your initialization file

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.WEB_URL, process.env.MOBILE_URL],
    credentials: true,
  });
  app.use(cookieParser());
  await app.listen(3001);
}

bootstrap();
