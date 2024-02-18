import Head from 'next/head';

import Navigation from '../components/navigation';
import ReduxProvider from '../store/reduxProvider';

import MediaQueryWrapper from './MediaQueryWrapper';
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
        <MediaQueryWrapper>
          <Navigation />
          <div className={styles.mainWrap}>
            <Component {...pageProps} key={router.pathname} />
          </div>
        </MediaQueryWrapper>
      </ReduxProvider>
    </div>
  );
}
