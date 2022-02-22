/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TModel<T> {
  read: () => TModel<T>;
  readAll: () => TModel<T>;
  save: () => void;
  update: () => void;
  delete: () => void;
}
