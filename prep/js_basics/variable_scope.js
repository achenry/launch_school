// what's my value? (part 1)
console.log(greeting); // undefined

var greeting = 'Hello world!';

// what's my value? (part 2)
console.log(greeting); // ReferenceError: Cannot access 'greeting' before initialization

let greeting = 'Hello world!';

// what's my value? (part 3)
if (true) {
  let myValue = 20;
}

console.log(myValue); // ReferenceError: greeting is not defined

// what's my value? (part 4)
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction(); // => 1

// what's my value? (part 5)
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction(); // ReferenceError: cannot access 'a' before initialization

// what's my value? (part 6)
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); // => false

// what's my value? (part 7)
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction(); // => 1

// what's my value? (part 8)
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b); // => 2

// what's my value? (part 9)
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a); // TypeError: Assignment to a constant variable.

// what's my value? (part 10)
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // => { firstName: 'Jane', lastName: 'Doe' }
