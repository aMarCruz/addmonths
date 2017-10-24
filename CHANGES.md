# Changes for addMonths

#### oct/2017 - v1.0.0
* Production ready version.
* Updated tests.
* Updated devDependencies.

#### oct/2017 - v0.3.1
* Fixes typo in the README.

#### jul/2017 - v0.3.0

* Returns NaN for Dates evaluated to NaN.
* Include TypeScript def (CommonJS).
* Moved karma configuration to spec/.

#### jun/2017 - v0.2.0

Lots of changes in this version.

* You can use `addMonths` with UTC dates, avoiding call `addUTCMonths` or something (this is a not fully-tested feature).
* Now you can `require('addmonths/auto')` or load `dist/addmonths.auto.js` to inject an `addMonths` method into the `Date.prototype` that becomes the same as the function, but always returns a new instance of the date (and does not requires the first parameter of course).
* The filenames in the "dist" folder has changed. Now they are:
  - addmonths.js - [UMD](https://github.com/umdjs/umd) build for the browser (`window.addMonths`), AMD, and node or browserify-like loaders.
  - addmonths.esm.js - ES6 module (only `import` and `export`, the code is ES5).
  - addmonths.auto.js - Auto-running function (IIFE) to inject `Data.prototype.addMonths`.
* Refactorization of the tests, using [Karma](https://karma-runner.github.io/) and [Jasmine](https://jasmine.github.io/).
* Bower support.

#### jun/2017 - v0.1.0

First public release.
