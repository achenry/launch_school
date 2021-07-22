class Series {
  constructor(series) {
    this.series = series;
  }
  slices(numDigits) {
    if (numDigits > this.series.length) {
      throw new Error('invalid numDigits');
    }
    let subSeries = [];
    for (let idx = 0; idx <= this.series.length - numDigits; idx++) {
      subSeries.push(Array.from(this.series.slice(idx, idx + numDigits)).map(char => +char));
    }
    return subSeries;
  }
}

module.exports = Series;
