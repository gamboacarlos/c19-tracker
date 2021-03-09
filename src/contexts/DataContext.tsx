/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { FC, ReactNode, useEffect, useState } from 'react';
import moment from 'moment';
import {
  ContextType,
  CountriesData,
  CountryTodayData,
  WorldTodayData,
} from '../interfaces/dataInterfaces';

type Props = {
  children: ReactNode;
};

// useContext
export const DataContext = React.createContext({} as ContextType);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useData = () => React.useContext(DataContext);

// date generator/////////////////////
const date = moment().subtract(1, 'days').format('YYYY-MM-DD');

// Main Component ////////////////////////////////////
export const AppContext: FC<Props> = ({ children }) => {
  const [todayData, setTodayData] = useState({} as WorldTodayData);
  const [countriesData, setCountriesData] = useState<CountriesData>();
  const [countryInfo, setCountryInfo] = useState({} as CountryTodayData);
  const [switchData, setSwitchData] = useState<boolean>(false);

  useEffect(() => {
    async function worldTodayData() {
      const apiUrl = `https://api.covid19tracking.narrativa.com/api/${date}`;
      const apiFetch = await fetch(apiUrl);
      const response = await apiFetch.json();
      setTodayData(response.total);
      setCountriesData(response.dates[date].countries);
    }
    worldTodayData();
  }, []);
  // Get country data///////////
  const getCountryData = async (name: string) => {
    setCountryInfo(countriesData![name]);
    setSwitchData(true);
  };

  return (
    <DataContext.Provider
      value={{ todayData, countryInfo, getCountryData, switchData }}
    >
      {children}
    </DataContext.Provider>
  );
};
