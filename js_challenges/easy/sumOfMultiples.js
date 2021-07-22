class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = multiples.length > 0 ? multiples : [3, 5];
  }

  static to(maxNum) {
    return (new SumOfMultiples()).to(maxNum);
  }

  to(maxNum) {
    let sum = 0;
    let multiples = this.multiples.slice().sort((a, b) => a - b);
    for (let num = multiples[0]; num < maxNum; num++) {
      if (multiples.some(factor => num % factor === 0)) {
        sum += num;
      }
    }
    return sum;
  }
}

module.exports = SumOfMultiples;
