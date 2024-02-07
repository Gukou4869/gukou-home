'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import NavBackground from './components/navBackground';
import styles from './home.module.scss';
import { FULL_NAME } from './utils/constants';
import { PageType } from './utils/type';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  return (
    <main className={styles.mainWrap}>
      <NavBackground currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <motion.h1
        animate={{ y: 0, opacity: 1 }}
        className={styles.name}
        initial={{
          y: -15,
          opacity: 0,
        }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        {FULL_NAME}
      </motion.h1>
      <motion.span
        animate={{ y: 0, opacity: 1 }}
        className={styles.role}
        initial={{
          y: -15,
          opacity: 0,
        }}
        transition={{ duration: 3, delay: 1 }}
      >
        Frontend Developer
      </motion.span>
    </main>
  );
}
