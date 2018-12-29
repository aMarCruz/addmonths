# addMonths

[![npm Version][npm-image]][npm-url]
[![License][license-image]](LICENSE)

Adds or sustract _X_ months to any JavaScript Date.

## 🚧 This Package Is Depreacted 🚧

This package is deprecated in favor of [@jsbits/add-months](https://www.npmjs.com/package/@jsbits/add-months).

Unlike addMonths, @jsbits/add-months handles [changes in the timezone](https://www.npmjs.com/package/@jsbits/add-months#note-about-dst) correctly, has better support, 100% coverage, and the version for `Date.prototype` is more consistent with other Date methods.

### This package will no longer be updated

## Install

npm

```bash
npm i addmonths --save
```

bower

```bash
bower install addmonths --save
```

browsers

```html
<script src="https://unpkg.com/addmonths/dist/addmonths.js"></script>
<!-- ...or to inject `addMonths` to `Date.prototype` -->
<script src="https://unpkg.com/addmonths/dist/addmonths.auto.js"></script>
```

## Usage

```js
newdate = addMonths(startdate, count)
```

The `addMonths` function returns a date occurring `count` months after `startdate` or, if `count` is negative, the date occurring `count` months before `startdate`.

If there is an overflow in the day, the date is adjusted to the last valid day of the expected month.

If `startdate` is not a date, returns `startdate` without changes.

If `startdate` is an invalid date (i.e. `NaN`), returns a new `Date` instance with an invalid date.

If `count` is evaluated as zero, returns a new `Date` instance with the same value as `startdate`.

### Examples

```js
const addMonths = require('addmonths')

addMonths(new Date(2017, 0, 1), 2)    // 2017-01-01 ==> 2017-03-01
addMonths(new Date(2017, 0, 1), -1)   // 2017-01-01 ==> 2016-12-01
addMonths(new Date(2016, 0, 31), 1)   // 2016-01-31 ==> 2016-02-29
addMonths(new Date(2016, 0, 31), 0)   // new instance with the same value
addMonths('2017-06-12', 1)            // the same string
```

If you prefer, you can inject the function into the `Date` prototype of Date requiring "auto" or by loading the IIFE from "dist/addmonths.auto.js" in your browser:

```js
require('addmonths/auto')

const date = new Date().addMonths(3)
```

## What's New

* Production ready version.
* Updated tests.
* Updated devDependencies.

## License

The [MIT License](LICENCE) (MIT)

Copyright (c) 2017 Alberto Martínez (https://github.com/aMarCruz)

[npm-image]:      https://img.shields.io/npm/v/addmonths.svg
[npm-url]:        https://www.npmjs.com/package/addmonths
[license-image]:  https://img.shields.io/npm/l/addmonths.svg
