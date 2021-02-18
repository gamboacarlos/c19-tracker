import React, { FC, ReactNode } from 'react';
import styles from './Titulo.module.scss';

type Props = {
  children: ReactNode;
};

const Titulo: FC<Props> = ({ children }) => (
  <div className={styles.title}>
    <h1>{children}</h1>
  </div>
);

export default Titulo;
