class Scrabble {
  static VALUES = {
    1: 'aeioulnrst'.split(''),
    2: 'dg'.split(''),
    3: 'bcmp'.split(''),
    4: 'fhvwy'.split(''),
    5: 'k'.split(''),
    8: 'jx'.split(''),
    10: 'qz'.split(''),
  };

  constructor(word) {
    this.word = (word || '').toLowerCase().trim();
  }

  score() {
   return Scrabble.score(this.word);
  }

  static score(word) {
    word = word.toLowerCase().trim();
    let score = 0;
    Array.from(word.toLowerCase()).forEach(char => {
      score += +Object.entries(Scrabble.VALUES).find(([_, charArr]) => charArr.includes(char))[0];
    });
  return score;
  }

}

module.exports = Scrabble;
