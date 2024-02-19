import { FC } from 'react';

import { useMediaQuery } from '../hooks/useMediaQuery';

interface MediaQueryWrapperProps {
  children: React.ReactNode;
}

const MediaQueryWrapper: FC<MediaQueryWrapperProps> = ({ children }) => {
  // update media query
  useMediaQuery();

  return <div id="media query wrapper">{children}</div>;
};

export default MediaQueryWrapper;
