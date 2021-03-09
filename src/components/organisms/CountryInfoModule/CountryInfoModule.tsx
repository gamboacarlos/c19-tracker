/* eslint-disable camelcase */
import React, { FC } from 'react';
import { useData } from '../../../contexts/DataContext';
import { PrimaryTitle } from '../../atoms';
import { InfoLine } from '../../molecules';
import styles from './CountryInfoModule.module.scss';

const TodayInfoModule: FC = () => {
  const { countryInfo } = useData();
  return (
    <div className={styles.moduleWrapper}>
      <div className={styles.infoTitle}>
        <PrimaryTitle>{countryInfo.name} Today</PrimaryTitle>
        <div className={styles.titleDecoration}>
          <hr />
          <hr />
        </div>
      </div>
      <InfoLine name="New confirmed" data={countryInfo.today_new_confirmed} />
      <InfoLine name="New deaths" data={countryInfo.today_new_deaths} />
      <InfoLine name="New recovered" data={countryInfo.today_new_recovered} />
      <InfoLine name="Open Cases" data={countryInfo.today_open_cases} />
      <InfoLine name="Total Recovered" data={countryInfo.today_recovered} />
      <InfoLine name="Total Deaths" data={countryInfo.today_deaths} />
    </div>
  );
};

export default TodayInfoModule;
