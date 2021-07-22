class PerfectNumber {

  static classify(num) {
    if (num < 0 || !Number.isInteger(num)) {
      throw new Error('Invalid number');
    }

    if (PerfectNumber.isPerfect(num)) return "perfect";
    else if (PerfectNumber.isAbundant(num)) return "abundant";
    else if (PerfectNumber.isDeficient(num)) return "deficient";
  }

  static isPerfect(num) {
    return PerfectNumber.aliquotSum(num) === num;
  }

  static isAbundant(num) {
    return PerfectNumber.aliquotSum(num) > num;
  }

  static isDeficient(num) {
    return PerfectNumber.aliquotSum(num) < num;
  }

  static aliquotSum(num) {
    let sum = 0;
    for (let divisor = 1; divisor < num; divisor++) {
      if (num % divisor === 0) {
        sum += divisor;
      }
    }
    return sum;
  }
}

module.exports = PerfectNumber;
