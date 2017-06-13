function addMonths(startdate, count) {
  if (startdate && startdate.getDate) {
    var date = new Date(+startdate);
    if (!isNaN(date)) {
      if ((count |= 0)) {
        var offset = +startdate - date.setUTCHours(12, 0, 0, 0);
        var day = date.getUTCDate();
        date.setUTCMonth(date.getUTCMonth() + (count | 0), 2);
        var month = date.getUTCMonth();
        date.setUTCDate(day);
        if (date.getUTCMonth() !== month) {
          date.setUTCDate(0);
        }
        date.setMilliseconds(offset);
      }
      return date
    }
  }
  return startdate
}

export default addMonths;
