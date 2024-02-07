import { motion } from 'framer-motion';
import React from 'react';

import { EMAIL_ADDRESS } from '@/app/utils/constants';
import { PageType } from '@/app/utils/type';

import styles from './nav.module.scss';

interface NavBackgroundProps {
  currentPage: PageType;
  slideLeft: () => void;
  slideRight: () => void;
}

const NavBackground: React.FC<NavBackgroundProps> = ({ currentPage, slideLeft, slideRight }) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={styles.nav}
      initial={{ opacity: 0, y: -15 }}
      transition={{ duration: 2.5, delay: 1.5 }}
    >
      <div className={styles.navLeft}>
        <div className={styles.navAboutWrapper}>
          <h3 className={styles.navAbout} onClick={slideLeft}>
            {currentPage === 'about' ? 'Close' : 'About'}
          </h3>
        </div>
      </div>
      <div className={styles.navRight}>
        <h3 className={styles.navAbout} onClick={slideRight}>
          {currentPage === 'articles' ? 'Close' : 'Articles'}
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
