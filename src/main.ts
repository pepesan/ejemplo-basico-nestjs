import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Ejemplo de API Rest')
    .setDescription('Descripción del api Rest')
    .setVersion('1.0').addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  // validar las peticiones
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
