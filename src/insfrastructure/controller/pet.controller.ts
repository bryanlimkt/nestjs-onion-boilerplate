import { Controller, Get } from '@nestjs/common';
import { IPet } from '../../domain/model/pet.model';
import { IPetService } from '../../domain/service/pet.service.interface';
import { PetPresenter } from './presenter/pet.presenter';
import { StatusMessagePresenter } from './presenter/status-message.presenter';
import { ResponseMessage } from '../../domain/enum/response-message.enum';
import { ResponseStatus } from '../../domain/enum/response-status.enum';

@Controller('pets')
export class PetController {
  constructor(private petService: IPetService) {}

  @Get()
  async getAllPets() {
    const pets: IPet[] = await this.petService.findAll();
    const data = pets.map((pet) => new PetPresenter(pet));
    return new StatusMessagePresenter<PetPresenter[]>(
      ResponseStatus.SUCCESS,
      ResponseMessage.SUCCESS,
      data,
    );
  }
}
