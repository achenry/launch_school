// 1
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // => [1, 4, 3], array1 and array2 have equal values - the memory address of the same array object

// 2
// in file exercise2.js, line 4, column 15, function hello, the veriable greeting is not defined in the scope of hello
// hello was called from line 13 column 1 of the global scope

// 3
console.log(Math.sqrt(37));

// 4
function getMax(arr) {
  // let numArr = arr.filter(el => typeof el === 'number')
  // return numArr.sort()[numArr.length - 1];
  return Math.max(...arr);
}
let arr1 = [1, 6, 3, 2];
let arr2 = [-1, -6, -3, -2];
let arr3 = [2, 2];
console.log(getMax(arr1));
console.log(getMax(arr2));
console.log(getMax(arr3));

// 5
function doSomething(string) {
  // generate an arry of individual words in string, reverse their order and return an array of the lenght of each word
  return string.split(' ').reverse().map((value) => value.length);
}

// 6
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(words, pattern) {
  // let matchedWords = [];
  // words.forEach(word => pattern.test(word) ? matchedWords.push(word) : null);
  // console.log(matchedWords);
  return worlds.filter(word => pattern.test(word));
}

// 7
// exception handling catches code errors in a manageable and predictable manner instead of halting the program

// 8
function isNotANumber(num) {
  return !(num === num);
}
console.log(isNotANumber(NaN)); // => true
console.log(isNotANumber('a')); // => false
console.log(isNotANumber(3)); // => false
console.log(isNotANumber(null)); // => false
console.log(isNotANumber({a: 1, b: 2})); // => false
console.log(isNotANumber([1, 2])); // => false

// 9
0 === -0; // true
String(-0); // '0'
let value = -0;
Object.is(value, 0); // false
Object.is(value, -0); // true

function isNegZero(num) {
  return (1 / num) === -Infinity;
}

console.log(isNegZero(-0)); // true
console.log(isNegZero(0)); // false
console.log(isNegZero(-10)); // false
console.log(isNegZero(10)); // false

// 10
let x = "5";
x = x + 1; // "51"
let y = "5";
y++; // 5, coerced to number
