/* eslint-disable camelcase */
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { useData } from '../../../contexts/DataContext';
import { PrimaryTitle } from '../../atoms';
import { InfoLine } from '../../molecules';
import styles from './TodayInfoModule.module.scss';

const TodayInfoModule: FC = () => {
  const { todayData } = useData();
  return (
    <motion.div
      className={styles.moduleWrapper}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
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
      <InfoLine name="Total Deaths" data={todayData.today_deaths} />
    </motion.div>
  );
};

export default TodayInfoModule;
