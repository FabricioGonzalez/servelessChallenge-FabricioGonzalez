interface Repository {
  create<T>(param: T): Promise<T>;
  update<T>(id: string, param: T): Promise<T>;
  findOne<T>(id: string): Promise<T>;
  findAll<T>(): Promise<T[]>;
  delete<T>(id: string): Promise<T>;
}

export default Repository;
