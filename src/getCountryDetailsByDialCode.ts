import countries from './countries.json';
import { ICountry } from './types';

export function byDialCode(dialCode: string): ICountry | null {
  const foundCountry = countries.find((country: ICountry) => country.dial_code === dialCode);

  if (!foundCountry) {
    return null;
  }

  return foundCountry;
}
