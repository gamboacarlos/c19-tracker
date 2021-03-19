/* eslint-disable camelcase */
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { WorldTodayData, Name } from '../../../interfaces/dataInterfaces';
import { PrimaryTitle } from '../../atoms';
import { InfoLine } from '../../molecules';
import styles from './InfoModule.module.scss';

interface Props {
  data: WorldTodayData;
  name: Name;
  title?: string;
}

const TodayInfoModule: FC<Props> = ({ data, name, title }) => {
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
            delay: 0.8,
          },
        },
      }}
    >
      <div className={styles.infoTitle}>
        <PrimaryTitle>{title || `${data.name} Today`}</PrimaryTitle>
        <div className={styles.titleDecoration}>
          <hr />
          <hr />
        </div>
      </div>
      <InfoLine name={name.a} data={data.today_new_confirmed} />
      <InfoLine name={name.b} data={data.today_new_deaths} />
      <InfoLine name={name.c} data={data.today_new_recovered} />
      <InfoLine name={name.d} data={data.today_open_cases} />
      <InfoLine name={name.e} data={data.today_recovered} />
      <InfoLine name={name.f} data={data.today_deaths} />
    </motion.div>
  );
};

export default TodayInfoModule;
