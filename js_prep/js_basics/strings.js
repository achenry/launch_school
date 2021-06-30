// length
"These aren't the droids you're looking for.".length;

// ALL CAPS
'confetti floating everywhere'.toUpperCase();

// repeat
function repeat(n, str) {
  let fullStr = '';
  for (let i = 0; i < n; i++) {
    fullStr += str;
  }
  return fullStr;
}

repeat(3, 'ha'); // 'hahaha'

// multiline string
let str = 'A pirate I was meant to be!\nTrim the sails and roam the sea!';
console.log(str);

// case-insensitive equality
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

string1.toLowerCase() === string2.toLowerCase();
string1.toLowerCase() === string3.toLowerCase();

// contains characters
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
/x/.test(byteSequence) !== null;
byteSequence.includes('x');

// blank? version 1
let isBlank = str => !str;
isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

// blank? version 2
let isBlank = str => (str.length === 0) || (str.includes(' '.repeat(str.length)));
let isBlank = str => !str.trim();
isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true

// capitalize words
'launch school tech & talk'.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
