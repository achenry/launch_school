// VARIABLES AS POINTERS

// declare a variable named count and initialise it to a value of 1
// mem addr: 0x1234, value: 1
let count = 1;

// reassign count to a new primitive value, 2
// mem addr: 0x1234, value: 2
count = 2;

let a = 5;
let b = a; // assign b to value of a
a = 8; // reassign variable a to a value of 8
a; // 8
b; // 5

// a and b point to different memory locations

// declare variable obj and initialise it to a value
// obj - mem addr: 0x1248, value: 0x40011fe0
// Object - mem addr: 0x40011fe0, value: { a: 1 }
let obj = { a: 1 };

// reassign obj to a new object
// obj - mem addr: 0x1248, value: 0x40012000
// Object - mem addr: 0x40012000, value: { b: 2 }
obj = { b: 2 };

// mutate the object referenced by obj by adding a new property
// obj - mem addr: 0x1248, value: 0x40012000
// Object - mem addr: 0x40012000, value: { b: 2, c: 3 }
obj.c = 3;

let c = [1, 2];
let d = c;
c = [3, 4]; // creates a new array
c; // [3, 4]
d; // [1, 2]

let e = [1, 2];
let f = e; // copies the pointer
e.push(3, 4); // push mutates the array, vs map which doesn't
e; // [1, 2, 3, 4]
f; // [1, 2, 3, 4]
// e and f are aliases for the same value

let g = ['a', 'b', 'c'];
let h = g; // copies the pointer
g[1] = 'x'; // mutate array referenced by g and h
g; // ['a', 'x', 'c']
h; // ['a', 'x', 'c']

// METHOD CHAINING
let str = 'Pete Hanson';
let names = str.toUpperCase().split(' ').reverse().join(', ');
names = str.toUpperCase()
           .split(' ')
           .reverse()
           .join(', ');
names = str.toUpperCase()
  .split(' ')
  .reverse()
  .join(', ');
names = str.toUpperCase().
            split(' ').
            reverse().
            join(', ');
console.log(names); // => HANSON, PETE


// REGULAR EXPRESSION
/o/.test('bobcat'); // true
/l/.test('bobcat'); // false

if (/b/.test('bobcat')) {
  console.log("Yes, it contains the letter 'b'");
} else {
  console.log("No, it doesn't contain the letter 'b'");
}

"bobcat".match(/x/); // null, No match
"bobcat".match(/[bct]/g); // ['b', 'b', 'c', 't'], Global match
"bobcat".match(/b((o)b)/); // [ 'bob', 'ob', 'o', index: 0, input: 'bobcat', groups: undefined ], Singular match with groups

function has_a_or_e(string) {
  let results - string.match(/[ae]/g);
  if (results) {
    // a non-null return value from match is truthy
    console.log(`We have a match! ${results}`);
  } else {
    // a null return value from match is falsy
    console.log('No match here.');
  }
}

let regex = /b/g;
let str = "ababa";
console.log(regex.test(str)); // => true
console.log(regex.test(str)); // => true
console.log(regex.test(str)); // => false
console.log(regex.test(str)); // => true
console.log(regex.test(str)); // => true
console.log(regex.test(str)); // => false

// MATH OBJECT
Math.sqrt(36); // 6
Math.sqrt(2); // 1.4142135623730951, 17 sig digits
Math.PI; // 3.141592653589793

// DATES
let date = new Date('December 25, 2012');
date.getDay(); // 2, where 0 corresponds to Sunday

function getDayOfWeek(date) {
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[date.getDay()];
}

console.log(getDayOfWeek(date));

// EXCEPTIONS
try {
  // perform an operation that may produce an error
} catch (exception) {
  // an error occurred, do sth about it e.g. log the error
} finally {
  // optional block executes regardless of whether an exception occurs
}

let names = ['bob', 'joe', 'steve', undefined, 'frank'];
names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong');
  }
});

function foo(number) {
  if (typeof number !== 'number') {
    throw new TypeError('expected a number');
  }

  // we're guaranteed to have a number here
}

// SyntaxError before runtime
console.log("hello");
function foobar()
  // some coe
}
foobar();
// SyntaxError: Unexpected token '}'

// SyntaxError during runtime
JSON.parse('not really JSON'); // SyntaError: Unexpected token i in JSON at position 0

// STACK TRACES
function foo() {
  console.log(bar);
}
foo();
