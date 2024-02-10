import Head from 'next/head';

import Navigation from '../components/navigation';
import ReduxProvider from '../store/reduxProvider';

import styles from './home.module.scss';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Head>
        <title>Shota Taniguchi</title>
      </Head>
      <ReduxProvider>
        <Navigation />
        <div className={styles.mainWrap}>
          <Component {...pageProps} key={router.pathname} />
        </div>
      </ReduxProvider>
    </div>
  );
}
