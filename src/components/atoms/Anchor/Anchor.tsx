import React, { FC, ReactNode } from 'react';
import styles from './Anchor.module.scss';

type Props = {
  children: ReactNode;
  href: string;
};

const Anchor: FC<Props> = ({ children, href }) => {
  return (
    <a href={href} className={styles.anchor}>
      {children}
    </a>
  );
};

export default Anchor;
