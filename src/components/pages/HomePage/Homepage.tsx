import React, { FC } from 'react';
import { useData } from '../../../contexts/DataContext';
import { HomeTemplate } from '../../templates';

const HomePage: FC = () => {
  const {
    switchData,
    error,
    todayData,
    countryInfo,
    getCountryData,
  } = useData();
  const name = {
    a: 'New confirmed',
    b: 'New deaths',
    c: 'New deaths',
    d: 'New recovered',
    e: 'Open Cases',
    f: 'Total Recovered',
    g: 'Total Deaths',
  };
  return (
    <HomeTemplate
      mainTitleData="Track the Covid-19 all over the world"
      name={name}
      WorldData={todayData}
      CountryData={countryInfo}
      error={error}
      switchData={switchData}
      getCountryData={getCountryData}
    />
  );
};

export default HomePage;
