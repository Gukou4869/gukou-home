import { motion } from 'framer-motion';
import { FC } from 'react';

import styles from './articles.module.scss';

const AboutPage: FC = () => {
  return (
    <motion.div animate={{ opacity: 1 }} className={styles.articles} initial={{ opacity: 0 }}>
      <div className={styles.grid}>
        {/* {mockArticles.map((item, index) => (
          <Card category={item.category} href={item.href} key={index} title={item.title} type={item.type} />
        ))} */}
        The My Articles will be listed here soon!
      </div>
    </motion.div>
  );
};

export default AboutPage;
