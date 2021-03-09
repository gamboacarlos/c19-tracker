import React, { FC } from 'react';
import styles from './Input.module.scss';

type Props = {
  type: string;
  placeholder?: string;
};

const Input: FC<Props> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      id="input"
    />
  );
};

export default Input;
