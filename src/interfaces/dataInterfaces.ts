/* eslint-disable @typescript-eslint/no-explicit-any */

export interface CountryTodayData {
  [name: string]: any;
}
export interface Name {
  [name: string]: string;
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
  error: boolean;
  getCountryData: (name: string) => Promise<void>;
}
