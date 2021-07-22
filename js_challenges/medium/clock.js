class Clock {
  static MINUTES_PER_HOUR = 60;
  static HOURS_PER_DAY = 24;

  static at(hour, minutes) {
    let clock = new Clock();
    clock.hour = hour;
    clock.minutes = minutes || 0;
    return clock;
  }

  add(minutes) {
    this.hour += Math.floor(minutes / Clock.MINUTES_PER_HOUR);
    this.minutes += minutes % Clock.MINUTES_PER_HOUR;

    this.hour += Math.floor(this.minutes / Clock.MINUTES_PER_HOUR);
    this.minutes = this.minutes % Clock.MINUTES_PER_HOUR;

    this.hour = this.hour % Clock.HOURS_PER_DAY;

    return this;
  }

  subtract(minutes) {
    this.hour -= Math.floor(minutes / Clock.MINUTES_PER_HOUR);
    this.minutes -= minutes % Clock.MINUTES_PER_HOUR;

    if (this.minutes < 0) {
      this.hour -= 1;
      this.minutes = Clock.MINUTES_PER_HOUR + this.minutes;
    }

    if (this.hour < 0) {
      this.hour = Clock.HOURS_PER_DAY + (this.hour % Clock.HOURS_PER_DAY);
    }

    return this;
  }

  isEqual(otherClock) {
    return this.hour === otherClock.hour && this.minutes === otherClock.minutes;
  }

  static zeroPadNumber(num) {
    return String(num).padStart(2, '0');
  }

  toString() {
    return `${Clock.zeroPadNumber(this.hour)}:${Clock.zeroPadNumber(this.minutes)}`;
  }

}

module.exports = Clock;
