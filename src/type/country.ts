type CountryStatus = 'confirmed' | 'recovered' | 'deaths';

interface CountryListDefine {
  Country: string;
  Slug: string;
  ISO2: string;
}

interface CountryDefault {
  Country: string;
  CountryCode: string;
  Lat: string;
  Lon: string;
}

interface CountryDefine extends CountryDefault {
  Cases: number;
  Status: string;
  Date: string;
}

interface LiveCountryStatusDefine extends CountryDefault {
  Confirmed?: number;
  Deaths?: number;
  Recovered?: number;
  Active?: number;
  LocationID: string;
}

interface CountriesType {
  Country?: string;
  CountryCode?: string;
  Slug?: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
  Date: string;
}

interface SummaryDefine {
  Global?: CountriesType;
  Countries?: CountriesType[];
}

interface oneCountry {
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Confirmed: number;
  Deaths: string;
  Recovered: string;
  Active: number;
  ID: string;
  Lat: string;
  Lon: string;
  Province: string;
}

export type {
  CountryListDefine,
  CountryDefine,
  CountryStatus,
  LiveCountryStatusDefine,
  SummaryDefine,
  CountriesType,
  oneCountry,
};
