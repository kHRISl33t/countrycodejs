import countries from './countries.json';
import { ICountry } from './types';

export function byISOCode(isoCode: string): any {
  const foundCountry = countries.find((country: any) => {
    return country.country_code === isoCode
  });

  if (!foundCountry) {
    return null;
  }

  return foundCountry;
}
