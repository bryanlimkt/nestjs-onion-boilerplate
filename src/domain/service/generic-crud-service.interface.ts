export abstract class IGenericCrudService<T> {
  abstract create(item: T): Promise<T>;
  abstract findAll(): Promise<T[]>;
  abstract findById(id: string): Promise<T>;
  abstract update(id: string, item: Partial<T> | T): Promise<T>;
  abstract delete(id: string): Promise<boolean>;
}
