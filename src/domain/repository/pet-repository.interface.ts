import { IPet } from '../model/pet.model';
import { IGenericRepository } from './generic-repository.interface';

export interface IPetsRepository extends IGenericRepository<IPet> {}
