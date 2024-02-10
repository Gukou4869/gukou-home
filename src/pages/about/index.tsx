import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

import ReactImage from '@/public/react.webp';
import TypeScriptImage from '@/public/typescript.png';
import NameSection from '@/src/components/name/name';
import { BIO_TEXT, FULL_NAME, ROLE, linkItems } from '@/src/utils/constants';

import styles from './about.module.scss';

const AboutPage: FC = () => {
  return (
    <motion.div animate={{ opacity: 1 }} className={styles.about} initial={{ opacity: 0 }}>
      <NameSection fullName={FULL_NAME} role={ROLE} />
      <section className={styles.descriptionSection}>
        <h1>{BIO_TEXT}</h1>
      </section>
      <section style={{ display: 'flex', gap: 30 }}>
        <Image alt="TypeScript logo" height={100} src={TypeScriptImage} width={100} />
        <Image alt="React logo" height={100} src={ReactImage} width={100} />
      </section>
      <section className={styles.linksSection}>
        <ul className={styles.links}>
          {linkItems.map((item) => (
            <li className={styles.link} key={item.label}>
              <a href={item.href} rel="noopener noreferrer" target="_blank">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
};

export default AboutPage;
