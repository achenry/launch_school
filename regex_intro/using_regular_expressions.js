// match
if (text.match(/^https?:\/\/\S+$/)) {
  fetchUrl(text);
}

// split
let record = "xyzzy\t3456\t334\tabc";
let fields = record.split("\t"); // ['xyzzy', '3456', '334', 'abc']

record = "xyzzy  3456  \t  334\t\t\tabc";
fields = record.split(/\s+/); // ['xyzzy', '3456', '334', 'abc']

// transformations
let text = 'Four score and seven';
let vowelless = text.replace(/[aeiou]/g, '*'); // 'F**r sc*r *nd s*v*n'

text = 'We read "War of the Worlds".';
console.log(text.replace(/(['"]).+\1/, '$1The Time Machine$1')); // => We read "The Time Machine"

// EXERCISES
// 1 - Write a method that returns true if its argument looks like a URL, false if it does not.
let isUrl = (text) => !!text.match(/^https?:\/\/\S+$/);
isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false

// 2 - Write a method that returns all of the fields in a haphazardly formatted string. A variety of spaces, tabs, and commas separate the fields, with possibly multiple occurrences of each delimiter.
let fields = (text) => text.split(/[\t ,]+/);
fields("Pete,201,Student");
// -> ['Pete', '201', 'Student']

fields("Pete \t 201    ,  TA");
// -> ['Pete', '201', 'TA']

fields("Pete \t 201");
// -> ['Pete', '201']

fields("Pete \n 201");
// -> ['Pete', "\n", '201']

// 3 - Write a method that changes the first arithmetic operator (+, -, *, /) in a string to a '?' and returns the resulting string. Don't modify the original string.
let mysteryMath = text => text.replace(/[+\-*\/]/, '?');
mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

// 4 - Write a method that changes every arithmetic operator (+, -, *, /) to a '?' and returns the resulting string.
let mysteriousMath = text => text.replace(/[+\-*\/]/g, '?');
mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

// 5 - Write a method that changes the first occurrence of the word apple, blueberry, or cherry in a string to danish.
let danish = text => text.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'

// 6 - write a method that changes dates in the format 2016-06-17 to the format 17.06.2016. You must use a regular expression and should use methods described in this section.

// let formatDate = text => text.split(/\-/).reverse().join(".");
let formatDate = text => text.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1')

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)

// 7 - write a method that changes dates in the format 2016-06-17 or 2016/06/17 to the format 17.06.2016.
let formatDate = text => text.replace(/^(\d\d\d\d)([\-\/])(\d\d)\2(\d\d)$/, '$4.$3.$1');
formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2017/05/03'); // -> '03.05.2017'
formatDate('2015/01-31'); // -> '2015/01-31' (no change)
