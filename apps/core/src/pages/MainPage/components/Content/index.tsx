import React from 'react';

import { Box, Grid } from '@material-ui/core';

import { ContactMe } from '../ContactMe';
import { MyEducation } from '../MyEducation';
import { MyExperience } from '../MyExperience';
import { MySkills } from '../MySkills';

export const Content: React.FC = () => {
  return (
    <Grid container>
      <Grid item>
        <Box m={1}>
          <MySkills />
          <MyExperience />
          <MyEducation />
          <ContactMe />
        </Box>
      </Grid>
    </Grid>
  );
};
