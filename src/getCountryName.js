const countries = require('../countries.json');

function byISOCode(isoCode) {
  const country = countries.find(country => country.code === isoCode)

  if (!country) {
    return null
  }

  return country
}

module.exports = {
  byISOCode
}