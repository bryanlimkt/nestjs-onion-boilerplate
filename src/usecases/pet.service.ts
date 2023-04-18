import { IPet } from '../domain/model/pet.model';
import { IPetsRepository } from '../domain/repository/pet-repository.interface';
import { IPetService } from '../domain/service/pet.service';

export class PetService implements IPetService {
  constructor(private petsRepository: IPetsRepository) {}
  createPet(pet: IPet): Promise<IPet> {
    return this.petsRepository.createPet(pet);
  }
  getAllPets(): Promise<IPet[]> {
    return this.petsRepository.getAllPets();
  }
  getPetById(id: string): Promise<IPet> {
    return this.petsRepository.getPetById(id);
  }
  updatePet(pet: Partial<IPet>): Promise<IPet> {
    return this.petsRepository.updatePet(pet);
  }
  deletePet(id: string): Promise<IPet> {
    return this.petsRepository.deletePet(id);
  }
}
