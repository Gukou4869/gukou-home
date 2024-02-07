import NavBackground from './components/navBackground';
import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={styles.mainWrap}>
      <h1 className={styles.name}>Shota Taniguchi</h1>
      <span className={styles.role}>Frontend Developer</span>
      <NavBackground />
    </main>
  );
}
