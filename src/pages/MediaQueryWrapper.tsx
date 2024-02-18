import { FC } from 'react';

import { useMediaQuery } from '../hooks/useMediaQuery';
import { useAppSelector } from '../store/store';

interface MediaQueryWrapperProps {
  children: React.ReactNode;
}

const MediaQueryWrapper: FC<MediaQueryWrapperProps> = ({ children }) => {
  // update media query
  useMediaQuery();

  const mq = useAppSelector((state) => state.mq);

  console.log(mq, 'media query');

  return <div id="media query wrapper">{children}</div>;
};

export default MediaQueryWrapper;
