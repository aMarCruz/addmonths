
/**
 * Returns a date occurring `count` months after `startdate` or, if `count` is
 * negative, the date occurring `count` months before `startdate`.
 *
 * If there is an overflow in the day, the date is adjusted to the last valid
 * day of the expected month.
 *
 * This function does not change the original date.
 *
 * @param   {Date}   startdate  - A JavaScript Date object
 * @param   {number} count      - Number of months to add or substract
 * @returns {Date}   New, adjusted date.
 */
export default function addMonths(startdate, count) {

  // With no much test, make a copy of the source to work with it.
  const date = startdate && startdate.setUTCDate && new Date(+startdate)

  // Spec: "If startdate is not a date, returns startdate without changes."
  // (with the local Date contructor it is safe to use `instanceof` here).
  if (!(date instanceof Date)) {
    return startdate
  }

  // Spec: "If startdate is an invalid date (i.e. NaN), returns a new Date
  //    instance with an invalid date."
  // Spec: "If count is count is evaluated as zero, returns a new Date
  //    instance with the same value as startdate.
  count |= 0
  if (!count || isNaN(date)) {
    return date
  }

  // Ok, now the trick here is set the time to midday, so timezone does not
  // change the day or month of the resulting date.
  const offset = +date - date.setUTCHours(12, 0, 0, 0)
  const day = date.getUTCDate()

  // Set the new month with day 2 to make sure the month does not overflows.
  date.setUTCMonth(date.getUTCMonth() + count, 2)

  // ...and grab the resulting (and correct) month
  const month = date.getUTCMonth()

  // Now, restore day and time
  date.setUTCDate(day)

  // If the month has changed, we have an overflow, so set
  // the date to the last day of the previous month.
  if (date.getUTCMonth() !== month) {
    date.setUTCDate(0)
  }

  // We have the correct day and month, now restore the time offset.
  date.setMilliseconds(offset)

  return date
}
