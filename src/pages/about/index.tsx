'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import styles from './about.module.scss';

const AboutPage: FC = () => {
  return (
    <motion.div animate={{ opacity: 1 }} className={styles.about} initial={{ opacity: 0 }}>
      <h1 className={styles.title}> this is about page</h1>
    </motion.div>
  );
};

export default AboutPage;
