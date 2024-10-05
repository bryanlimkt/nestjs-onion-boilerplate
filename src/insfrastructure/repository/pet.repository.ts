import { Injectable } from '@nestjs/common';
import { IPetsRepository } from '../../domain/repository/pet-repository.interface';
import { Pet } from '../entity/pet.entity';
import { GenericRepository } from './generic-repository';

@Injectable()
export class PetsRepository
  extends GenericRepository<Pet>(Pet)
  implements IPetsRepository {}
