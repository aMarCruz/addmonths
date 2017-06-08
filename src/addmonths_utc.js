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
export default function addMonthsUTC(date, count) {

  if (date && count) {
    const d = (date = new Date(+date)).getUTCDate()

    date.setUTCMonth(date.getUTCMonth() + count, 1)

    const m = date.getUTCMonth()
    date.setUTCDate(d)

    if (date.getUTCMonth() !== m) {
      date.setUTCDate(0)
    }
  }

  return date
}
