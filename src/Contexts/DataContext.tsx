/* eslint-disable camelcase */
import React, { FC, ReactNode, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
};

export interface WorldTodayData {
  today_new_confirmed: number;
  today_new_deaths: number;
  today_new_recovered: number;
  today_open_cases: number;
  yesterday_confirmed: number;
}

// useContext
export const DataContext = React.createContext({} as WorldTodayData);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useData = () => React.useContext(DataContext);
/// ///////////////////////////////

// date generator/////////////////////
const date = new Date();
const currentDate = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()}`;
/// ///////////////////////////////////////////

// Main Component ////////////////////////////////////
export const AppContext: FC<Props> = ({ children }) => {
  const [todayData, setTodayData] = useState({} as WorldTodayData);

  useEffect(() => {
    const apiUrl = `https://api.covid19tracking.narrativa.com/api/${currentDate}`;
    async function worldTodayData() {
      try {
        const apiFecth = await fetch(apiUrl);
        const response = await apiFecth.json();
        setTodayData(response.total);
      } catch (e) {
        console.log(e);
      }
    }
    worldTodayData();
  }, []);

  return (
    <DataContext.Provider value={todayData}>{children}</DataContext.Provider>
  );
};
