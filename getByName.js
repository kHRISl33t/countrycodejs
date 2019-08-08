const helper = require('./helper');

async function multipleCode(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input needs to be an array!')
  }

  array.forEach(value => {
    if (value === '' || value === undefined) {
      throw new Error(`Input can't be empty.`);
    } else if (!value.match(/^[a-zA-Z]+$/)) {
      throw new Error(`Not valid string. Only letters allowed! Input: ${value}`);
    }
  });

  const newArray = [];

  array.forEach(value => {
    newArray.push(helper.upperCaseFirstLowerCaseRest(value));
  })

  const found = [];

  for (const value of newArray) {
    const code = helper.getSingleValue('name', value, 'code');
    if (code !== undefined) {
      found.push(code);
    }
  }

  return found;
}

async function code(name) {
  if (name === '' || name === undefined) {
    throw new Error(`Input can't be empty.`);
  } else if (!name.match(/^[a-zA-Z]+$/)) {
    throw new Error(`Not valid string. Only letters allowed! Input: ${name}`);
  }

  const value = helper.upperCaseFirstLowerCaseRest(name);

  return helper.getSingleValue('name', value, 'code');
}

async function multipleInfo(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input needs to be an array!')
  }

  array.forEach(value => {
    if (value === '' || value === undefined) {
      throw new Error(`Input can't be empty.`);
    } else if (!value.match(/^[a-zA-Z]+$/)) {
      throw new Error(`Not valid string. Only letters allowed! Input: ${value}`);
    }
  });

  const newArray = [];

  array.forEach(value => {
    newArray.push(helper.upperCaseFirstLowerCaseRest(value));
  })

  const found = [];

  for (const value of newArray) {
    const search = helper.getAllValue('name', value);
    if (search !== undefined) {
      found.push(search);
    }
  }
  return found;
}

async function info(name) {
  if (name === '' || name === undefined) {
    throw new Error(`Input can't be empty.`);
  } else if (!name.match(/^[a-zA-Z]+$/)) {
    throw new Error(`Not valid string. Only letters allowed! Input: ${name}`);
  }

  const value = helper.upperCaseFirstLowerCaseRest(name);

  return helper.getAllValue('name', value);
}

async function dialCode(name) {
  if (name === '' || name === undefined) {
    throw new Error(`Input can't be empty.`);
  } else if (!name.match(/^[a-zA-Z]+$/)) {
    throw new Error(`Not valid string. Only letters allowed! Input: ${name}`);
  }

  const value = helper.upperCaseFirstLowerCaseRest(name);

  return helper.getSingleValue('name', value, 'dial_code')
}

async function multipleDialCode(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input needs to be an array!')
  }

  array.forEach(value => {
    if (value === '' || value === undefined) {
      throw new Error(`Input can't be empty.`);
    } else if (!value.match(/^[a-zA-Z]+$/)) {
      throw new Error(`Not valid string. Only letters allowed! Input: ${value}`);
    }
  });

  const newArray = [];

  array.forEach(value => {
    newArray.push(helper.upperCaseFirstLowerCaseRest(value));
  })

  const found = [];

  for (const value of newArray) {
    const search = helper.getSingleValue('name', value, 'dial_code');
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
  dialCode,
  multipleDialCode
}