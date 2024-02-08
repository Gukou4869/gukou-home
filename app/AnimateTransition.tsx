'use client';

import { AnimatePresence } from 'framer-motion';

interface AnimationWrapperProps {
  children: React.ReactNode;
}

const AnimateTransition = (props: AnimationWrapperProps) => {
  const { children } = props;

  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default AnimateTransition;
