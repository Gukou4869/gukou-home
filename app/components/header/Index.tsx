import { Home } from 'lucide-react';
import { FC } from 'react';

import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Home size={20} strokeWidth={2} />
      Header
    </header>
  );
};

export default Header;
