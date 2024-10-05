import { IPet } from '../domain/model/pet.model';
import { IPetsRepository } from '../domain/repository/pet-repository.interface';
import { IPetService } from '../domain/service/pet.service.interface';

export class PetService implements IPetService {
  constructor(private petsRepository: IPetsRepository) {}
  async create(item: IPet): Promise<IPet> {
    return this.petsRepository.create(item);
  }
  async findAll(): Promise<IPet[]> {
    return this.petsRepository.findAll();
  }
  async findById(id: string): Promise<IPet> {
    return this.petsRepository.findById(id);
  }
  async update(id: string, item: IPet | Partial<IPet>): Promise<IPet> {
    return this.petsRepository.update(id, item);
  }
  async delete(id: string): Promise<boolean> {
    return this.petsRepository.delete(id);
  }
}
