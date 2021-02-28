import React, { FC } from 'react';
import { Layout } from '..';
import { MainTitle } from '../../atoms';
import { MainDate, NarrativaMention, SearchField } from '../../molecules';
import { TodayInfoModule } from '../../organisms';
import styles from './HomeTemplate.module.scss';

type Props = {
  mainTitleData: string;
};

const HomeTemplate: FC<Props> = ({ mainTitleData }) => {
  return (
    <Layout>
      <div className={styles.hWrapper}>
        <MainTitle>{mainTitleData}</MainTitle>
        <MainDate />
        <SearchField />
        <TodayInfoModule />
        <NarrativaMention />
      </div>
    </Layout>
  );
};

export default HomeTemplate;
