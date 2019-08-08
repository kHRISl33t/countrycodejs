const helper = require('./helper');

// add validation for dialcodes and names

async function validateMultipleCodes(array) {
  let search;
  for (const countryCode of array) {
    if (countryCode.length > 2) {
      throw new Error(`String needs to be a valid ISO 3166-1 alpha-2 country code. Value: ${countryCode}`);
    }

    const value = countryCode.toUpperCase();
    search = helper.findCountry(value);

    if (search === undefined) {
      throw new Error(`CountryCode not found: ${value}`);
    }
  }

  return;
}

async function validateCode(string) {
  if (string.length > 2) {
    throw new Error(`String needs to be a valid ISO 3166-1 alpha-2 country code. Value: ${string}`);
  }

  const value = string.toUpperCase();
  const search = helper.findCountry(value);

  console.log(search)

  if (search === undefined) {
    throw new Error(`Country not found: {value}`)
  }

  return;
}

module.exports = {
  validateCode,
  validateMultipleCodes,
}