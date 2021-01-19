import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// import * as helmet from 'helmet';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 4001,
    },
  }); // {cors: process.env.prod}

  // app.use(helmet());
  // app.use(csurf());

  // const options = new DocumentBuilder()
  //   .setTitle('Way of Developer')
  //   .setDescription('The Way of Developer API description')
  //   .setVersion('1.0')
  //   .addTag('wod')
  //   .build();

  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);

  (await app).listen(() => Logger.log('post listening'));
}
bootstrap();
