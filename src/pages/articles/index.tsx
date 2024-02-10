import { motion } from 'framer-motion';
import { FC } from 'react';

import Card, { ICardProps } from '@/src/components/card/card';

import styles from './articles.module.scss';

const mockData: ICardProps[] = [
  { title: 'タイトル1', href: 'https://example.com/1', type: 'Qiita', category: ['プログラミング', 'React'] },
  { title: 'タイトル2', href: 'https://example.com/2', type: 'Zenn', category: ['フロントエンド', 'Vue'] },
  { title: 'タイトル1', href: 'https://example.com/1', type: 'Qiita', category: ['プログラミング', 'React'] },
  { title: 'タイトル2', href: 'https://example.com/2', type: 'Zenn', category: ['フロントエンド', 'Vue'] },
  { title: 'タイトル1', href: 'https://example.com/1', type: 'Qiita', category: ['プログラミング', 'React'] },
  { title: 'タイトル2', href: 'https://example.com/2', type: 'Zenn', category: ['フロントエンド', 'Vue'] },
  { title: 'タイトル1', href: 'https://example.com/1', type: 'Qiita', category: ['プログラミング', 'React'] },
];

const AboutPage: FC = () => {
  return (
    <motion.div animate={{ opacity: 1 }} className={styles.articles} initial={{ opacity: 0 }}>
      <div className={styles.grid}>
        {mockData.map((item, index) => (
          <Card category={item.category} href={item.href} key={index} title={item.title} type={item.type} />
        ))}
      </div>
    </motion.div>
  );
};

export default AboutPage;
