import countries from './countries.json';
import { Country, Maybe } from './types';

export const byISOCode = (isoCode: string): Maybe<Country> => {
  const foundCountry = countries.find((country) => country.code === isoCode);

  if (!foundCountry) {
    return null;
  }

  return foundCountry as Country;
};
