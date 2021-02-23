import React, { FC } from 'react';
import { Layout } from '..';
import { MainTitle } from '../../atoms';
import { MainDate, SearchField } from '../../molecules';
import styles from './HomeTemplate.module.scss';

type Props = {
  mainTitleData: string;
};

const HomeTemplate: FC<Props> = ({ mainTitleData }) => {
  return (
    <Layout>
      <div className={styles.hWrapper}>
        <div className={styles.hTitleArea}>
          <MainTitle>{mainTitleData}</MainTitle>
          <MainDate />
        </div>
        <div className={styles.hInfoArea}>
          <SearchField />
        </div>
      </div>
    </Layout>
  );
};

export default HomeTemplate;
