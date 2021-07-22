class Diamond {
  static ALPHABET = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  static makeDiamond(letter) {
    let letterIdx = Diamond.ALPHABET.indexOf(letter);
    let idx = 0;
    let firstHalf = true;
    let diamondStr = '';
    while (true) {
      if (Diamond.ALPHABET[idx] === letter.toUpperCase()) {
        firstHalf = false;
      }

      if (Diamond.ALPHABET[idx] === 'A') {
        let outerSpaces = ' '.repeat(letterIdx);
        diamondStr += `${outerSpaces}A${outerSpaces}\n`;
        if (!firstHalf) break;
      } else {
        let outerSpaces = ' '.repeat(letterIdx - idx);
        let innerSpaces = ' '.repeat((2 * idx) - 1);
        diamondStr += `${outerSpaces}${Diamond.ALPHABET[idx]}${innerSpaces}${Diamond.ALPHABET[idx]}${outerSpaces}\n`
      }
      if (firstHalf) idx++;
      else idx--;
    }
    return diamondStr;
  }
}

module.exports = Diamond;
