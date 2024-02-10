import Image from 'next/image';
import React, { FC } from 'react';

import QiitaImage from '@/public/qiita.webp';
import ZennImage from '@/public/zenn.png';
import { cx } from '@/src/utils/helper';

import styles from './card.module.scss'; // CSSモジュールのインポート

export interface ICardProps {
  category: string[];
  href: string;
  title: string;
  type: 'Qiita' | 'Zenn'; // 'Qiita' または 'Zenn' のみを許可
}

const Card: FC<ICardProps> = ({ title, href, type }) => {
  return (
    <a className={styles.card} href={href} target="_blank">
      <Image
        alt={type}
        className={cx(styles.logo, type === 'Qiita' && styles.qiita)}
        height={150}
        src={type === 'Qiita' ? QiitaImage : ZennImage}
        width={200}
      />
      <div className={styles.cardBottom}>
        <div className={styles.title}>{title}</div>
        {/* <div className={styles.category}>
          {category.map((cat, index) => (
            <span key={index}>{cat}</span>
          ))}
        </div> */}
      </div>
    </a>
  );
};

export default Card;
