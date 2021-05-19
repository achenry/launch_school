let myArr = [2, 'Pete', 2.99, 'another string'];
myArr[2]; // 2.99
myArr[myArr.length - 1]; // 'another string'

let array = [1, 2, 3];
array[1] = 4;
array[array.length] = 10;
array.push(11); // 5
array.push(null, 'xyz'); // 7
array; // [1, 4, 3, 10, 11, null, 'xyz']
array.concat(42, 'abc'); // returns a new array, [1, 4, 3, 10, 11, null, 'xyz', 42, 'abc']
array; // [1, 4, 3, 10, 11, null, 'xyz']
array.pop(); // 'xyz'
array; // [1, 4, 3, 10, 11, null]
array.splice(3, 2) // returns spliced elements, [10, 11]
array; // [1, 4, 3, null]

const constArr1 = [1, 2, 3];
constArr1[1] = 5;
constArr1; // [1, 5, 3]
constArr1 = [4, 5, 6]; // Uncaught TypeError: Assignment to constant variable

const constArr2 = Object.freeze([1, 2, 3]);
constArr2[1] = 5;
constArr2; // [1, 2, 3]

const constArr3 = Object.freeze([1, 2, 3, [4, 5, 6]]);
constArr3[3][1] = 0
constArr3 // [1, 2, 3, [4, 0, 6]]

const constArr4 = Object.freeze([1, 2, 3, Object.freeze([4, 5, 6])]);
constArr4[3][1] = 0
constArr4 // [1, 2, 3, [4, 5, 6]]

// forEach
let array = [1, 2, 3];
array.forEach(num => console.log(num + 2)); // undefined

let numbers = [1, 2, 3, 4];
let squares = [];
numbers.forEach(num => squares.push(num * num));

// map
let squares = numbers.map(num => num * num);

// filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
numbers.filter(num => num > 4); // [5, 6, 7, 8, 9, 10]
numbers; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]

// reduce
let arr = [2, 3, 5, 7];
arr.reduce((accumulator, element) => acumulator + element, 0); // 17
arr.reduce((accumulator, element) => acumulator * element, 1); // 210

let strings = ['a', 'b', 'c', 'd'];
strings.reduce((acc, next) => acc + next.toUpperCase(), ''); // 'ABCD'

// arrays are objects
let arr = [1, 2, 3];
typeof arr; // 'object'
Array.isArray(arr); // true

// length property can be decreased to truncate array
arr.length = 2;
arr; // [1, 2], truncated
arr = [];

// length property can be increased to expand arr to new size, with uninitialized elements
arr.length = 3;
arr; // [ <3 empty items> ]
arr[0]; // undefined
arr.filter(el => el === undefined); // []
arr.forEach(el => console.log(el)); // undefined
arr[1] = 3;
arr; // [ <1 empty item>, 3, <1 empty item> ]
arr.length; // 3
arr.forEach(el => console.log(el)); // => 3
Object.keys(arr); // ['1']

// negative, non-integer, non-numeric indices = properties on array object
arr = [1, 2, 3];
arr[-3] = 4; // 4
arr; // [1, 2, 3, '-3': 4]
arr[3.1415] = 'pi';
arr; // [1, 2, 3, '-3': 4, '3.1415': 'pi]
arr["cat"] = 'Fluffy'; // 'Fluffy'
arr; // [1, 2, 3, '-3': 4, '3.1415': 'pi, cat: 'Fluffy']
arr.length; // 3

// array keys
Object.keys(arr); // ['0', '1', '2', '-3', '3.1415', 'cat']

// unset values != undefined values
let a = new Array(3);
a; // [ <3 empty items> ]
a[0] === undefined; // true

let b = [];
b.length = 3;
b; // [ <3 empty items> ]
b[0] === undefined; // true

let c = [undefined, undefined, undefined];
c; // [undefined, undefined, undefined]
c[0] === undefined;

// length property includes unset values, Object.keys doesn't
let aKeys = Object.keys(a);
a.length; // 3
aKeys.length; // 0

let bKeys = Object.keys(b);
b.length; // 3
bKeys.length; // 0

let cKeys = Object.keys(c);
c.length; // 3
cKeys.length; // 3

// nested arrays
let teams = [['Joe', 'Jennifer'], ['Frank', 'Molly'], ['Dan', 'Sarah']];
teams[2]; // ['Dan', 'Sarah']
teams[2][1]; // 'Sarah'

// array equality
[1, 2, 3] === [1, 2, 3] // false

let a = [1, 2, 3];
let b = a;
a === b; // true, occupy same spot in memory

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// includes
let a = [1, 2, 3, 4, 5];
a.includes(2); // true
a.includes(10); // false

let inner = [3, 4];
let a = [1, 2, inner, 5];
a.includes([3, 4]); // false
a.includes(inner); // true

// sort
let a = [5, 3, 8, 2, 4, 1];
a.sort(); // [1, 2, 3, 4, 5, 8]
a; // destructive, [1, 2, 3, 4, 5, 8]

// slice
let fruits = ['mango', 'orange', 'banana', 'pear', 'apple'];
fruits.slice(1, 3); // ['orange;, 'banana']
fruits.slice(2); // returns rest of array, ['banana', 'pear', 'apple']
fruits.slice(); // duplicates array, ['mango', 'orange', 'banana', 'pear', 'apple']

// reverse
let numbers = [1, 2, 3, 4];
numbers.reverse(); // [4, 3, 2, 1]
numbers; // destructive, [4, 3, 2, 1]

let numbers = [1, 2, 3, 4];
let copyOfNumbers = numbers.slice();
let reversedNumbers = copyOfNumbers.reverse();
reversedNumbers; // [4, 3, 2, 1];
numbers; // [1, 2, 3, 4]
