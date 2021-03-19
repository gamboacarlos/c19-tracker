import React, { FC } from 'react';
import { Layout } from '..';
import {
  CountryTodayData,
  Name,
  WorldTodayData,
} from '../../../interfaces/dataInterfaces';
import { MainTitle } from '../../atoms';
import { MainDate, NarrativaMention, SearchField } from '../../molecules';
import { InfoModule } from '../../organisms';
import styles from './HomeTemplate.module.scss';

type Props = {
  mainTitleData: string;
  CountryData: CountryTodayData;
  WorldData: WorldTodayData;
  name: Name;
  error: boolean;
  switchData: boolean;
  getCountryData: (name: string) => Promise<void>;
};

const HomeTemplate: FC<Props> = ({
  mainTitleData,
  WorldData,
  CountryData,
  getCountryData,
  name,
  error,
  switchData,
}) => {
  return (
    <Layout>
      <div className={styles.hWrapper}>
        <MainTitle>{mainTitleData}</MainTitle>
        <MainDate />
        <SearchField error={error} getCountryData={getCountryData} />
        {switchData ? (
          <InfoModule name={name} data={CountryData} />
        ) : (
          <InfoModule title="World Today" name={name} data={WorldData} />
        )}
        <NarrativaMention />
      </div>
    </Layout>
  );
};

export default HomeTemplate;
