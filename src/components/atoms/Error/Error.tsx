import React, { FC } from 'react';
import styles from './Error.module.scss';

type Props = {
  children: string;
};

const Error: FC<Props> = ({ children }) => {
  return (
    <div className={styles.errorWrapper}>
      <p>{children}</p>
    </div>
  );
};

export default Error;
