[![npm Version][npm-image]][npm-url]
[![License][license-image]][license-url]

# addMonths

Adds or sustract X months to any JavaScript Date.

### Install
```bash
npm i addmonths
```

#### Usage

```js
addMonths(date, count)
```

#### Example

```js
addMonths(new Date(2017, 1, 1), 2)    // ==> 2017-03-01
addMonths(new Date(2017, 1, 1), -1)   // ==> 2016-12-01
addMonths(new Date(2016, 1, 31), 1)   // ==> 2016-02-29
```

## License

The [MIT License](LICENCE) (MIT)

Copyright (c) 2017 Alberto Martínez (https://github.com/aMarCruz)

[npm-image]:      https://img.shields.io/npm/v/addmonths.svg
[npm-url]:        https://www.npmjs.com/package/addmonths
[license-image]:  https://img.shields.io/npm/l/express.svg
[license-url]:    https://github.com/aMarCruz/jscc-brunch/blob/master/LICENSE
