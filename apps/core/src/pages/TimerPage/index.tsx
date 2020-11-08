import React from 'react';
import { Provider } from 'react-redux';

import { Layout } from '@src/components';
import { store } from '@src/reducers/store';

const Timer = (await import('timer/TimerApp')).default;

export const TimerPage: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Timer />
      </Layout>
    </Provider>
  );
};
