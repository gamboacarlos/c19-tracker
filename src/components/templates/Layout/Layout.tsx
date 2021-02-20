import React, { FC, ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Nav } from '../../organisms';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
