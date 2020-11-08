import React from 'react';
import { Provider } from 'react-redux';

import { Layout } from '@src/components';
import { store } from '@src/reducers/store';

const DashboardApp = (await import('dashboard/TaskDashboard')).default;

export const DashboardPage: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <DashboardApp />
      </Layout>
    </Provider>
  );
};
