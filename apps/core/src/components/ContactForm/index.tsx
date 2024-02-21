import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { EN_LOCALE } from '@locales/en';
import { RU_LOCALE } from '@locales/ru';
import { Box, Button, CircularProgress, FormControl, Grid, Typography, TypographyTypeMap } from '@material-ui/core';
import { GetFormKeys } from '@portfolio-app/utilities';
import { coreActions, coreSelectors } from '@reducers/core';
import { useDispatch, useSelector } from '@reducers/store';
import { EMAIL_JS, GOOGLE_API_KEY } from '@src/constants';
import { useLocale, useWindowSize } from '@src/hooks';
import { validation } from '@src/utilities';
import cn from 'classnames';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';

import styles from './styles.scss';
import { createTextField } from './FormItem';

type Props = {
  withSpacings?: boolean;
  formHeading?: string;
  formHeadingType?: TypographyTypeMap['props']['variant'];
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
  isLoading: boolean;
}> = ({ capchaCheckHandler, isDisabledSubmit, isLoading }) => {
  const localedText = useLocale();

  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Box m={1}>
          <ReCAPTCHA sitekey={GOOGLE_API_KEY} size="normal" onChange={capchaCheckHandler} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box ml={1}>
          <Button
            variant="contained"
            startIcon={isLoading && <CircularProgress color="secondary" size={24} />}
            type="submit"
            color="primary"
            size="large"
            disabled={isDisabledSubmit || isLoading}
          >
            {localedText('formSubmitButtonText')}
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
  messageRows = 5,
  formClassName,
}) => {
  const [isDisabledSubmit, setIsDisabledSubmit] = React.useState(true);

  const [isLoading, setIsLoading] = React.useState(false);

  const localedText = useLocale();

  const dispatch = useDispatch();

  const isEnLanguage = useSelector(coreSelectors.isEnLanguage);

  const { isMobile, isTablet, isSmallDesktop } = useWindowSize();

  const isSmallResolution = isMobile || isTablet || isSmallDesktop;

  const captchaCheckHandler = () => setIsDisabledSubmit(false);
  const handleSubmitForm = async ({ email, firstName, message }: typeof initialFormValues) => {
    const payload = {
      clientName: firstName,
      clientEmailAdress: email,
      clientMessage: message,
    };

    setIsLoading(true);

    emailjs.send(EMAIL_JS.serviceId, EMAIL_JS.templateId, payload, EMAIL_JS.userId).then(
      () => {
        const message = isEnLanguage ? EN_LOCALE.messageSended : RU_LOCALE.messageSended;
        setIsLoading(false);
        dispatch(coreActions.setMessage({ message }));
      },
      () => {
        const message = isEnLanguage ? EN_LOCALE.messageSendFail : RU_LOCALE.messageSendFail;
        setIsLoading(false);
        dispatch(coreActions.setMessage({ message }));
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
                <Grid item xs={12} md={5}>
                  <Box m={1}>
                    {createTextField<ContactFormValues>({
                      name: 'firstName',
                      validate: validation.firstNameRequired,
                      label: localedText('formNameLabel'),
                      variant: 'outlined',
                      className: styles.contactForm__inputText,
                    })}
                  </Box>
                  <Box m={1}>
                    {createTextField<ContactFormValues>({
                      name: 'email',
                      validate: validation.emailRequired,
                      label: localedText('formEmailLabel'),
                      variant: 'outlined',
                      className: styles.contactForm__inputText,
                    })}
                  </Box>
                  {!isSmallResolution && (
                    <FormControls
                      isLoading={isLoading}
                      capchaCheckHandler={captchaCheckHandler}
                      isDisabledSubmit={isDisabledSubmit}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={7}>
                  <Box m={1}>
                    {createTextField<ContactFormValues>({
                      name: 'message',
                      validate: validation.messageRequired,
                      label: localedText('formMessageLabel'),
                      rows: messageRows,
                      isMultiline: true,
                      variant: 'outlined',
                      className: styles.contactForm__inputText,
                    })}
                  </Box>
                  {isSmallResolution && (
                    <FormControls
                      isLoading={isLoading}
                      capchaCheckHandler={captchaCheckHandler}
                      isDisabledSubmit={isDisabledSubmit}
                    />
                  )}
                </Grid>
              </Grid>
            </FormControl>
          </form>
        )}
      </Formik>
    </Box>
  );
};
