'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

import { setPageState } from '@/src/store/slice/pageSlice';
import { useAppDispatch, useAppSelector } from '@/src/store/store';
import { EMAIL_ADDRESS } from '@/src/utils/constants';

import styles from './nav.module.scss';

interface NavBackgroundProps {
  // children: React.ReactNode;
  // currentPage: PageType;
  // onSelectAbout: () => void;
  // onSelectArticles: () => void;
  // setCurrentContent: Dispatch<SetStateAction<PageType>>;
}

const NavBackground: React.FC<NavBackgroundProps> = () => {
  const pageState = useAppSelector((state) => state.page.pageState);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSelectAbout = () => {
    router.push('/about');
    dispatch(setPageState(pageState === 'home' ? 'about' : 'home'));
  };

  const onSelectArticles = () => {
    router.push('/home');
    dispatch(setPageState(pageState === 'home' ? 'articles' : 'home'));
  };

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={styles.nav}
      initial={{ opacity: 0, y: -15 }}
      transition={{ duration: 2.5, delay: 1.5 }}
    >
      <div className={styles.navLeft}>
        <div className={styles.navAboutWrapper}>
          <h3 className={styles.navAbout} onClick={onSelectAbout}>
            {pageState === 'about' ? 'Close' : 'About'}
          </h3>
        </div>
      </div>
      <div className={styles.navRight}>
        <h3 className={styles.navAbout} onClick={onSelectArticles}>
          {pageState === 'articles' ? 'Close' : 'Articles'}
        </h3>
      </div>
      <div className={styles.navBottom}>
        <div className={styles.navAboutWrapper}>
          <h3 className={styles.navAbout}>
            <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBackground;
