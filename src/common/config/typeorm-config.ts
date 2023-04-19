import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    const options: TypeOrmModuleOptions = {
      type: 'postgres',
      schema: this.configService.get<string>('DB_SCHEMA'),
      host: this.configService.get<string>('DB_HOSTNAME'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      logging: this.configService.get<boolean>('TYPEORM_LOGGING'),
      entities: [this.configService.get<string>('TYPEORM_ENTITIES')],
      migrations: [this.configService.get<string>('TYPEORM_MIGRATIONS')],
      synchronize: false,
    };
    return options;
  }
}
