/* eslint-disable @typescript-eslint/no-explicit-any */

export interface CountryTodayData {
  [name: string]: any;
}
export interface CountriesData {
  [name: string]: CountryTodayData;
}

export interface WorldTodayData {
  [name: string]: any;
}

export interface ContextType {
  todayData: WorldTodayData;
  countryInfo: CountryTodayData;
  switchData: boolean;
  getCountryData: (name: string) => Promise<void>;
  // setCountryData: React.Dispatch<React.SetStateAction<Country>>;
}
