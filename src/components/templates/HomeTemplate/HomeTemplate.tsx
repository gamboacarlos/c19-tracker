import React, { FC } from 'react';
import { Layout } from '..';
import { useData } from '../../../contexts/DataContext';
import { MainTitle } from '../../atoms';
import { MainDate, NarrativaMention, SearchField } from '../../molecules';
import { CountryInfoModule, TodayInfoModule } from '../../organisms';
import styles from './HomeTemplate.module.scss';

type Props = {
  mainTitleData: string;
};

const HomeTemplate: FC<Props> = ({ mainTitleData }) => {
  const { switchData } = useData();
  return (
    <Layout>
      <div className={styles.hWrapper}>
        <MainTitle>{mainTitleData}</MainTitle>
        <MainDate />
        <SearchField />
        {switchData ? <CountryInfoModule /> : <TodayInfoModule />}
        <NarrativaMention />
      </div>
    </Layout>
  );
};

export default HomeTemplate;
