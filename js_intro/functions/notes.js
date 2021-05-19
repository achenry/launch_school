function sayHi() {
  console.log("Hi!");
}

function add(left, right) { // left & right are parameters (placeholders) here
  let sum = left + right; // left & right are arguments (values) here
  return sum;
}

let sum = add(3, 6); // 3 and 6 are arguments

function add(a, b) {
  return a + b;
}

add(2, 3); // returns 5
let twoAndThree = add(2, 3); // caller
console.log(twoAndThree); // => 5

function foo() {
  function bar() {
    // private nested function
    console.log("BAR");
  }
  bar(); // => BAR
}

foo();
// bar(); // ReferenceError: bar is not defined

// non-mutating methods
let name = "Pete Hanson";
console.log(name.toUpperCase()); // => 'PETE HANSON', returns a new value
console.log(name); // => 'Pete Hanson'

// mutating the caller
let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop(); // alterns the array in-place, mutates the caller
console.log(oddNumbers); // => [1, 3, 5, 7]

// mutating the arguments
function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive); // => [9, 2, 3, 4, 5]

// non-destructive function
function addToArray(array) {
  return array.concat(10);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive)); // => [1, 2, 3, 4, 5, 10]
console.log(oneToFive); // => [1, 2, 3, 4, 5]

// function composition
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum); // => 65

let difference = subtract(80, 10);
console.log(difference); // => 70

console.log(add(20, 45)); // => 65
console.log(subtract(80, 10)); // => 70

function multiply(a, b) {
  return a * b;
}

console.log(multiply(add(20, 45), subtract(80, 10))); // => 4550

// function declaration - invoking a function before declaring it
greetPeople();

function greetPeople() {
  console.log("Good Morning!");
}

// function expression
let greetPeople = function() {
  console.log("Good Morning!");
};

greetPeople();

(function greetPeople() { // this is a function expression, because the word function is not at the very beginning
  console.log("Good Morning!");
});

function makeGreeter(name) { // this is a function declaration
  return function greeter() { // this is a function expression
    console.log(`Hello ${name}`);
  }
}

// arrow function
let greetPeople = () => console.log("Good Morning!");
greetPeople();

let add = (a, b) => a + b; // implicit return
let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};
let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));

// call stack
function first() {
  console.log("first function");
}

function second() {
  first();
  console.log("second function");
}

second(); // update main stack frame with current program location, creates a new stack frame for the second function and placed it on the top of the call stack (pushed onto the stack)
console.log("main function");