const getByName = require('./getByName');
const getByCode = require('./getByCode')
const getByDialCode = require('./getByDialCode')
const { validateCode, validateMultipleCodes } = require('./validate');
const getAll = require('./getAll')
const getCountries = require('./src/getCountries');

module.exports = {
  getAll: {
    asArray: getAll.asArray,
    asObject: getAll.asObject,
  },
  getInfo: {
    byCode: getByCode.info,
    byName: getByName.info,
    byDialCode: getByDialCode.info,
  },
  getMultipleInfo: {
    byCodes: getByCode.multipleInfo,
    byNames: getByName.multipleInfo,
    byDialCodes: getByDialCode.multipleInfo,
  },
  getDialCode: {
    byCode: getByDialCode.code,
    byName: getByDialCode.name,
  },
  getMultipleDialCode: {
    byCodes: getByDialCode.multipleCode,
    ByNames: getByDialCode.multipleName,
  },
  getCountryCode: {
    byName: getByCode.name,
    byDialCode: getByCode.dialCode,
  },
  getMultipleCountryCode: {
    byNames: getByCode.multipleName,
    byDialCodes: getByCode.multipleDialCode
  },
  validateCode,
  validateMultipleCodes,
  getCountries,
}