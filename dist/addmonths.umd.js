(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.addMonths = factory());
}(this, (function () { 'use strict';

function addMonths(date, count) {
  if (date && count) {
    var d = (date = new Date(+date)).getDate();
    date.setMonth(date.getMonth() + count, 1);
    var m = date.getMonth();
    date.setDate(d);
    if (date.getMonth() !== m) {
      date.setDate(0);
    }
  }
  return date
}

return addMonths;

})));
