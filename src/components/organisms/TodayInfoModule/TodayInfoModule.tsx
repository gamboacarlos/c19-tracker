/* eslint-disable camelcase */
import React, { FC } from 'react';
import { useData } from '../../../contexts/DataContext';
import { PrimaryTitle } from '../../atoms';
import { InfoLine } from '../../molecules';
import styles from './TodayInfoModule.module.scss';

const TodayInfoModule: FC = () => {
  const { todayData } = useData();
  return (
    <div className={styles.moduleWrapper}>
      <div className={styles.infoTitle}>
        <PrimaryTitle>World Today</PrimaryTitle>
        <div className={styles.titleDecoration}>
          <hr />
          <hr />
        </div>
      </div>
      <InfoLine name="New confirmed" data={todayData.today_new_confirmed} />
      <InfoLine name="New deaths" data={todayData.today_new_deaths} />
      <InfoLine name="New recovered" data={todayData.today_new_recovered} />
      <InfoLine name="Open Cases" data={todayData.today_open_cases} />
      <InfoLine name="Total Recovered" data={todayData.today_recovered} />
      <InfoLine name="Total Deaths" data={todayData.name} />
    </div>
  );
};

export default TodayInfoModule;
