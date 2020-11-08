import React from 'react';
import { Provider } from 'react-redux';

import { useToast } from '@hooks/useToast';
import { Grid } from '@material-ui/core';
import { Layout } from '@src/components';
import { store } from '@src/reducers/store';

import { Content } from './components/Content';
import { PersonalInfo } from './components/PersonalInfo';

const Page: React.FC = () => {
  const toast = useToast();

  return (
    <>
      <Grid container alignItems="center">
        <PersonalInfo />
        <Content />
      </Grid>
      {toast}
    </>
  );
};

export const MainPage: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Page />
      </Layout>
    </Provider>
  );
};
