/**
 * Adds or subtract X months to any date.
 * Use a negative number to subtract.
 * If there is an overflow in the day, the date is adjusted to the last valid day of the month.
 *
 * This function does not change the given date.
 *
 * @param   {Date}   date - The JavaScript data to adjust
 * @param   {number} count - Number of months to add or substract,
 * @returns {Date}   New adjusted date
 */
export default function addMonths(date, count) {

  if (date && count) {
    const d = (date = new Date(+date)).getDate()  // make a copy

    // Set the new month with day 1 and remember the month
    date.setMonth(date.getMonth() + count, 1)

    // Remember the month before set the day
    const m = date.getMonth()
    date.setDate(d)

    //If the month has changed, we have an overflow
    if (date.getMonth() !== m) {
      date.setDate(0)             // last day of previous month
    }
  }

  return date
}
