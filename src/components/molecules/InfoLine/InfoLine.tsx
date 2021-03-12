import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { MdTexture } from 'react-icons/md';
import styles from './InfoLine.module.scss';

type Props = {
  name: string;
  data: number;
};

const InfoLine: FC<Props> = ({ name, data }) => {
  return (
    <motion.div
      className={styles.infoWrapper}
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
      <div className={styles.infoNameSection}>
        <MdTexture size="1.7rem" />
        <p>{name}</p>
      </div>
      <p>{data}</p>
    </motion.div>
  );
};

export default InfoLine;
