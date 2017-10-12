[![codebeat badge][cq-image]][cq-url]
[![npm Version][npm-image]][npm-url]
[![License][license-image]][license-url]

# addMonths

Adds or sustract _X_ months to any JavaScript Date.

**IMPORTANT:**

Please read the [What's New](#whats-new) section.

## Install

npm

```bash
npm i addmonths --save
```

bower

```bash
bower install addmonths --save
```

## Usage

```js
newdate = addMonths(startdate, count)
```

The `addMonths` function returns the date occurring _count_ months after _startdate_ or, if _count_ is negative, the date occurring _count_ months before _startdate_.

If _startdate_ is not a date, returns _startdate_ without changes.

If _count_ is zero returns a new `Date` object with the same value as _startdate_.


### Examples

```js
addMonths(new Date(2017, 0, 1), 2)    // 2017-01-01 ==> 2017-03-01
addMonths(new Date(2017, 0, 1), -1)   // 2017-01-01 ==> 2016-12-01
addMonths(new Date(2016, 0, 31), 1)   // 2016-01-31 ==> 2016-02-29
addMonths(new Date(2016, 0, 31), 0)   // new instance with the same value
addMonths('2017-06-12', 1)            // the same string
```

and if you loaded addmonths.auto:

```js
const date = new Date().addMonths(3)
```

## What's New

Lots of changes in this version.

* You can use `addMonths` with UTC dates, avoiding call `addUTCMonths` or something (this is a not fully-tested feature).
* Now you can `require('addmonths/auto')` or load `dist/addmonths.auto.js` to inject an `addMonths` method into the `Date.prototype` that becomes the same as the function, but always returns a new instance of the date (and does not requires the first parameter of course).
* The filenames in the "dist" folder has changed. Now they are:
  - addmonths.js - [UMD](https://github.com/umdjs/umd) build for the browser (`window.addMonths`), AMD, and node or browserify-like loaders.
  - addmonths.esm.js - ES6 module (only `import` and `export`, the code is ES5).
  - addmonths.auto.js - Auto-running function (IIFE) to inject `Data.prototype.addMonths`.
* Refactorization of the tests, using [Karma](https://karma-runner.github.io/) and [Jasmine](https://jasmine.github.io/).
* Bower support.

## License

The [MIT License](LICENCE) (MIT)

Copyright (c) 2017 Alberto Martínez (https://github.com/aMarCruz)

[npm-image]:      https://img.shields.io/npm/v/addmonths.svg
[npm-url]:        https://www.npmjs.com/package/addmonths
[license-image]:  https://img.shields.io/npm/l/express.svg
[license-url]:    https://github.com/aMarCruz/jscc-brunch/blob/master/LICENSE
[cq-image]:       https://codebeat.co/badges/c44cf621-7412-4d0d-a132-cf09ee560d48
[cq-url]:         https://codebeat.co/projects/github-com-amarcruz-addmonths-master
