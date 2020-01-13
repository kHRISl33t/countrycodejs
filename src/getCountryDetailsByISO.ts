import countries from './countries.json';
import { ICountry } from './types';

export function byISOCode(isoCode: string): ICountry | null {
  const foundCountry = countries.find((country: ICountry) => country.code === isoCode);

  if (!foundCountry) {
    return null;
  }

  return foundCountry;
}
