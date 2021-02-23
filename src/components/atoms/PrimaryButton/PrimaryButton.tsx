import React, { FC, ReactNode } from 'react';
import styles from './PrimaryButton.module.scss';

type Props = {
  children: ReactNode;
};

const PrimaryButton: FC<Props> = ({ children }) => {
  return (
    <button type="submit" className={styles.pButton}>
      {children}
    </button>
  );
};

export default PrimaryButton;
