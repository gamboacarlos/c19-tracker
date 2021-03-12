import { motion } from 'framer-motion';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Animation: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
