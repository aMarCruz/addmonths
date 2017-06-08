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

export default addMonths;
