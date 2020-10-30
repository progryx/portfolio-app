import React from 'react';

import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  TypographyTypeMap,
} from '@material-ui/core';
import cn from 'classnames';

import styles from './styles.scss';

type FormLayoutTypes = 'inline' | 'basic';

type Props = {
  withSpacings?: boolean;
  formHeading?: string;
  formHeadingType?: TypographyTypeMap['props']['variant'];
  formLaylout?: FormLayoutTypes;
  messageRows?: number;
  formClassName?: string;
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

  return (
    <Box p={withSpacings && 1} m={withSpacings && 1}>
      {formHeading && <Typography variant={formHeadingType}>{formHeading}</Typography>}
      <form>
        <FormControl className={cn(formClassName, styles.contactForm)}>
          <Grid container>
            <Grid item xs={isBasicLayout ? 4 : 12}>
              <Box m={1} p={1}>
                <TextField
                  id="standard-basic"
                  label="Your name"
                  className={styles.contactForm__inputText}
                  variant="outlined"
                />
              </Box>
              <Box m={1} p={1}>
                <TextField
                  id="standard-basic"
                  label="Your e-mail"
                  className={styles.contactForm__inputText}
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={isBasicLayout ? 8 : 12}>
              <Box m={1} p={1}>
                <TextField
                  className={styles.contactForm__inputText}
                  id="outlined-multiline-static"
                  label="Your message"
                  multiline
                  rows={messageRows}
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box m={1} p={1}>
              <Button variant="contained" color="primary" size="large">
                Send message
              </Button>
            </Box>
          </Grid>
        </FormControl>
      </form>
    </Box>
  );
};
