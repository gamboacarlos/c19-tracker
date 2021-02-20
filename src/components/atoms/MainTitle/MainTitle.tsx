import React, { FC, ReactNode } from 'react';
import styles from './MainTitle.module.scss';

type Props = {
  children: ReactNode;
};

const MainTitle: FC<Props> = ({ children }) => (
  <div className={styles.title}>
    <p>{children}</p>
  </div>
);

export default MainTitle;
