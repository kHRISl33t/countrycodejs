import countries from './countries.json';
import { Country, Maybe } from './types';

export const byCapital = (capital: string): Maybe<Country> => {
  const foundCountry = countries.find((country) => country.capital === capital);

  if (!foundCountry) {
    return null;
  }

  return foundCountry as Country;
};
