// NameSection.jsx または NameSection.tsx（TypeScriptを使用している場合）

import { motion } from 'framer-motion';
import React from 'react';

import styles from './name.module.scss'; // スタイルのパスを適切に置き換えてください

const animationVariants = {
  initial: {
    transform: 'matrix(1, 0, 0, 1, 0, -60)',
    opacity: 0,
  },
  animate: {
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transform: 'matrix(1, 0, 0, 1, 0, -60)',
    transition: { ease: 'easeIn', duration: 0.5 },
  },
};

interface INameProps {
  fullName: string;
  role: string;
}

const NameSection = ({ fullName, role }: INameProps) => {
  return (
    <motion.section className={styles.nameSection}>
      <div className="overflow-hidden">
        <motion.h1
          animate="animate"
          className={styles.name}
          initial="initial"
          transition={{ delay: 0.75 }}
          variants={animationVariants}
        >
          {fullName}
        </motion.h1>
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            animate="animate"
            className={styles.role}
            initial="initial"
            transition={{ delay: 1.25, duration: 2 }}
            variants={animationVariants}
          >
            {role}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default NameSection;
