import { AnimalType } from '../../../domain/enum/animal-type.enum';
import { IPet } from '../../../domain/model/pet.model';
import { GenericPresenter } from './generic.presenter';

export class PetPresenter extends GenericPresenter<IPet> {
  id: string;
  name: string;
  animal: AnimalType;
  age: number;
  createdAt: Date;
  displayName: string;  // A property not present in IPet

  constructor(pet: IPet) {
    super(pet);
    this.displayName = `${pet.name} the ${pet.animal}`; // Initialise new property
  }
}
