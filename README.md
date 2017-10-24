[![codebeat badge][cq-image]][cq-url]
[![npm Version][npm-image]][npm-url]
[![License][license-image]][license-url]

# addMonths

Adds or sustract _X_ months to any JavaScript Date.

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

The `addMonths` function returns the date occurring _count_ months after _startdate_ or, if _count_ is negative, the date occurring _count_ months before _startdate_.

If _startdate_ is not a date, returns _startdate_ without changes.

If _count_ is falsy (i.e. zero), returns a new `Date` object with the same value as _startdate_.


### Examples

```js
const addMonths = require('addmonths')

addMonths(new Date(2017, 0, 1), 2)    // 2017-01-01 ==> 2017-03-01
addMonths(new Date(2017, 0, 1), -1)   // 2017-01-01 ==> 2016-12-01
addMonths(new Date(2016, 0, 31), 1)   // 2016-01-31 ==> 2016-02-29
addMonths(new Date(2016, 0, 31), 0)   // new instance with the same value
addMonths('2017-06-12', 1)            // the same string
```

and if you load addmonths/auto:

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
[license-image]:  https://img.shields.io/npm/l/express.svg
[license-url]:    https://github.com/aMarCruz/jscc-brunch/blob/master/LICENSE
[cq-image]:       https://codebeat.co/badges/c44cf621-7412-4d0d-a132-cf09ee560d48
[cq-url]:         https://codebeat.co/projects/github-com-amarcruz-addmonths-master
