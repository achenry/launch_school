let answer = 41; // allocated memory and stores value there
answer = 42; // reassign
console.log(answer)

// declare, initialize, assign
let firstName // initialised w value undefined
firstName = 'Mitchell' // initializer
console.log(`Your first name is ${firstName}`)
firstName = 'Joe' // reassign, returns RHS expression
firstName = 42
let firstName = 'Metchell' // declaration and initialization, returns undefined

// const - immutable binding to their values, cannot assign new value
const firstName = 'Mitchell'
const INTEREST_RATE = 0.0783;
INTEREST_RATE= 0.0788; // Uncaught TypeError: Assignment to constant variable.
const foo; // SyntaxError: Missiing initializer in const declaration

// scope
{
  // this is a block
  let foo = 42;
  console.log(foo);
}

if (answer === 'yes') {
  // this is a block
  console.log('yes');
} else {
  // this is a block
  console.log('nope');
}

while (answer !== 'no') {
  // this is a block
  doSomething();
}

function foo {
  // not technically a block, but we can treat it as one
  let foo = 42; // foo has block scope
  console.log(foo);
}

let foo = {
  // this is not a block
  bar: 42,
};

if (1 === 1) {
  let a = 'foo';
}

console.log(a); // ReferenceError: a is not defined

let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a); // => 'bar

// all undeclared variables have global scope
p = 'foo';