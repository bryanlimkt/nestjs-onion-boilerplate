import { AnimalType } from '../enum/animal-type.enum';

export interface IPet {
  id: string;
  name: string;
  animal: AnimalType;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}
