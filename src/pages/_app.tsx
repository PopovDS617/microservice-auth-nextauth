import { Session } from 'next-auth';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import Layout from '../components/Layout';
import { Provider } from 'next-auth/client';

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
