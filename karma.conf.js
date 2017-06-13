// Karma configuration
// Generated on Mon Jun 12 2017 20:43:23 GMT-0500 (CDT)

/*
const saucelabsBrowsers = require('./spec/saucelabs-browsers').browsers
const isSaucelabs = process.env.SAUCELABS

// run the tests only on the saucelabs browsers
const browsers = isSaucelabs
    ? Object.keys(saucelabsBrowsers) : ['PhantomJS', 'Chrome']*/
const browsers = ['PhantomJS', 'Chrome', 'Firefox']

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'dist/addmonths.js',
      'dist/addmonths.auto.js',
      'spec/test-info.js',
      'spec/test.spec.js'
    ],

    exclude: [],

    preprocessors: {},

    reporters: ['progress'],

    port: 9876,

    colors: true,

    // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,

    autoWatch: true,

    browsers: browsers,

    // if true, Karma captures browsers, runs the tests and exits (for CI)
    singleRun: true,

    concurrency: Infinity
  })
}
