import { IPet } from '../model/pet.model';

export abstract class IPetService {
  abstract createPet(pet: IPet): Promise<IPet>;
  abstract getAllPets(): Promise<IPet[]>;
  abstract getPetById(id: string): Promise<IPet>;
  abstract updatePet(pet: Partial<IPet>): Promise<IPet>;
  abstract deletePet(id: string): Promise<IPet>;
}
