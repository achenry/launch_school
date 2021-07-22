class Anagram {

  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(possibleAnagrams) {
    return possibleAnagrams.filter(possibleAnagram => (
      possibleAnagram.toLowerCase() !== this.word &&
      possibleAnagram.toLowerCase().split('').sort().join('') === this.word.split('').sort().join('')
    ));
  }
}

module.exports = Anagram;
