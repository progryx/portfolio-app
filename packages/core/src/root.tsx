import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ROUTES_MAP } from '@src/constants';
import { store } from '@src/store';

import { Layout } from './components';
import { MainPage } from './pages/MainPage';
import { ProjectsPage } from './pages/ProjectsPage';

export const Root: React.FC = () => {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path={ROUTES_MAP.main}>
              <MainPage />
            </Route>
            <Route exact path={ROUTES_MAP.projects}>
              <ProjectsPage />
            </Route>
          </Switch>
        </Layout>
      </Provider>
    </React.Suspense>
  );
};
