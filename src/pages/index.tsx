import NameSection from '../components/name/name';
import { FULL_NAME, ROLE } from '../utils/constants';

import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={styles.content}>
      <NameSection fullName={FULL_NAME} role={ROLE} />
    </main>
  );
}
