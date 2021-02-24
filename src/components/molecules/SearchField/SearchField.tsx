import React, { FC } from 'react';
import { Input, PrimaryButton, PrimaryTitle } from '../../atoms';
import styles from './SearchField.module.scss';

const SearchField: FC = () => {
  return (
    <div className={styles.sFieldWrapper}>
      <PrimaryTitle>Search by country</PrimaryTitle>
      <div className={styles.sInputs}>
        <Input type="text" />
        <PrimaryButton>GO</PrimaryButton>
      </div>
    </div>
  );
};

export default SearchField;
