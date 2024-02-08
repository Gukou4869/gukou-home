'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import styles from './home.module.scss';
import { FULL_NAME } from './utils/constants';
import { PageType } from './utils/type';

export default function Home() {
  const [currentContent, setCurrentContent] = useState<PageType>('home');
  return (
    <motion.main className={styles.mainWrap} exit={{ background: 'red' }} key="home" transition={{ duration: 1 }}>
      <AnimatePresence mode="wait">
        {currentContent === 'home' && (
          <div className={styles.content}>
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              className={styles.name}
              exit={{
                y: -30,
                opacity: 0,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              initial={{
                y: -15,
                opacity: 0,
              }}
              key="name"
              transition={{ duration: 3, delay: 0.5 }}
            >
              {FULL_NAME}
            </motion.h1>
            <motion.span
              animate={{ y: 0, opacity: 1 }}
              className={styles.role}
              exit={{
                y: -30,
                opacity: 0,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              initial={{
                y: -15,
                opacity: 0,
              }}
              key="role"
              transition={{ duration: 3, delay: 1 }}
            >
              Frontend Developer
            </motion.span>
          </div>
        )}
      </AnimatePresence>
      <button
        onClick={() => {
          setCurrentContent('about');
        }}
      >
        test
      </button>
    </motion.main>
  );
}
