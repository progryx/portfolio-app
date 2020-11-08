import { RootApp as DashboardApp } from '@src/App';
import Head from 'next/head';

const Dashboard = () => {
  return (
    <div className="container">
      <Head>
        <title>Timer app</title>
        <link rel="icon" href="/favico.ico" />
      </Head>

      <main>
        <DashboardApp />
      </main>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Dashboard;
