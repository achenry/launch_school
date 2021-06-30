// sum
let sum = (a, b) => a + b;
sum(22, 10); // 32

// log quote
let brendanEichQuote = () => console.log('Always bet on JavaScript.');
brendanEichQuote();

// cite the author
function cite(author, quote) {
  console.log(`${author} said: "${quote}"`);
}
cite('Brendan Eich', 'Always bet on JavaScript.');

// squared number
let squaredNumber = num => num * num;
squaredNumber(3); // 9

// display division
function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree; // => 3 / 1 = 3
                  //    6 / 2 = 3
                  //    9 / 3 = 3
                  //    12 / 4 = 3
                  //    15 / 5 = 3
                  //    18 / 6 = 3
                  //    21 / 7 = 3
                  //    24 / 8 = 3
                  //    27 / 9 = 3
                  //    30 / 10 = 3

// three-way comparison
function compareByLength(str1, str2) {
  let diff = str1.length - str2.length;
  if (diff > 0) {
    return 1;
  } else if (diff < 0) {
    return -1;
  } else {
    return 0;
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

// transformation
'Captain Ruby'.replace('Ruby', 'JavaScript');
'Captain Ruby'.substring(0, 8) + 'JavaScript';
'Captain Ruby'.split(' ')[0] + 'JavaScript';

// internationalization 1
function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Ola!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'

// locale part 1
let extractLanguage = function(locale) {
  return locale.split('_')[0];
};
extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

// locale part 2
let extractRegion = function(locale) {
  return locale.split('_')[1].split('.')[0];
};
extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

// internationalization 2
function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);
  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
