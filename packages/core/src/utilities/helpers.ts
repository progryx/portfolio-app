import { isNotNil } from '@portfolio-app/utils-lib';

export type PropertiesTypes<T> = T extends Record<string, infer U> ? U : never;

export type GetFormKeys<T> = Extract<keyof T, string>;

export const isValidEmail = (email: string) => {
  return isNotNil(
    email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  );
};
