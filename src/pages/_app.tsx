import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

import NavBackground from '../components/navBackground';
import ReduxProvider from '../store/reduxProvider';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Head>
        <title>Shota Taniguchi</title>
      </Head>
      <ReduxProvider>
        <NavBackground />
        <AnimatePresence mode={'wait'}>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </ReduxProvider>
    </div>
  );
}
