import { isNotNil } from '@portfolio-app/utilities';

export const isValidEmail = (email: string) => {
  return isNotNil(
    email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  );
};
