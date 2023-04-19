import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './common/config/typeorm-config';
import { IPetService } from './domain/service/pet.service';
import { PetController } from './insfrastructure/controller/pet.controller';
import { Pet } from './insfrastructure/enitity/pet.entity';
import { PetService } from './usecases/pet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pet]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      inject: [ConfigService],
    }),
  ],
  controllers: [PetController],
  providers: [{ provide: IPetService, useClass: PetService }],
})
export class AppModule {}
