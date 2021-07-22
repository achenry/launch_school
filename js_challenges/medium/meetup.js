class Meetup {
  static WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  static SCHEDULES = {
    'first': [1, 2, 3, 4, 5, 6, 7],
    'second': [8, 9, 10, 11, 12, 13, 14],
    'third': [15, 16, 17, 18, 19, 20, 21],
    'fourth': [22, 23, 24, 25, 26, 27, 28],
    'fifth': [29, 30, 31, 32, 33, 34, 35],
    'last': [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    'teenth': [13, 14, 15, 16, 17, 18, 19],
  };

  static LAST_DAY_OF_MONTH = 31;

  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(weekday, schedule) {
    let weekdayIdx = Meetup.WEEKDAYS.indexOf(weekday.toLowerCase());
    schedule = schedule.toLowerCase();

    // go through each day of this month/year
    let day = Meetup.LAST_DAY_OF_MONTH;
    this.day = null;
    let date;
    while (day >= 0) {
      date = new Date(this.year, this.month - 1, day);
      if (this.isSameMonth(date)) {
        if (date.getDay() === weekdayIdx && Meetup.SCHEDULES[schedule].includes(day)) {
          this.day = day;
          break;
        }
      }
      day--;
    }
    // if the weekday === weekday, increment dayCount
    // if it is the schedule'th weekday, set this.day to the day of the month
    if (this.day) return this;
    else return null;
  }

  isSameMonth(date) {
    return date.getMonth() === this.month - 1;
  }

  toString() {
    let date = new Date(this.year, this.month - 1, this.day);
    return date.toString();
  }
}

module.exports = Meetup;
