const countries = require('./countries.json');

function findCountry(country) {
  let foundCountry;
  for (const [key, value] of Object.entries(countries)) {
    if (key === country) {
      foundCountry = value;
    }
  }
  return foundCountry;
}

function getAllValue(searchKey, find) {
  let foundCountry;
  for (const [, value] of Object.entries(countries)) {
    if (value[searchKey] === find) {
      foundCountry = value;
    }
  }
  return foundCountry;
}

function getSingleValue(searchKey, find, exactValue) {
  let foundCountry;
  for (const [, value] of Object.entries(countries)) {
    if (value[searchKey] === find) {
      foundCountry = value[exactValue];
    }
  }
  return foundCountry;
}

function upperCaseFirstLowerCaseRest(string) {
  if (string.indexOf(' ') !== -1) {
    const stringArr = string.split(' ');
    let newString = '';
    stringArr.forEach((value, i) => {
      if ((stringArr.length - 1) !== i) {
        newString += value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() + ' ';
      } else {
        newString += value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      }
    })
    return newString;
  }

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

module.exports = {
  findCountry,
  getAllValue,
  getSingleValue,
  upperCaseFirstLowerCaseRest,
};
