const helper = require('./helper');

function info(code) {
  const value = code.toUpperCase();
  if (value.length > 2) {
    throw new Error(`Input needs to be a valid ISO 3166-1 alpha-2 country code. Invalid value: ${value}`)
  }
  return helper.getAllValue('code', value);
}

async function multipleInfo(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input needs to be an array!')
  }

  const found = [];
  for (const code of array) {
    const value = code.toUpperCase();
    if (value.length > 2) {
      throw new Error(`Input needs to be a valid ISO 3166-1 alpha-2 country code. Invalid value: ${value}`)
    }

    const search = helper.getAllValue('code', value);
    if (search !== undefined) {
      found.push(search);
    }
  }
  return found;
}

async function dialCode(code) {
  const value = code.toUpperCase();
  if (value.length > 2) {
    throw new Error(`Input needs to be a valid ISO 3166-1 alpha-2 country code. Invalid value: ${value}`)
  }

  return helper.getSingleValue('code', value, 'dial_code');
}

async function multipleDialCode(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input needs to be an array!')
  }

  const found = [];
  for (const code of array) {
    const value = code.toUpperCase();
    if (value.length > 2) {
      throw new Error(`Input needs to be a valid ISO 3166-1 alpha-2 country code. Invalid value: ${value}`)
    }

    const search = helper.getSingleValue('code', value, 'dial_code');
    if (search !== undefined) {
      found.push(search);
    }
  }
  return found;
}

async function name(code) {
  const value = code.toUpperCase();
  if (value.length > 2) {
    throw new Error(`Input needs to be a valid ISO 3166-1 alpha-2 country code. Invalid value: ${value}`)
  }

  return helper.getSingleValue('code', value, 'name')
}

async function multipleName(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input needs to be an array!')
  }

  const found = [];
  for (const code of array) {
    const value = code.toUpperCase();
    if (value.length > 2) {
      throw new Error(`Input needs to be a valid ISO 3166-1 alpha-2 country code. Invalid value: ${value}`)
    }

    const search = helper.getSingleValue('code', value, 'name');
    if (search !== undefined) {
      found.push(search);
    }
  }
  return found;
}

module.exports = {
  multipleDialCode,
  dialCode,
  multipleInfo,
  info,
  multipleName,
  name,
}
