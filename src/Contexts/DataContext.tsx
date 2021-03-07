/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { FC, ReactNode, useEffect, useState } from 'react';
import moment from 'moment';

type Props = {
  children: ReactNode;
};

export interface WorldTodayData {
  today_new_confirmed: number;
  today_new_deaths: number;
  today_new_recovered: number;
  today_open_cases: number;
  yesterday_confirmed: number;

  // todayData: Array<WorldTodayData>;
}
export interface ContextType {
  todayData: WorldTodayData;
}

// useContext
export const DataContext = React.createContext({} as ContextType);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useData = () => React.useContext(DataContext);

// date generator/////////////////////
const date = moment().format('YYYY-MM-DD');
// const date = '2021-03-05';

// Main Component ////////////////////////////////////
export const AppContext: FC<Props> = ({ children }) => {
  const [todayData, setTodayData] = useState({} as WorldTodayData);

  useEffect(() => {
    const apiUrl = `https://api.covid19tracking.narrativa.com/api/${date}`;
    async function worldTodayData() {
      const apiFecth = await fetch(apiUrl);
      const response = await apiFecth.json();
      setTodayData(response.total);
    }
    worldTodayData();
  }, []);

  return (
    <DataContext.Provider value={{ todayData }}>
      {children}
    </DataContext.Provider>
  );
};
