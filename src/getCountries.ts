import countries from './countries.json';
import { ICountry } from './types';

export function getAllCountries(): ICountry[] {
  return countries;
}
