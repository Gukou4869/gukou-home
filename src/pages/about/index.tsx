'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import { EMAIL_ADDRESS, FULL_NAME } from '@/src/utils/constants';

import styles from './about.module.scss';

const AboutPage: FC = () => {
  return (
    <motion.div animate={{ opacity: 1 }} className={styles.about} initial={{ opacity: 0 }}>
      <motion.section className={styles.nameSection}>
        <div className="overflow-hidden">
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
            transition={{ duration: 1, delay: 0.75 }}
          >
            {FULL_NAME}
          </motion.h1>
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
      </motion.section>
      <section className={styles.descriptionSection}>
        <h1>
          Born and raised in Kobe, I graduated from Kobe City University of Foreign Studies. I have more than two and a
          half years of experience in frontend development, primarily using React and TypeScript.
        </h1>
      </section>
      <section className={styles.linksSection}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="https://twitter.com/gukou_pro4869" target="_blank">
              X(twitter)
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/Gukou4869" target="_blank">
              github
            </a>
          </li>
          <li className={styles.link}>
            <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </li>
        </ul>
      </section>
    </motion.div>
  );
};

export default AboutPage;
