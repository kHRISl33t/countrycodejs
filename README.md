# countrycode.js

> A work in progress dependency less package to get all countries with it's ISO 3166 code and dialcode or to get a country's name by it's dialcode or ISO 3166 code.

## Usage

```sh
npm install countrycodejs
```

```js
const countryCode = require('countrycodejs');

// returns all countries as an array
countryCode.getAllCountries()

// return a country in an object or null if it was founds
countryCode.getCountry.byISOCode('HU')
```

## Author

👤 **Kristof Ivancza**

* Github: [@kHRISl33t](https://github.com/kHRISl33t)
