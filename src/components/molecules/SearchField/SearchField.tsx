/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-expressions */
import React, { FC } from 'react';
import { useData } from '../../../contexts/DataContext';
import { Error, Input, PrimaryButton, PrimaryTitle } from '../../atoms';
import styles from './SearchField.module.scss';

type Props = {
  error: boolean;
};
const SearchField: FC<Props> = ({ error }) => {
  const { getCountryData } = useData();

  const form = document.getElementById('form');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    input.value = '';
  });

  const input: any = document.getElementById('input');
  input?.addEventListener('change', (event: any) => {
    getCountryData(event.target.value);
  });

  return (
    <div className={styles.sFieldWrapper}>
      <div className={styles.sTitleWrapper}>
        <PrimaryTitle>Search by country</PrimaryTitle>
        {error && <Error>INFO NOT AVAILABLE</Error>}
      </div>
      <form id="form" className={styles.sInputs}>
        <Input type="text" placeholder="country name..." />
        <PrimaryButton>GO</PrimaryButton>
      </form>
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
