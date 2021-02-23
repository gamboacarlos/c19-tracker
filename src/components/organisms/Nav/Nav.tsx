import React, { FC } from 'react';
import { Logo } from '../../atoms';
import styles from './Nav.module.scss';

const Nav: FC = () => {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navContent}>
        <Logo />
        <div className={styles.navDecoration}>
          <span>Live_Tracker</span>
          <hr />
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Nav;
