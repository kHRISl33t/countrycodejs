import { getAllCountries } from './getCountries';
import { byDialCode } from './getCountryDetailsByDialCode';
import { byISOCode } from './getCountryDetailsByISO';
import { byName } from './getCountryDetailsByName';

export = {
  getAllCountries,
  getCountry: {
    byDialCode,
    byISOCode,
    byName,
  },
};
