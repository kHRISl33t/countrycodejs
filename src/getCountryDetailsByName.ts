import countries from './countries.json';
import { Country, Maybe } from './types';

export const byName = (name: string): Maybe<Country> => {
  const foundCountry = countries.find((country) => country.name === name);

  if (!foundCountry) {
    return null;
  }

  return foundCountry as Country;
};
