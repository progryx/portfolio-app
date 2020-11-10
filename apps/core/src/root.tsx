import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { store } from '@reducers/store';
import { ROUTES_MAP } from '@src/constants';

import { Layout } from './components';
import { MainPage } from './pages/MainPage';
import { ProjectsPage } from './pages/ProjectsPage';

/** APPLICATIONS */
const Timer = React.lazy(() => import('timer/TimerApp'));
const TaskDashboard = React.lazy(() => import('dashboard/TaskDashboard'));
const UsersTable = React.lazy(() => import('users/UsersTable'));

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
            <Route path={ROUTES_MAP.timer} exact>
              <Timer />
            </Route>
            <Route path={ROUTES_MAP.taskDashboard} exact>
              <TaskDashboard />
            </Route>
            <Route path={ROUTES_MAP.usersTable} exact>
              <UsersTable />
            </Route>
          </Switch>
        </Layout>
      </Provider>
    </React.Suspense>
  );
};
