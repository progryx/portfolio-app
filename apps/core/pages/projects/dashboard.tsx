import { DashboardPage } from '@src/pages';
import Head from 'next/head';

// eslint-disable-next-line import/no-default-export
export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DashboardPage />
      </main>
    </div>
  );
}
