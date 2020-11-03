import { isTruthy } from '@portfolio-app/utils-lib';
import { ContactFormFields } from '@src/components';

import { isValidEmail, PropertiesTypes } from '..';

import { ERRORS } from './constants';

export type FieldValidatorType = (value: string) => string | undefined;

export type Validation = ReturnType<PropertiesTypes<typeof validation>>;

export const firstNameRequired = (value: string) => {
  if (!isTruthy(value)) {
    return ERRORS.firstNameRequired;
  }

  return undefined;
};

export const emailRequired = (value: string) => {
  if (!isTruthy(value)) {
    return ERRORS.emailRequired;
  }

  if (!isValidEmail(value)) {
    return ERRORS.invalidEmail;
  }

  return undefined;
};

export const messageRequired = (value: string) => {
  if (!isTruthy(value)) {
    return ERRORS.emailRequired;
  }

  return undefined;
};

export const validateContactForm = ({ email, firstName, message }: ContactFormFields) => {
  if (!isTruthy(email) && !isTruthy(firstName) && !isTruthy(message)) {
    return {
      email: ERRORS.emailRequired,
      firstName: ERRORS.firstNameRequired,
      message: ERRORS.messageRequired,
    };
  }

  if (!isTruthy(email)) {
    return { userName: ERRORS.emailRequired };
  }

  if (!isTruthy(firstName)) {
    return { password: ERRORS.firstNameRequired };
  }

  if (!isTruthy(message)) {
    return { password: ERRORS.messageRequired };
  }

  return {};
};

export const validation = {
  validateContactForm,
  messageRequired,
  emailRequired,
  firstNameRequired,
};
