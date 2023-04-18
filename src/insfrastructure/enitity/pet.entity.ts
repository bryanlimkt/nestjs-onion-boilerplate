import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { AnimalType } from '../../domain/enum/animal-type.enum';
import { IPet } from '../../domain/model/pet.model';

@Entity()
export class Pet implements IPet {
  @Column()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: AnimalType, nullable: true })
  animal: AnimalType;

  @Column({ type: Number })
  age: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
