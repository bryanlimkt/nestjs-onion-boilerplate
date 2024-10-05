import { NestFactory } from '@nestjs/core';
import { AppModule } from './pet.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port: number = configService.get<number>('SERVER_PORT', 3000);
  await app.listen(port);
}
bootstrap();
