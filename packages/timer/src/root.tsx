import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TimerApp } from './App';

const MainPage = React.lazy(() => import('core/CoreApp'));

export function Root(): JSX.Element {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Switch>
        <Route exact path="/projects/timer" component={TimerApp} />
        <Route exact path="/" render={() => <MainPage />} />
      </Switch>
    </React.Suspense>
  );
}
