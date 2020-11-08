import { TimerApp } from '@src/App';
import Head from 'next/head';

const Timer = () => {
  return (
    <div className="container">
      <Head>
        <title>Timer app</title>
        <link rel="icon" href="/favico.ico" />
      </Head>

      <main>
        <TimerApp />
      </main>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Timer;
