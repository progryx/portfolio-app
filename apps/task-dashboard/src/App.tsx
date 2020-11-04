import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';

import { AppBar, Container, Grid, Toolbar, Typography } from '@material-ui/core';

import { Dashboard } from '@components/Dashboard';

import css from './index.module.css';
import { store } from './reducers/store';

export const RootApp: React.FC = () => (
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <Container maxWidth="lg" className={css.main}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Task Dashboard</Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Dashboard />
        </Grid>
      </Container>
    </DndProvider>
  </Provider>
);
