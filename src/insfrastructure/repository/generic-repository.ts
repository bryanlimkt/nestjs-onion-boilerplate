import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { IGenericRepository } from '../../domain/repository/generic-repository.interface';
import { IBaseModel } from '../../domain/model/base.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Constructor } from '../../common/types/constructor.type';
import { Type } from '@nestjs/common';

export function GenericRepository<T extends IBaseModel>(
  entity: Constructor<T>,
): Type<IGenericRepository<T>> {
  class GenericRepositoryHost<T extends IBaseModel>
    implements IGenericRepository<T>
  {
    constructor(
      @InjectRepository(entity) readonly _repository: Repository<T>,
    ) {}

    async findById(id: string): Promise<T | null> {
      return this._repository.findOneBy({ id } as FindOptionsWhere<T>);
    }

    async findAll(): Promise<T[]> {
      return this._repository.find();
    }

    async create(item: T): Promise<T> {
      return await this._repository.save(item);
    }

    async update(id: string, item: T | Partial<T>): Promise<T> {
      await this._repository.save(item as DeepPartial<T>);
      return this._repository.findOneBy({ id } as FindOptionsWhere<T>);
    }

    async delete(id: string): Promise<boolean> {
      const result = await this._repository.delete(id);
      return result.affected !== 0;
    }
  }
  return GenericRepositoryHost;
}
