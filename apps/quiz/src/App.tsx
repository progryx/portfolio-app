import React from 'react';
import { Provider } from 'react-redux';

import { Container } from '@material-ui/core';
import { store } from '@reducers/store';

import { QuizPage } from './pages';

export const Root: React.FC = () => (
  <Provider store={store}>
    <Container maxWidth="md">
      <QuizPage />
    </Container>
  </Provider>
);
