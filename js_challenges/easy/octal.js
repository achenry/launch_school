class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  validOctal() {
    return !Number.isNaN(Number(this.octal)) && this.octal.split('').every(char => +char < 8);
  }

  toDecimal() {
      // throw new Error('Invalid number.')
    if (!this.validOctal()) return 0;
    return Array.from(this.octal).reverse().reduce((sum, digit, idx) => sum + (+digit * 8**(idx)), 0);
  }
}

module.exports = Octal;
