import React, { FC } from 'react';
import { PrimaryTitle } from '../../atoms';
import { InfoLine } from '../../molecules';
import styles from './InfoModule.module.scss';

// type Props = {
//   name: string;
//   data: number;
//   title: string;
// };

const InfoModule: FC = () => {
  return (
    <div className={styles.moduleWrapper}>
      <div className={styles.infoTitle}>
        <PrimaryTitle>World Today</PrimaryTitle>
        <div className={styles.titleDecoration}>
          <hr />
          <hr />
        </div>
      </div>
      <InfoLine name="New confirmed" data="578.445" />
      <InfoLine name="New deaths" data="2.120" />
      <InfoLine name="New recovered" data="5.187" />
      <InfoLine name="Total confirmed" data="5.235.981" />
    </div>
  );
};

export default InfoModule;
