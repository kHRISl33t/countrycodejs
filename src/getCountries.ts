import countries from './countries.json';
import { Country } from './types';

export const getAllCountries = (): Country[] => {
  return countries as Country[];
};
