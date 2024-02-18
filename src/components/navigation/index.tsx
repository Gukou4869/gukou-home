import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentMq = useAppSelector((state) => state.mq.size);
  const currentPath = router.asPath === '/' ? 'home' : (router.asPath.slice(1, router.asPath.length) as PageType);

  const handleNavigation = async (navItem: INavItem) => {
    try {
      await router.push(navItem.path);
    } catch (error) {
      console.error('Failed to navigate:', error);
    }
  };

  // set Current Page to redux store when refresh
  useEffect(() => {
    dispatch(setPageState(currentPath));
  }, [dispatch, router.asPath, currentPath]);

  return (
    <nav className={styles.navigation} data-current-mq={currentMq}>
      <ul className={styles.navs}>
        {NavItems.map((item) => {
          return (
            <li className={cx(styles.navItem, currentPath === item.title && styles.active)} key={item.path}>
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
