const helper = require('./helper');

async function multipleName(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input needs to be an array!')
  }

  const found = [];
  for (const dialCode of array) {
    const value = dialCode;
    let search;

    if (value.startsWith('+')) {
      if (Number.isInteger(parseFloat(value))) {
        search = helper.getSingleValue('dial_code', dialCode, 'name');
      } else {
        throw new Error(`Dial code is not a valid integer. Input: ${value}`);
      }
    } else {
      throw new Error(`Dial code should start with '+'. Input: ${value}`);
    }
    
    if (search !== undefined) {
      found.push(search);
    }
  }
  return found;
}

async function name(name) {
  const value = name;
  if (value.startsWith('+')) {
    if (Number.isInteger(parseFloat(value))) {
      return helper.getSingleValue('dial_code', value, 'name');
    } else {
      throw new Error(`Dial code is not a valid integer. Input: ${value}`);
    }
  } else {
    throw new Error(`Dial code should start with '+'. Input: ${value}`);
  }
}

async function code(dialCode) {
  const value = dialCode;
  if (value.startsWith('+')) {
    if (Number.isInteger(parseFloat(value))) {
      return helper.getSingleValue('dial_code', dialCode, 'code');
    } else {
      throw new Error(`Dial code is not a valid integer. Input: ${value}`);
    }
  } else {
    throw new Error(`Dial code should start with '+'. Input: ${value}`);
  }
}

async function multipleCode(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input needs to be an array!')
  }

  const found = [];
  for (const dialCode of array) {
    const value = dialCode;
    let search;

    if (value.startsWith('+')) {
      if (Number.isInteger(parseFloat(value))) {
        search = helper.getSingleValue('dial_code', dialCode, 'code');
      } else {
        throw new Error(`Dial code is not a valid integer. Input: ${value}`);
      }
    } else {
      throw new Error(`Dial code should start with '+'. Input: ${value}`);
    }

    if (search !== undefined) {
      found.push(search);
    }
  }
  return found;
}

async function info(dialCode) {
  const value = dialCode;
  if (value.startsWith('+')) {
    if (Number.isInteger(parseFloat(value))) {
      return helper.getAllValue('dial_code', dialCode);
    } else {
      throw new Error(`Dial code is not a valid integer. Input: ${value}`);
    }
  } else {
    throw new Error(`Dial code should start with '+'. Input: ${value}`);
  }
}

async function multipleInfo(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input needs to be an array!')
  }

  const found = [];
  for (const dialCode of array) {
    const value = dialCode;
    let search;

    if (value.startsWith('+')) {
      if (Number.isInteger(parseFloat(value))) {
        search = helper.getAllValue('dial_code', dialCode);
      } else {
        throw new Error(`Dial code is not a valid integer. Input: ${value}`);
      }
    } else {
      throw new Error(`Dial code should start with '+'. Input: ${value}`);
    }

    if (search !== undefined) {
      found.push(search);
    }
  }
  return found;
}

module.exports = {
  multipleCode,
  code,
  multipleInfo,
  info,
  multipleName,
  name,
}