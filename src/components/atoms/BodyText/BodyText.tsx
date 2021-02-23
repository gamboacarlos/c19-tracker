import React, { FC, ReactNode } from 'react';
import styles from './BodyText.module.scss';

type Props = {
  children: ReactNode;
};

const BodyText: FC<Props> = ({ children }) => {
  return <p className={styles.bText}>{children}</p>;
};

export default BodyText;
