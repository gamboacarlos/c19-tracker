import React, { FC } from 'react';
import styles from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <p>C19</p>
    </div>
  );
};

export default Logo;
