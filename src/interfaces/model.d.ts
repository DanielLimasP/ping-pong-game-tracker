export interface TModel<T> {
  find: (id: string) => Promise<T | undefined>;
  read: () => Promise<T[]>;
  save: (data: T) => Promise<void>;
  delete: (data: string) => Promise<T[]>;
}
