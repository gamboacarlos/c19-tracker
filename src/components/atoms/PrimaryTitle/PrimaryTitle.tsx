import React, { FC, ReactNode } from 'react';
import styles from './PrimaryTitle.module.scss';

type Props = {
  children: ReactNode;
};

const PrimaryTitle: FC<Props> = ({ children }) => {
  return <p className={styles.pTitle}>{children}</p>;
};

export default PrimaryTitle;
