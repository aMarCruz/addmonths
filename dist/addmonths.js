(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.addMonths = factory());
}(this, (function () { 'use strict';

function addMonths(startdate, count) {
  var date = startdate && startdate.setUTCDate && new Date(+startdate);
  if (!(date instanceof Date)) {
    return startdate
  }
  count |= 0;
  if (!count || isNaN(date)) {
    return date
  }
  var offset = +date - date.setUTCHours(12, 0, 0, 0);
  var day = date.getUTCDate();
  date.setUTCMonth(date.getUTCMonth() + count, 2);
  var month = date.getUTCMonth();
  date.setUTCDate(day);
  if (date.getUTCMonth() !== month) {
    date.setUTCDate(0);
  }
  date.setMilliseconds(offset);
  return date
}

return addMonths;

})));
