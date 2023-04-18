import { Controller, Get, HttpStatus } from '@nestjs/common';
import { IPet } from '../../domain/model/pet.model';
import { IPetService } from '../../domain/service/pet.service';
import { PetPresenter } from './presenter/pet.presenter';
import { StatusMessagePresenter } from './presenter/status-message.presenter';

@Controller('pets')
export class PetController {
  constructor(private petService: IPetService) {}
  @Get()
  async getAllPets() {
    const pets: IPet[] = await this.petService.getAllPets();
    const data = pets.map((pet) => new PetPresenter(pet));
    return new StatusMessagePresenter<PetPresenter[]>(
      HttpStatus.OK,
      'Success',
      data,
    );
  }
}
