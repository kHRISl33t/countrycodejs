import countries from './countries.json';
import { Country, Maybe } from './types';

export const byDialCode = (dialCode: string): Maybe<Country> => {
  const foundCountry = countries.find((country) => country.dial_code === dialCode);

  if (!foundCountry) {
    return null;
  }

  return foundCountry as Country;
};
