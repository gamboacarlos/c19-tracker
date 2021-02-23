import React, { FC } from 'react';
import { GoChevronDown } from 'react-icons/go';
import styles from './MainDate.module.scss';

const MainDate: FC = () => {
  const today = new Date();
  const displayMonth = () => {
    switch (today.getMonth()) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
      default:
        return 'Today';
    }
  };
  const month = displayMonth();
  const day = `, ${today.getDate()}`;
  const year = today.getFullYear();

  // const currentDate = `${today.getFullYear()}-${
  //   displayMonth() + 1
  // }-${today.getDate()}`;

  return (
    <div className={styles.dateWrapper}>
      <GoChevronDown size="2.5rem" />
      <div className={styles.dateArea}>
        <p>
          {month}
          <span>{day}</span>
        </p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MainDate;
