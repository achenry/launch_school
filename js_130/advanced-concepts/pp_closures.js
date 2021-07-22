// 1
let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // 3
console.log(incrementCounter()); // 4

// since counter has global (visibility) scope, it is initialized to 0 only once
// and closure ensures that the functions returned by makeCounter contain an envelop
// with a pointer to that variable

// 2
function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 1

incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 1

// counter is declared and initialized in the returned function,
// so closure plays no part in its execution

// 3
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

// two invocations of makeCounter each return a function
// that has access to a distinct local variable named counter

// 4
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1()); // 1
console.log(incrementCounter1()); // 2

console.log(incrementCounter2()); // 1
console.log(incrementCounter2()); // 2

// each returned function has a different counter variable

// 5
function makeMultipleLister(num) {
  return function() {
    for (let multiple = num; multiple < 100; multiple += num) {
      console.log(multiple);
    }
  };
}
let lister = makeMultipleLister(17);
lister();

// 6
let total = 0;

function add(num) {
  return total += num;
}

function subtract(num) {
  return total -= num;
}

console.log(add(1));       // 1
console.log(add(42));      // 43
console.log(subtract(39)); // 4
console.log(add(6));       // 10

// 7
function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); // prod === 2
let result = bar(3); // result === prod === 6
result += bar(4); // prod === 24, result === 30
result += bar(5); // prod === 120, result = 150
console.log(result); // 150
// even though prod is out of scope when we call bar
// closure lets bar retain access to prod

// 8
function later(func, arg) {
  return () => func(arg);
}
const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

// 9
function later2(func, firstArg) {
  return (secondArg) => func(firstArg, secondArg);
}
const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

// 10
"use strict";
function bind(context, func) {
  return () => func.call(context);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }
