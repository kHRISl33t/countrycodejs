const countries = require('./countries.json');

function asArray() {
  const myArray = []
  for (const [key, value] of Object.entries(countries)) {
    myArray.push(value)
  }
  return myArray
}

function asObject() {
  return countries
}

module.exports = {
  asArray,
  asObject
}
