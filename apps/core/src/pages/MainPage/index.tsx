import React from 'react';

import { useToast } from '@hooks/useToast';
import { Grid } from '@material-ui/core';

import { Content } from './components/Content';
import { PersonalInfo } from './components/PersonalInfo';

export const MainPage: React.FC = () => {
  const toast = useToast();

  return (
    <>
      <Grid container alignItems="center" justify="center">
        <PersonalInfo />
        <Content />
      </Grid>
      {toast}
    </>
  );
};
