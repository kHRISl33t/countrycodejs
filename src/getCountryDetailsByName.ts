import countries from './countries.json';
import { ICountry } from './types';

export function byName(name: string): any {
  const foundCountry = countries.find((country: any) => country.name === name);

  if (!foundCountry) {
    return null;
  }

  return foundCountry;
}
