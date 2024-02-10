import { useRouter } from 'next/router';

import { setPageState } from '@/src/store/slice/pageSlice';
import { useAppDispatch, useAppSelector } from '@/src/store/store';
import { cx } from '@/src/utils/helper';
import { PageType } from '@/src/utils/type';

import styles from './navigation.module.scss';

interface INavItem {
  path: string;
  title: PageType;
}

const NavItems: INavItem[] = [
  {
    path: '/',
    title: 'home',
  },
  {
    path: '/about',
    title: 'about',
  },
  {
    path: '/articles',
    title: 'articles',
  },
];

function capitalizeFirstLetter(text: string) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const Navigation = () => {
  const pageState = useAppSelector((state) => state.page.pageState);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleNavigation = async (navItem: INavItem) => {
    try {
      await router.push(navItem.path);
      dispatch(setPageState(navItem.title));
    } catch (error) {
      console.error('Failed to navigate:', error);
    }
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navs}>
        {NavItems.map((item) => {
          return (
            <li className={cx(styles.navItem, pageState === item.title && styles.active)} key={item.path}>
              <button
                type="button"
                onClick={() => {
                  void handleNavigation(item);
                }}
              >
                {capitalizeFirstLetter(item.title)}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
