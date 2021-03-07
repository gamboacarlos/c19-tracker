/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { FC, ReactNode, useEffect, useState } from 'react';
import moment from 'moment';

type Props = {
  children: ReactNode;
};

export interface Country {
  country: string;
}

export interface TodayCountryData {
  [name: string]: number;
}

export interface WorldTodayData {
  [name: string]: number;
}
export interface ContextType {
  todayData: WorldTodayData;
  // todayCountry: TodayCountryData;
  // getCountryInfo: () => Promise<void>;
  // setCountry: React.Dispatch<React.SetStateAction<Country>>;
}

// useContext
export const DataContext = React.createContext({} as ContextType);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useData = () => React.useContext(DataContext);

// date generator/////////////////////
// const date = moment().format('YYYY-MM-DD');
const date = '2021-03-06';

// Main Component ////////////////////////////////////
export const AppContext: FC<Props> = ({ children }) => {
  const [todayData, setTodayData] = useState({} as WorldTodayData);
  // const [country, setCountry] = useState({} as Country);
  // const [todayCountry, setTodayCountry] = useState({} as TodayCountryData);

  useEffect(() => {
    const apiUrl = `https://api.covid19tracking.narrativa.com/api/${date}`;
    async function worldTodayData() {
      const apiFecth = await fetch(apiUrl);
      const { total } = await apiFecth.json();
      setTodayData(total);
    }
    worldTodayData();
  }, []);

  return (
    <DataContext.Provider value={{ todayData }}>
      {children}
    </DataContext.Provider>
  );
};
