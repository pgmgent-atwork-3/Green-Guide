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
  app.use((req, res, next) => {
    if (req.headers.origin) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
  });
  await app.listen(3001);
}

bootstrap();
