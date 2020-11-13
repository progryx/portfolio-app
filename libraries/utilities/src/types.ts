export type PropertiesTypes<T> = T extends Record<string, infer U> ? U : never;

export type GetFormKeys<T> = Extract<keyof T, string>;

export type InferActionTypes<
  T extends {
    [key: string]: (...args: any[]) => unknown;
  }
> = ReturnType<PropertiesTypes<T>>;

export type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;