'use client';

import { motion } from 'framer-motion';

import { FULL_NAME } from '../utils/constants';

import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.mainWrap}>
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
            transition={{ duration: 2, delay: 1.25 }}
          >
            Frontend Developer
          </motion.div>
        </div>
      </div>
    </div>
  );
}
