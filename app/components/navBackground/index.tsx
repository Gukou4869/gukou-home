import React from 'react';

import { EMAIL_ADDRESS } from '@/app/utils/constants';

import styles from './nav.module.scss';

const NavBackground: React.FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <div className={styles.navAboutWrapper}>
          <h3 className={styles.navAbout}>About</h3>
        </div>
      </div>
      <div className={styles.navRight}>
        <h3 className={styles.navAbout}>
          <a href="mailto:st11121.grtkmch@gmail.com">{EMAIL_ADDRESS}</a>
        </h3>
      </div>
      <div className={styles.navBottom}>
        <div className={styles.navAboutWrapper}>
          <h3 className={styles.navAbout}>Articles</h3>
        </div>
      </div>
    </div>
  );
};

export default NavBackground;
