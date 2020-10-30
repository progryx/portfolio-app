import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from './components';
import { ROUTES_MAP } from './constants/routesMap';
import { MainPage } from './pages/MainPage';
import { ProjectsPage } from './pages/ProjectsPage';

export const Root: React.FC = () => {
  return (
    <React.Suspense fallback={'Loading...'}>
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
    </React.Suspense>
  );
};
