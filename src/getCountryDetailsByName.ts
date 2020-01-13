import countries from './countries.json';
import { ICountry } from './types';

export function byName(name: string): ICountry | null {
  const foundCountry = countries.find((country: ICountry) => country.name === name);

  if (!foundCountry) {
    return null;
  }

  return foundCountry;
}
