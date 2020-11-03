import React from 'react';

import { TextField, TextFieldProps } from '@material-ui/core';
import { isTruthy } from '@portfolio-app/utils-lib';
import { Validation } from '@src/utilities';
import { Field, FieldProps } from 'formik';

type CreateTextField<FormKeysType> = {
  name: FormKeysType;
  variant: TextFieldProps['variant'];
  label: string;
  validate?: (value: string) => Validation;
  className?: string;
  rows?: TextFieldProps['rows'];
  isMultiline?: TextFieldProps['multiline'];
};

export const createTextField = <FormKeys extends string>({
  name,
  validate,
  label,
  className,
  isMultiline,
  rows,
  variant,
}: CreateTextField<FormKeys>) => (
  <Field name={name} validate={validate}>
    {({ meta, field }: FieldProps) => {
      const hasError = isTruthy(meta.error);
      return (
        <>
          <TextField
            {...field}
            error={hasError}
            label={label}
            rows={rows}
            multiline={isMultiline}
            className={className}
            variant={variant}
            helperText={meta.error}
          />
        </>
      );
    }}
  </Field>
);
