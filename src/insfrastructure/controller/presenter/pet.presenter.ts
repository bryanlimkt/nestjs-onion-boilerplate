import { AnimalType } from '../../../domain/enum/animal-type.enum';
import { IPet } from '../../../domain/model/pet.model';

export class PetPresenter {
  id: string;
  name: string;
  animal: AnimalType;
  age: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(pet: IPet) {
    this.id = pet.id;
    this.name = pet.name;
    this.animal = pet.animal;
    this.age = pet.age;
    this.createdAt = pet.createdAt;
    this.updatedAt = pet.updatedAt;
  }
}
