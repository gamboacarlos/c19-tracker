/* eslint-disable camelcase */
import React, { FC } from 'react';
import { useData } from '../../../Contexts/DataContext';
import { PrimaryTitle } from '../../atoms';
import { InfoLine } from '../../molecules';
import styles from './TodayInfoModule.module.scss';

const TodayInfoModule: FC = () => {
  const {
    today_new_confirmed,
    today_new_deaths,
    today_new_recovered,
    today_open_cases,
  } = useData();

  return (
    <div className={styles.moduleWrapper}>
      <div className={styles.infoTitle}>
        <PrimaryTitle>World Today</PrimaryTitle>
        <div className={styles.titleDecoration}>
          <hr />
          <hr />
        </div>
      </div>
      <InfoLine name="New confirmed" data={today_new_confirmed} />
      <InfoLine name="New deaths" data={today_new_deaths} />
      <InfoLine name="New recovered" data={today_new_recovered} />
      <InfoLine name="Open Cases" data={today_open_cases} />
    </div>
  );
};

export default TodayInfoModule;
