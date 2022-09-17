import { Session } from 'next-auth';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
