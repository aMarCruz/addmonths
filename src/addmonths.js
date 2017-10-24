
/**
 * Adds or subtract X months to any date.
 * Use a negative number to subtract.
 * If there is an overflow in the day, the date is adjusted to the last valid day of the month.
 *
 * This function does not change the original date.
 *
 * @param   {Date}   startdate  - A JavaScript Date object
 * @param   {number} count      - Number of months to add or substract
 * @returns {Date}   New, adjusted date.
 */
export default function addMonths(startdate, count) {

  // Invalid dates created with the Date() constructor have getDate
  // method so we will to re-check with the copy of startdate.
  if (startdate && startdate.getDate) {

    // Make a copy
    const date = new Date(+startdate)

    // Skip work if date is invalid or there's nothing to change.
    if (!isNaN(date) && (count |= 0)) {

      // The trick here is set the time to midday, so timezone does
      // not change the day or month of the resulting date.
      const offset = +startdate - date.setUTCHours(12, 0, 0, 0)
      const day = date.getUTCDate()

      // Set the new month with day 2 to make sure the month does not overflow
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

    }

    return date
  }

  return startdate
}
