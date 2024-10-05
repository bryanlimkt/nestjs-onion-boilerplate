import { IPet } from '../model/pet.model';
import { IGenericRepository } from './generic-repository.interface';

export type IPetsRepository = IGenericRepository<IPet>;
