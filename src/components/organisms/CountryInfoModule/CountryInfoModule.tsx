/* eslint-disable camelcase */
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { useData } from '../../../contexts/DataContext';
import { PrimaryTitle } from '../../atoms';
import { InfoLine } from '../../molecules';
import styles from './CountryInfoModule.module.scss';

const TodayInfoModule: FC = () => {
  const { countryInfo } = useData();
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
    </motion.div>
  );
};

export default TodayInfoModule;
