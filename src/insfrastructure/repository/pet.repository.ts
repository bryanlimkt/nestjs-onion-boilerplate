import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPet } from '../../domain/model/pet.model';
import { IPetsRepository } from '../../domain/repository/pet-repository.interface';
import { Pet } from '../enitity/pet.entity';

@Injectable()
export class PetsRepository implements IPetsRepository {
  constructor(
    @InjectRepository(Pet) private readonly petsRepository: Repository<IPet>,
  ) {}
  getAllPets(): Promise<IPet[]> {
    return this.petsRepository.find();
  }
  getPetById(id: string): Promise<IPet> {
    return this.petsRepository.findOneByOrFail({ id: id });
  }
  updatePet(pet: Partial<IPet>): Promise<IPet> {
    const updatedPet = this.petsRepository.create(pet);
    return this.petsRepository.save(updatedPet);
  }
  async deletePet(id: string): Promise<IPet> {
    const deletePet = await this.getPetById(id);
    return this.petsRepository.remove(deletePet);
  }
  createPet(pet: IPet): Promise<IPet> {
    const newPet = this.petsRepository.create(pet);
    return this.petsRepository.save(newPet);
  }
}
