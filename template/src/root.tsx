import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TimerApp } from './App';

const MainPage = React.lazy(() => import('core/CoreApp'));

export const Root = (): JSX.Element => (
  <React.Suspense fallback={'Loading...'}>
    <Switch>
      <Route exact path="/projects/timer" component={TimerApp} />
      <Route exact path="/" render={() => <MainPage />} />
    </Switch>
  </React.Suspense>
);
