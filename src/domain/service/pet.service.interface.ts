import { IPet } from '../model/pet.model';
import { IGenericCrudService } from './generic-crud-service.interface';

export abstract class IPetService extends IGenericCrudService<IPet> {
  // Add your custom methods here
  // abstract someNewMethod(): any;
}
