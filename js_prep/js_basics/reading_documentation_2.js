// style
let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log(`The ${iceCreamTaste} ice cream melted.`);

// data types
// primitive - number, string, object, undefined, null

// largest number
Number.MAX_VALUE;

// arithmetic operator precedence
4 * 5 + 3 ** 2 / 10; // (4 * 5) + ((3 ** 2) / 10) == 20.9

// date
Date.now(); // number of milliseconds elapsed since January 1 1970 00:00:00 UTC

// which year is this?
let today = new Date();
today.getYear(); // deprecated
today.getFullYear(); // year of date according to local time, should use this one

// argument signatures
// join expects one argument, otherwise takes first argument

// string concatenation
"string1" + "string2"
"string1".concat("string2", "string3")

// SyntaxError
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

// TypeError
let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}
