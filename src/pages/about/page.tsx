'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import styles from './about.module.scss';

const AboutPage: FC = () => {
  return (
    <motion.div animate={{ opacity: 1, background: 'red' }} className={styles.about} initial={{ opacity: 0 }}>
      this is about page
    </motion.div>
  );
};

export default AboutPage;
