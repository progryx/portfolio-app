import React from 'react';

import { Box, Grid, Typography } from '@material-ui/core';
import { ContactForm } from '@src/components';
import { useLocale } from '@src/hooks';

export const ContactMe: React.FC = React.memo(() => {
  const localedText = useLocale();

  return (
    <Box component="div" display="flex" flexDirection="column">
      <Typography variant="h4">{localedText('sendMeMessage')}</Typography>

      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} md={4}>
          <Box p={1}>
            <Typography align="justify">{localedText('sendMeMessageDesc1')}</Typography>
          </Box>
          <Box p={1}>
            <Typography align="justify">{localedText('sendMeMessageDesc2')}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <ContactForm messageRows={9} />
        </Grid>
      </Grid>
    </Box>
  );
});
