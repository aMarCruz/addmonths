/* global addMonths:false, infoDates:false */
/* eslint-disable no-self-compare */

function utc(y, m, d, hr, min, sec, ms) {
  return new Date(Date.UTC(y, m - 1, d, hr | 0, min | 0, sec | 0, ms | 0))
}

function dt(s) {
  if (s[0] === '^') {
    return utc.apply(null, s.slice(1).split(','))
  }
  if ('0123456789'.indexOf(s[0]) >= 0) {
    //s += ' 00:00:00'
    var p = s.split(/[T ]/)
    var a = p[0].split('-').concat(p[1] && p[1].split(':') || [])
    return new Date(a[0], a[1] - 1, a[2], a[3] | 0, a[4] | 0, a[5] | 0, a[6] | 0)
  }
  return new Date(s)
}

function ut(s) {
  if ('0123456789'.indexOf(s[0]) < 0) {
    return dt(s)
  }
  if (s.length <= 10) {
    s += ' 00:00:00'
  }
  var p = s.split(/[T ]/)
  var date = p[0].split('-')
  var time = p[1] && p[1].split(':') || []
  return utc(date[0], date[1], date[2], time[0], time[1], time[2], time[3])
}


describe('addMonths', function () {

  it('If count is evaluated as zero, returns a new Date instance with the same value as startdate', function () {
    var date = new Date()
    var test = new Date(+date)
    var result

    result = addMonths(date, 0)
    expect(result).not.toBe(date)
    expect(+result).toBe(+test)
    result = addMonths(date, '0')
    expect(result).not.toBe(date)
    expect(+result).toBe(+test)
    result = addMonths(date, NaN)
    expect(result).not.toBe(date)
    expect(+result).toBe(+test)
    result = addMonths(date, null)
    expect(result).not.toBe(date)
    expect(+result).toBe(+test)
  })

  it('If startdate is an invalid date, returns a new Date instance with an invalid date', function () {
    var empty = new Date('@')  // Date object with empty content
    var rdate = addMonths(empty, 0)

    expect(Object.prototype.toString.call(rdate)).toBe('[object Date]')
    expect(isNaN(rdate)).toBe(true, 'The expected result must contain NaN')
    expect(rdate).not.toBe(empty)
  })

  it('If startdate is not a date, returns startdate without changes', function () {
    var dnum  = 1234567890
    var dobj  = {}
    var dnull = null
    var dstr  = '2015-02-01T00:00:00Z'

    var dnan = addMonths(NaN, 0)
    expect(dnan !== dnan).toBe(true, 'The expected result is the NaN value')

    expect(addMonths(dnum, 0)).toBe(dnum)
    expect(addMonths(dobj, 0)).toBe(dobj)
    expect(addMonths(dnull, 0)).toBe(dnull)
    expect(addMonths(dstr, 0)).toBe(dstr)
  })

  it('must increment X months with a positive integer', function () {
    var test = infoDates.incX
    var info, result

    for (var i = 0; i < test.length; i++) {
      info = test[i]

      // within the current timezone
      result = addMonths(dt(info[0]), info[1])
      expect(+result).toBe(+dt(info[2]))

      // with utc timezone
      result = addMonths(ut(info[0]), info[1])
      expect(+result).toBe(+ut(info[2]))
    }
  })

  it('must decrement X months with a negative integer', function () {
    var test = infoDates.decX
    var info, result

    for (var i = 0; i < test.length; i++) {
      info = test[i]

      result = addMonths(dt(info[0]), info[1])
      expect(+result).toBe(+dt(info[2]))

      result = addMonths(ut(info[0]), info[1])
      expect(+result).toBe(+ut(info[2]))
    }
  })

  it('must preserve the correct time', function () {
    var test = infoDates.preserveTime
    var info, result

    for (var i = 0; i < test.length; i++) {
      info = test[i]

      result = addMonths(dt(info[0]), info[1])
      expect(+result).toBe(+dt(info[2]))

      result = addMonths(ut(info[0]), info[1])
      expect(+result).toBe(+ut(info[2]))
    }
  })

  it('must limit to last day of the month is there\'s day overflow', function () {
    var test = infoDates.limitToLastDay
    var info, result

    for (var i = 0; i < test.length; i++) {
      info = test[i]

      result = addMonths(dt(info[0]), info[1])
      expect(+result).toBe(+dt(info[2]))

      result = addMonths(ut(info[0]), info[1])
      expect(+result).toBe(+ut(info[2]))
    }
  })

  it('must handle leap years', function () {
    var test = infoDates.leapYears
    var info, result

    for (var i = 0; i < test.length; i++) {
      info = test[i]

      result = addMonths(dt(info[0]), info[1])
      expect(+result).toBe(+dt(info[2]))

      result = addMonths(ut(info[0]), info[1])
      expect(+result).toBe(+ut(info[2]))
    }
  })

})


describe('Date.prototype.addMonths', function () {

  it('always returns a new instance of the date.', function () {
    var date = new Date()
    var test = new Date(+date)
    var dnan = new Date('@')  // Invalid Date
    var result

    result = date.addMonths(0)
    expect(result).not.toBe(date)
    expect(+result).toBe(+test)
    result = date.addMonths(NaN)
    expect(result).not.toBe(date)
    expect(+result).toBe(+test)
    result = date.addMonths(null)
    expect(result).not.toBe(date)
    expect(+result).toBe(+test)
    result = dnan.addMonths(0)
    expect(result).not.toBe(dnan)
    expect(isNaN(+result)).toBe(true)
  })

  it('must increment X months with a positive integer', function () {
    var test = infoDates.incX
    var info, result

    for (var i = 0; i < test.length; i++) {
      info = test[i]
      result = dt(info[0]).addMonths(info[1])
      expect(+result).toBe(+dt(info[2]))
    }
  })

  it('must decrement X months with a negative integer', function () {
    var test = infoDates.decX
    var info, result

    for (var i = 0; i < test.length; i++) {
      info = test[i]
      result = dt(info[0]).addMonths(info[1])
      expect(+result).toBe(+dt(info[2]))
    }
  })

  it('must preserve the correct time', function () {
    var test = infoDates.preserveTime
    var info, result

    for (var i = 0; i < test.length; i++) {
      info = test[i]
      result = dt(info[0]).addMonths(info[1])
      expect(+result).toBe(+dt(info[2]))
    }
  })

  it('must limit to last day of the month is there\'s day overflow', function () {
    var test = infoDates.limitToLastDay
    var info, result

    for (var i = 0; i < test.length; i++) {
      info = test[i]
      result = dt(info[0]).addMonths(info[1])
      expect(+result).toBe(+dt(info[2]))
    }
  })

  it('must handle leap years', function () {
    var test = infoDates.leapYears
    var info, result

    for (var i = 0; i < test.length; i++) {
      info = test[i]
      result = dt(info[0]).addMonths(info[1])
      expect(+result).toBe(+dt(info[2]))
    }
  })

})
