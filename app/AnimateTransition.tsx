'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface AnimationWrapperProps {
  children: React.ReactNode;
}

const AnimateTransition = (props: AnimationWrapperProps) => {
  const { children } = props;
  const key = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div animate={{ opacity: 1 }} id={key} initial={{ opacity: 0 }} key={key} transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateTransition;
