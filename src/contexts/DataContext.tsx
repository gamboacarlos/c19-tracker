import React, { FC, ReactNode, useEffect, useState } from 'react';
import moment from 'moment';
import {
  ContextType,
  CountriesData,
  CountryTodayData,
  WorldTodayData,
} from '../interfaces/dataInterfaces';
import { textTransform } from '../utils/textTransform';

type Props = {
  children: ReactNode;
};

// useContext
export const DataContext = React.createContext({} as ContextType);
export const useData = () => React.useContext(DataContext);

// date generator/////////////////////
const date = moment().subtract(1, 'days').format('YYYY-MM-DD');

// Main Component ////////////////////////////////////
export const AppContext: FC<Props> = ({ children }) => {
  const [todayData, setTodayData] = useState({} as WorldTodayData);
  const [countriesData, setCountriesData] = useState<CountriesData>();
  const [countryInfo, setCountryInfo] = useState({} as CountryTodayData);
  const [switchData, setSwitchData] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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
    const cName = textTransform(name);
    if (countriesData![cName] === undefined) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }
    setError(false);
    setCountryInfo(countriesData![cName]);
    setSwitchData(true);
  };

  return (
    <DataContext.Provider
      value={{
        todayData,
        countryInfo,
        getCountryData,
        switchData,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
