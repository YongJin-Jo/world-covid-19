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

export type {
  CountryListDefine,
  CountryDefine,
  CountryStatus,
  LiveCountryStatusDefine,
};
