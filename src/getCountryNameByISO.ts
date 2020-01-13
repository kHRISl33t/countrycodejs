import countries from './countries.json';
import { ICountry } from './types';

export function byISOCode(isoCode: string): ICountry | null {
  const searchinCountry = countries.find((country: ICountry) => country.code === isoCode);

  if (!searchinCountry) {
    return null;
  }

  return searchinCountry;
}
