import React, { FC } from 'react';
import { Layout } from '..';
import { MainTitle } from '../../atoms';
import { MainDate, NarrativaMention, SearchField } from '../../molecules';
import { InfoModule } from '../../organisms';
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
        <InfoModule />
        <NarrativaMention />
      </div>
    </Layout>
  );
};

export default HomeTemplate;
// const HomeTemplate: FC<Props> = ({ mainTitleData }) => {
//   return (
//     <Layout>
//       <div className={styles.hWrapper}>
//         <div className={styles.hTitleArea}>
//           <MainTitle>{mainTitleData}</MainTitle>
//           <MainDate />
//         </div>
//         <div className={styles.hInfoArea}>
//           <SearchField />
//           <InfoModule />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default HomeTemplate;
