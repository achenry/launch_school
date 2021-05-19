// 1
let array1 = [1, 2, undefined, 4];
array1.length; // 4

let array2 = [1];
array2.length = 5;
array2.length; // 5

let array3 = [];
array3[-1] = [1];
array3.length; // 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
array4.length; // 3

let array5 = [];
array5[100] = 3;
array5.length; // 101

// 2
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
myArray.filter(el => el % 2 === 0).forEach(el => console.log(el));

// 3
myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
myArray.reduce((acc, el) => {
  el.forEach(innerEl => acc.push(innerEl));
  return acc;
}, []).filter(el => el % 2 === 0).forEach(el => console.log(el));

// 4
myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
let newArray = myArray.map(el => el % 2 === 0 ? 'even' : 'odd');

// 5
let findIntegers = arr => arr.filter(el => Number.isInteger(el));
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

// 6
let oddLengths = arr => arr.filter(el => el.length % 2 !== 0).map(el => el.length);
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// 7
let sumOfSquares = array => array.reduce((acc, next) => acc += next * next, 0);
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

// 8
oddLengths = arr => arr.reduce((acc, next) => (next.length % 2 !== 0 ? acc.concat(next.length) : acc), []);
arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// 9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);

// 10
arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
arr[1][3] = 606;
