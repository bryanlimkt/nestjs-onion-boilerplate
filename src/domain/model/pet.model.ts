import { AnimalType } from '../enum/animal-type.enum';
import { IBaseModel } from './base.model';

export interface IPet extends IBaseModel {
  name: string;
  animal: AnimalType;
  age: number;
}
