import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // {cors: process.env.prod}

  app.use(helmet());
  app.use(csurf());

  const options = new DocumentBuilder()
    .setTitle('Way of Developer')
    .setDescription('The Way of Developer API description')
    .setVersion('1.0')
    .addTag('wod')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
