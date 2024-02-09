'use client';

import { AnimatePresence, motion } from 'framer-motion';

import NavBackground from '../components/navBackground';
import { setPageState } from '../store/slice/pageSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { FULL_NAME } from '../utils/constants';

import styles from './home.module.scss';

export default function Home() {
  const pageState = useAppSelector((state) => state.page.pageState);
  const dispatch = useAppDispatch();

  const onSelectAbout = () => {
    dispatch(setPageState(pageState === 'home' ? 'about' : 'home'));
  };

  const onSelectArticles = () => {
    dispatch(setPageState(pageState === 'home' ? 'articles' : 'home'));
  };

  return (
    <NavBackground currentPage={pageState} onSelectAbout={onSelectAbout} onSelectArticles={onSelectArticles}>
      <main className={styles.mainWrap}>
        <AnimatePresence mode="wait">
          {pageState === 'home' && (
            <div className={styles.content}>
              <div style={{ overflow: 'hidden' }}>
                <motion.h1
                  animate={{ transform: 'matrix(1, 0, 0, 1, 0, 0)', opacity: 1 }}
                  className={styles.name}
                  exit={{
                    opacity: 0,
                    transform: 'matrix(1, 0, 0, 1, 0, -60)',
                    transition: {
                      ease: 'easeIn',
                      duration: 0.5,
                      delay: 0.6,
                    },
                  }}
                  initial={{
                    transform: 'matrix(1, 0, 0, 1, 0, -60)',
                    opacity: 0,
                  }}
                  key="name"
                  transition={{ duration: 2, delay: 0.75 }}
                >
                  {FULL_NAME}
                </motion.h1>
              </div>
              <div style={{ overflow: 'hidden', height: 'auto' }}>
                <motion.div
                  animate={{ transform: 'matrix(1, 0, 0, 1, 0, 0)', opacity: 1 }}
                  className={styles.role}
                  exit={{
                    opacity: 0,
                    transform: 'matrix(1, 0, 0, 1, 0, -60)',
                    transition: {
                      ease: 'easeIn',
                      duration: 0.5,
                      delay: 0.5,
                    },
                  }}
                  initial={{
                    transform: 'matrix(1, 0, 0, 1, 0, -60)',
                    opacity: 0,
                  }}
                  key="role"
                  transition={{ duration: 2, delay: 1.25 }}
                >
                  Frontend Developer
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </NavBackground>
  );
}
