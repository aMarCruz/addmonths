/*
    Augments the Date.prototype with a new function `addMonths` that
    adds or subtract X months and returns the date without changing
    the source date.
*/
import addMonths from './addmonths'

// eslint-disable-next-line no-extend-native
Object.defineProperty(Date.prototype, 'addMonths', {
  value: function (count) {
    return addMonths(this, count)
  },
  configurable: true,
  writable: true
})
