import { Column, Entity } from 'typeorm';
import { AnimalType } from '../../domain/enum/animal-type.enum';
import { IPet } from '../../domain/model/pet.model';
import { EntityBase } from './base.entity';
@Entity()
export class Pet extends EntityBase implements IPet {
  @Column()
  name: string;

  @Column({ type: 'enum', enum: AnimalType, nullable: true })
  animal: AnimalType;

  @Column({ type: Number })
  age: number;
}
