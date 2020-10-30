import React from 'react';

import { Box, Grid, Typography } from '@material-ui/core';
import { ContactForm } from '@src/components';

export const ContactMe: React.FC = () => {
  return (
    <Box component="div" display="flex" flexDirection="column">
      <Typography variant="h4">Send me a message!</Typography>

      <Grid container>
        <Grid item xs={4} alignItems="center">
          <Box p={1}>
            <Typography align="justify">
              Are you going to create a greate app? I would like to help you with it!
            </Typography>
          </Box>
          <Box p={1}>
            <Typography align="justify">
              Just send me a message and i will contact you ASAP. Thank you ;)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};
