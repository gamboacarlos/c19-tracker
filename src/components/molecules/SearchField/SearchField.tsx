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
      <div className={styles.warningText}>
        <div className={styles.warningTitle}>
          <p>WARNING</p>
          <hr />
        </div>
        <p>
          The data provided and used for the generation of these products comes
          from the aggregation of different sources, each of which with
          different update times and frequencies. Additionally, each country has
          its own accounting criteria, so comparisons of data between countries
          or regions, and even within them over time, may not be representative
          of reality.
        </p>
      </div>
    </div>
  );
};

export default SearchField;
