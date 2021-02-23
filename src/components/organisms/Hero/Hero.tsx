import React, { FC } from 'react';
import { MainTitle } from '../../atoms';
import { MainDate, SearchField } from '../../molecules';
import styles from './Hero.module.scss';

const Hero: FC = () => {
  return (
    <div className={styles.hWrapper}>
      <div className={styles.hSearchArea}>
        <div className={styles.hTitleTopRightDecoration} />
        <MainTitle>
          Track the covid-19 all over the world
          <hr />
        </MainTitle>
        <SearchField />
      </div>
      <div className={styles.hInfoArea}>
        <MainDate />
      </div>
    </div>
  );
};

export default Hero;
