class BeerSong {
  static NINETY_NINE_BOTTLES = 99;

  static pluralBottles(numBottles) {
    if (numBottles === 1) return 'bottle';
    else if (numBottles > 1) return 'bottles';
  }

  static verse(verseNo) {
    if (verseNo > 1) {
      return `${verseNo} ${BeerSong.pluralBottles(verseNo)} of beer on the wall, ${verseNo} ${BeerSong.pluralBottles(verseNo)} of beer.\n` +
        `Take one down and pass it around, ${verseNo - 1} ${BeerSong.pluralBottles(verseNo - 1)} of beer on the wall.\n`;
    } else if (verseNo === 1) {
      return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
        `Take it down and pass it around, no more bottles ` +
        `of beer on the wall.\n`;
    } else {
      return  `No more bottles of beer on the wall, no more ` +
      `bottles of beer.\nGo to the store and buy some ` +
        `more, 99 bottles of beer on the wall.\n`;
    }
  }

  static verses(verseNoStart, verseNoEnd) {
    let str = '';
    for (let verseNo = verseNoStart; verseNo >= verseNoEnd; verseNo--) {
      str += BeerSong.verse(verseNo);
      if (verseNo > verseNoEnd) {
        str += '\n';
      }
    }
    return str;
  }

  static lyrics() {
    return BeerSong.verses(BeerSong.NINETY_NINE_BOTTLES, 0);
  }
}

module.exports = BeerSong;
