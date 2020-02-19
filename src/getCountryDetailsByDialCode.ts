import countries from './countries.json';
import { ICountry } from './types';

export function byDialCode(dialCode: string): any {
  const foundCountry = countries.find((country: any) => country.dial_code === dialCode);

  if (!foundCountry) {
    return null;
  }

  return foundCountry;
}
