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

interface GlobalType {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface CountriesType extends GlobalType {
  Country: string;
  CountryCode: string;
  Slug: string;
  Date: string;
}

interface SummaryDefine {
  Global?: GlobalType;
  Countries?: CountriesType[];
}

export type {
  CountryListDefine,
  CountryDefine,
  CountryStatus,
  LiveCountryStatusDefine,
  SummaryDefine,
  GlobalType,
};
