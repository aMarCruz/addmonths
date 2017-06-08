'use strict'

/* eslint no-var:0 */

var addMonths = require('../')
var exitCode = 0

function dt(y, m, d, hr, min, sec, ms) {
  return new Date(y, m - 1, d, hr | 0, min | 0, sec | 0, ms | 0)
}

function err(data, result) {
  var cnt = (data[0] > 0 ? ' + ' : ' - ') + Math.abs(data[0])
  console.error(' Error with: ' + data[1].toLocaleString() + cnt)
  console.error('   expected: ' + data[2].toLocaleString())
  console.error('        got: ' + result.toLocaleString())
  console.error()
  exitCode = 1
}

var table = [
  [1, dt(2016, 1, 31), dt(2016, 2, 29)],      // 2016 was a leap year
  [1, dt(2017, 1, 31), dt(2017, 2, 28)],
  [1, dt(2018, 1, 1),  dt(2018, 2, 1)]
]

console.log('Testing addMonths...')
for (var i = 0; i < table.length; i++) {
  var data = table[i]

  var result = addMonths(data[1], data[0])
  if (+result !== +data[2]) {
    err(data, result)
  }
}

if (exitCode) {
  process.exit(1)
} else {
  console.log('Done.')
}
