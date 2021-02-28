import React, { FC } from 'react';
import { MdTexture } from 'react-icons/md';
import styles from './InfoLine.module.scss';

type Props = {
  name: string;
  data: number;
};

const InfoLine: FC<Props> = ({ name, data }) => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.infoNameSection}>
        <MdTexture size="1.7rem" />
        <p>{name}</p>
      </div>
      <p>{data}</p>
    </div>
  );
};

export default InfoLine;
