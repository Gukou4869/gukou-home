import Head from 'next/head';

import ReduxProvider from '../store/reduxProvider';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Shota Taniguchi</title>
      </Head>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </div>
  );
}
