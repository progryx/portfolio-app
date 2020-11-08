import Head from 'next/head';

const NotFound = () => {
  return (
    <div className="container">
      <Head>
        <title>Core app</title>
        <link rel="icon" href="/favico.ico" />
      </Head>

      <main>
        <h2>404</h2>
      </main>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default NotFound;
