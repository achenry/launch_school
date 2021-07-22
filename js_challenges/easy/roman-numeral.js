class RomanNumeral {
  static ROMAN_NUMERALS = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

  constructor(decimal) {
    this.decimal = decimal;
  }

  toRoman() {
    let charArr = String(this.decimal).split('');
    let base = 1;
    let romanVersion = '';
    for (let idx = charArr.length - 1; idx >= 0; idx--) {
      let digit = Number(charArr[idx]);
      if (digit) {
        if (digit <= 3) {
          romanVersion = RomanNumeral.ROMAN_NUMERALS[base].repeat(digit)
            + romanVersion;
        } else if (digit === 4) {
          romanVersion = RomanNumeral.ROMAN_NUMERALS[base]
            + RomanNumeral.ROMAN_NUMERALS[base * 5]
            + romanVersion;
        } else if (digit === 5) {
          romanVersion = RomanNumeral.ROMAN_NUMERALS[base * 5]
            + romanVersion;
        } else if (digit > 5 && digit < 9) {
          romanVersion = RomanNumeral.ROMAN_NUMERALS[base * 5]
            + RomanNumeral.ROMAN_NUMERALS[base].repeat(digit - 5)
            + romanVersion;
        } else if (digit === 9) {
          romanVersion = RomanNumeral.ROMAN_NUMERALS[base]
            + RomanNumeral.ROMAN_NUMERALS[base * 10]
            + romanVersion;
        }
      }
      base *= 10;
    }

    // let groups = [];
    // while (charArr.length) {
    //   if (RomanNumeral.ROMAN_NUMERALS[charArr[charArr.length - 1] > charArr[charArr.length - 2]]) {
    //     groups.unshift(...charArr.splice(-2, 2));
    //   } else {
    //     groups.unshift(charArr.pop());
    //   }
    // }
    return romanVersion;
  }
}

module.exports = RomanNumeral;
