const SpecReporter = require('jasmine-spec-reporter').SpecReporter

jasmine.getEnv().clearReporters()
jasmine.getEnv().addReporter(new SpecReporter({}))

global.addMonths = require('../')
require('../auto')
require('./test-info.js')
require('./test.spec.js')
