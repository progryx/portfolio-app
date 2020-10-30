import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { Box, Button, FormControl, Grid, Typography, TypographyTypeMap } from '@material-ui/core';
import { GOOGLE_API_KEY } from '@src/constants';
import { GetFormKeys, validation } from '@src/utilities';
import cn from 'classnames';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';

import styles from './styles.scss';
import { createTextField } from './FormItem';

type FormLayoutTypes = 'inline' | 'basic';

type Props = {
  withSpacings?: boolean;
  formHeading?: string;
  formHeadingType?: TypographyTypeMap['props']['variant'];
  formLaylout?: FormLayoutTypes;
  messageRows?: number;
  formClassName?: string;
};

export type ContactFormFields = {
  firstName: string;
  email: string;
  message: string;
};

type ContactFormValues = GetFormKeys<ContactFormFields>;

const initialFormValues: ContactFormFields = {
  firstName: '',
  email: '',
  message: '',
};

const FormControls: React.FC<{
  capchaCheckHandler: () => void;
  isDisabledSubmit: boolean;
}> = ({ capchaCheckHandler, isDisabledSubmit }) => {
  return (
    <Grid container xs={12}>
      <Grid item>
        <Box m={1}>
          <ReCAPTCHA sitekey={GOOGLE_API_KEY} size="normal" onChange={capchaCheckHandler} />
        </Box>
      </Grid>
      <Grid item>
        <Box ml={1}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="large"
            disabled={isDisabledSubmit}
          >
            Send message
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export const ContactForm: React.FC<Props> = ({
  withSpacings = true,
  formHeading,
  formHeadingType = 'body1',
  formLaylout = 'basic',
  messageRows = 5,
  formClassName,
}) => {
  const isBasicLayout = formLaylout === 'basic';

  const [isDisabledSubmit, setIsDisabledSubmit] = React.useState(true);

  const capchaCheckHandler = () => setIsDisabledSubmit(false);

  const handleSubmitForm = async ({ email, firstName, message }: typeof initialFormValues) => {
    emailjs
      .send(
        'progryx-web-google-mail',
        'template_f97pyh9',
        { clientName: firstName, clientEmailAdress: email, clientMessage: message },
        'user_plvvPqDqUxCIvknzdbbPK'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <Box p={withSpacings && 1} m={withSpacings && 1}>
      {formHeading && <Typography variant={formHeadingType}>{formHeading}</Typography>}
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmitForm}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormControl className={cn(formClassName, styles.contactForm)}>
              <Grid container>
                <Grid item xs={isBasicLayout ? 5 : 12}>
                  <Box m={1}>
                    {createTextField<ContactFormValues>({
                      name: 'firstName',
                      validate: validation.firstNameRequired,
                      label: 'Your name',
                      variant: 'outlined',
                      className: styles.contactForm__inputText,
                    })}
                  </Box>
                  <Box m={1}>
                    {createTextField<ContactFormValues>({
                      name: 'email',
                      validate: validation.emailRequired,
                      label: 'Your e-mail',
                      variant: 'outlined',
                      className: styles.contactForm__inputText,
                    })}
                  </Box>
                  {isBasicLayout && (
                    <FormControls
                      capchaCheckHandler={capchaCheckHandler}
                      isDisabledSubmit={isDisabledSubmit}
                    />
                  )}
                </Grid>
                <Grid item xs={isBasicLayout ? 7 : 12}>
                  <Box m={1}>
                    {createTextField<ContactFormValues>({
                      name: 'message',
                      validate: validation.messageRequired,
                      label: 'Your message',
                      rows: messageRows,
                      isMultiline: true,
                      variant: 'outlined',
                      className: styles.contactForm__inputText,
                    })}
                  </Box>
                </Grid>
              </Grid>
              {!isBasicLayout && (
                <FormControls
                  capchaCheckHandler={capchaCheckHandler}
                  isDisabledSubmit={isDisabledSubmit}
                />
              )}
            </FormControl>
          </form>
        )}
      </Formik>
    </Box>
  );
};
