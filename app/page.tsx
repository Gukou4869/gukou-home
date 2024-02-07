'use client';

import { motion } from 'framer-motion';
import { FC, useState } from 'react';

import NavBackground from './components/navBackground';
import styles from './home.module.scss';
import { FULL_NAME } from './utils/constants';
import { PageType } from './utils/type';

const HomeSection: FC = () => {
  return (
    <motion.div className={styles.content} exit={{ x: 1000 }}>
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
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <motion.div className={styles.content} exit={{ x: 1000 }}>
      <h1>About Section</h1>
    </motion.div>
  );
};

const ArticleSection = () => {
  return (
    <motion.div className={styles.content} exit={{ x: 1000 }}>
      <h1>Article Section</h1>
    </motion.div>
  );
};

const contentObj: Record<PageType, React.ReactNode> = {
  home: <HomeSection />,
  about: <AboutSection />,
  articles: <ArticleSection />,
};

const pages: PageType[] = ['about', 'home', 'articles'];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(1); // 初期スライドインデックス

  const slideLeft = () => {
    setCurrentIndex(currentIndex === 0 ? pages.length - 1 : currentIndex - 1);
  };

  const slideRight = () => {
    setCurrentIndex(currentIndex === pages.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <main className={styles.mainWrap}>
      <NavBackground currentPage="home" slideLeft={slideLeft} slideRight={slideRight} />
      <div className={styles.slider}>
        <motion.div
          animate={{ x: `-${currentIndex * 100}%` }}
          className={styles.slides}
          initial={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {pages.map((page, index) => (
            <motion.div className={styles.slide} key={index}>
              {contentObj[page]}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
