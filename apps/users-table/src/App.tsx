import React from 'react';
import { Provider } from 'react-redux';

import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { store } from '@reducers/store';

import { UsersTable } from './components';

export const Root: React.FC = () => (
  <Provider store={store}>
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Users table</Typography>
        </Toolbar>
      </AppBar>
      <UsersTable />
    </Container>
  </Provider>
);
