const getByName = require('./getByName');
const getByCode = require('./getByCode')
const getByDialCode = require('./getByDialCode')
const { validateCode, validateMultipleCodes } = require('./validate');

module.exports = {
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
}