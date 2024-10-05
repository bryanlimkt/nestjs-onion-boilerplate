export interface IGenericRepository<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(item: T): Promise<T>;
  update(id: string, item: T | Partial<T>): Promise<T | null>;
  delete(id: string): Promise<boolean>;
}
