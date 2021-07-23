# Iteration and the Todo Class

# Advanced Concepts

## The `var` Statement
- how does `var` work?
- how does it differ from `let` and `const`

no way to create constants

when used at the program's top-level, `var` keyword adds property to the `global` or `window` object, `let` does not

`let` is block-scoped, `var` is function-scoped

## More About Scope
- What do we mean by declared scope, visibility scope and lexical scope?
- What do we mean by global scope and local scope?
- What do we mean by inner scope and outer scope?
- What do we mean by function scope and block scope when talking about declared scope?
- What do we mean by function scope and block scope when talking about visibility scope?

### Visibility Scope
where a particular identifier - a variable, function or class name -
is available for use by your code

global scope if available throughout code, local scope otherwise

```javascript
let foo1 = 1; // global
var bar1 = 2; // global

if (true) {
  let foo2 = 3; // local
  var bar2 = 4; // global
}

function xyzzy() { // global
  let foo3 = 5; // local
  var bar3 = 6; // local

  if (true) {
    let foo4 = 7; // local
    var bar4 = 8; // local
  }
}
```

### Declared Scope
how a particular identifier is declared

`let, const, class` - block scope

`var, function` - function scope

```javascript
let foo1 = 1; // block scope
var bar1 = 2; // function scope

if (true) {
  let foo2 = 3; // block scope
  var bar2 = 4; // function scope
}

function xyzzy() { // function scope
  let foo3 = 5; // block scope
  var bar3 = 6; // function scope

  if (true) {
    let foo4 = 7; // block scope
    var bar4 = 8; // function scope
  }
}
```

### Lexical Scope
variables declared inside a function or block vs.
 variables declared outside of that function or block

 how the structure of the code determines what variables are
 accessible or inaccessible at any point in the program

 inner scope vs outer scope

 ```javascript
let foo1 = 1; // outer scope of xyzzy, outer scope of if block on line 3
var bar1 = 1; // outer scope of xyzzy, outer scope of if block on line 3

if (true) {
  let foo2 = 3; // inner scope of if block on line 3
  var bar2 = 3; // outer scope of xyzzy, outer scope of if block on line 3
}

function xyzzy() {
  let foo3 = 5; // inner scope of xyzzy, outer scope of if block on line 10
  var bar3 = 5; // inner scope of xyzzy, outer scope of if block on line 10

  if (true) {
    let foo4 = 7; // inner scope of if block on line 10
    var bar4 = 7; // inner scope of xyzzy, outer scope of if block on line 10
  }
}
```

## Hoisting
- What is hoisting?
- How do `var`, `let` and `const` interact with hoisting? How do they differ?
- How do functions and classes interact with hoisting? How do they differ?
- What part does hoisting play in the way a specific program works?
- How does hoisting really work?
- Hoisting & `var` statement practise questions

JS operates in two main phases:
1. creation phase - find all the variable, function and class declarations, record name and designate scope
2. execution phase - function-scoped declarations are moved to the function's beginning,
block-scoped declarations are moved to the block's start

```javascript
console.log(getName());

function getName() {
  return "Pete";
}
```

### Temporal Dead Zone

when a `var` variable is hoisted, JS gives it an initial value of `undefined`.
```javascript
console.log(bar); // undefined
var bar = 3;
console.log(bar); // 3
```

when `let` and `const` variables are hoisted, they are not given an initial value at all,
instead they are left unset/not defined.
They are in the Temporal Dead Zone (TDZ) until the initialization code runs during the execution phase.

```javascript
console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
let foo;

console.log(qux); // ReferenceError: Cannot access 'qux' before initialization
const qux = 42;
```

error message differs if variable isn't declared at all

```javascript
console.log(baz); // ReferenceError: bz is not defined
```

### Hoisting for Function Declarations
JS hoists function declarations and body to the top of the scope

```javascript
console.log(hello());

function hello() {
  return 'hello world';
}
```

function declarations have function scope

```javascript
function foo() {
  return bar();

  function bar() {
    return 42;
  }
}
```

you can get different behaviours when function declarations are nested inside non-function blocks

if you must nest a function inside a block, use a function expression

### Hoisting for Function Expressions
same as for variable declarations

```javascript
console.log(hello()); // TypeError: hello is not a function

var hello = function() {
  return 'hello world';
};
```

### Hoisting Variable and Function Declarations
when a `var` variable AND a function declaration have the same name and are hoisted,
the function declaration gets hoisted and the variable declaration is discarded

```javascript
bar(); // "world"
var bar = 'hello';

function bar() {
  console.log('world');
}
```

```javascript
var bar = 'hello';
bar(); // TypeError: bar is not a function

function bar() {
  console.log('world');
}
```

### Best Practise
- use `let` and `const` instead of `var` whenever possible
- if you must use `var`, declare all variables at the top of the scope
- if you can use `let` or `const`, declare them as close as possible to their first usage
- declare functions before calling them

### Hoisting isn't real
top down evaluation during creation phase, so SyntaxError due to double declarations occurs on second declaration

## Strict Mode
- What is strict mode? How does it differ from sloppy mode?
- How do you enable strict mode at the global or function level?
- Describe how code behaves under both strict and sloppy mode.
- When is strict mode enabled automatically?
- When should you use (or not use) strict mode?

### What does strict mode do?
- throws errors for otherwise silent errors in sloppy mode
- prevents some code that can inhibit JS's ability to optimize a program so that it runs faster
- prohibits using names and syntax that may conflict with future versions of JS

### Enabling
add to beginning of program file or function definition
using single or double quotes, but not backticks

nested functions inherit strict mode from the surrounding scope
```javascript
"use strict";
```

the `"use strict"` statement is an example of a pragma -
tells a compiler, interpreter or other translator to process the code in a different way

once strict mode is enabled for a program/function, it can't be disabled

JS enables strict mode automatically within the body of a `class` and with JS modules

strict mode is lexically scoped - only applies to code that enabled it
e.g strict mode function invoked within sloppy mode function runs in strict mode
 and sloppy mode function invoked in strict mode function runs in sloppy mode

#### Implicit Global Variables
 strict mode sets the implicit execution context for function invocations to `undefined` instead of the `global` object

 the program will raise an error if you try to assign a value to a variable that hasn't been declared

sloppy mode
```javascript
function foo() {
  bar = 3.1415;
}

foo();
console.log(bar); // 3.1415
```

strict mode
```javascript
"use strict";

function foo() {
  bar = 3.1415; // ReferenceError: bar is not defined
}

foo();
console.log(bar);
```

declaring global variables in strict mode
```javascript
"use strict";

let bar;

function foo() {
  bar = 3.1415;
}

foo();
console.log(bar); // 3.1415
```

#### Implicit Context in Functions
sloppy mode
```javascript
let obj = {
  a: 5,
  go() {
    this.a = 42;
  },
};

let doIt = obj.go;
doIt();
console.log(obj.a); // 5
```

strict mode - execution context when using function call syntax is `undefined`
```javascript
"use strict";

let obj = {
  a: 5,
  go() {
    this.a = 42; // TypeError: Cannot set property 'a' of undefined
  },
};

let doIt = obj.go;
doIt();
console.log(obj.a); // 5
```

#### Forgetting to use `this`
sloppy mode
```javascript
function Child(age) {
  this.age = age;
}

Child.prototype.setAge = function(newAge) {
  age = newAge;
};

let leigh = new Child(5);
leigh.setAge(6);
console.log(leigh.age); // 5; expected 6
```

strict mode
```javascript
"use strict";

function Child(age) {
  this.age = age;
}

Child.prototype.setAge = function(newAge) {
  age = newAge; // ReferenceError: age is not defined
};

let leigh = new Child(5);
leigh.setAge(6);
console.log(leigh.age);
```

#### Leading Zeros
If you use a literal integer that begins with `0` but doesn't contain the digits `8` or `9`,
sloppy mode interprets it as an octal number
```javascript
console.log(1234567); // 1234567
console.log(01234567); // 342391
```

with strict mode, numbers that look like octal numbers raise an error
```javascript
"use strict";
console.log(01234567);  // SyntaxError: Octal literals are not allowed in strict mode.
console.log(089);       // SyntaxError: Numbers can't begin with 0
console.log(01.23);     // SyntaxError: Numbers can't begin with 0
console.log(-01234567); // SyntaxError: Octal literals are not allowed in strict mode.
console.log(-089);      // SyntaxError: Numbers can't begin with 0
console.log(-01.23);    // SyntaxError: Numbers can't begin with 0
```

#### Other Strict Mode Differences
- (*) prevents you from using function declarations in blocks.
- (*) prevents declaring two properties with the same name in an object.
- prevents declaring two function parameters with the same name.
- prevents using some newer reserved keywords, such as `let` and `static`, as variable names.
- prevents you from using the `delete` operator on a variable name.
- forbids binding of `eval` and `arguments` in any way.
- disables access to some properties of the `arguments` object in functions.
- disables the `with` statement, a statement whose use is not recommended even in sloppy mode.

### When to use strict mode
in any new code that you write

if adding new functions to old code, use function-level strict mode

## Closures
- What is a closure?
- What is in a closure?
- When is a closure created?
- What is the relationship between closures and scope?
- What do we mean when we say that closures are defined lexically?
- What is partial function application?

### Closures
a (non-anonymous) function is in scope in its own inner scope e.g. recursion

closure - the combination of a function and the lexical environment within which
that function was defined (closure occurs with both function declarations and function expressions)
i.e. a function combined with any variables from its lexical scope that the function needs

when the function is invoked, it can access any variables from the lexical scope where it was defined

closures are lexical. they are created based on the structure of the program, not on anything that happens at execution time

#### A Mental Model
When you define a function, JS:
1. finds all the variable names it needs from the lexical scope that contains the function definition
2. takes those names and places them inside a special "envelope" object that is attached to the function object,
 where each name in the envelope is a pointer to the original variable
  (and so sees changes to those variables from lexical scope)
3. when a function is invoked and encounters a variable name,
 it first looks inside its local scope, then to the closure


```javascript
let numbers = [1, 2, 3];
let number = 42;
function printNumbers() {
  console.log(numbers);
  console.log(number);
}
printNumbers(); // [1,2,3]\\n 42
numbers = [4, 5]
number = 3.1415;
printNumbers(); // [4,5], 3.1415
```

only variables that are in scope when the function is defined (not invoked) are included in the closure

#### Higher-order Functions returning function objects

multiple functions closing over different variables
```javascript
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter1 = makeCounter();
console.log(incrementCounter1()); // 1
console.log(incrementCounter1()); // 2
console.log(incrementCounter1()); // 3

let incrementCounter2 = makeCounter();
console.log(incrementCounter2()); // 1
console.log(incrementCounter2()); // 2

console.log(incrementCounter1()); // 4
```

multiple functions closing over the same variable
```javascript
function makeCounters() {
  let counter = 0;

  const fun1 = function() {
    counter += 1;
    return counter;
  };

  const fun2 = function() {
    counter += 2;
    return counter;
  };

  return [fun1, fun2];
}

let [fun1, fun2] = makeCounters();
console.log(fun1()); // 1
console.log(fun2()); // 3
```

### Partial Function Application
the creation of a (outer) function that can call a second (inner) function
with *fewer* arguments than the second function expects
because the created function applies the remaining arguments

```javascript
function add(first, second) {
  return first + second;
}

function makeAdder(firstNumber) {
  return function(secondNumber) {
    return add(firstNumber, secondNumber);
  };
}

let addFive = makeAdder(5);
let addTen = makeAdder(10);

console.log(addFive(3)); // 8
console.log(addFive(55)); // 60

console.log(addTen(3)); // 13
console.log(addTen(55)); // 65
```

```javascript
// supplied download function which only passes one argument to errorHandler
function download(url, errorHandler) {
  if (gotError) {
    errorHandler(reasonCode);
  }
}

// but our errorHandler requires two arguments!
function errorDetected(url, reason) {

}

// work around single argument limitation with a partial function
function makeErrorHandlerFor(url) {
  return function(reason) {
    errorDetected(url, reason);
  }
}

let url = '...';
download(url, makeErrorHandlerFor(url));
```

alternatively, could use `bind`

```javascript
download(url, errorDetector.bind(null, url));
```

## Closures & Private Data
- Write code that uses closure to create private data.
- Explain why private data is desirable.
- Be able to identify code that gives users of your code a way to alter private data.

### Private Data
return a function from a function using methods and data from lexical scope

OR

return object with methods instead of function from higher-order function to create an interface

### Why do we need private data?
- force other developers to use the intended interface
- protect data integrity
- makes use independent of implementation. if implementation changes, API remains the same

### When should we not use it?
Can't rely on it to keep sensitive information hidden.

Encryption is the only reasonably safe way to protect such data.

Program errors, debuggers and getter methods may expose private data.

## Immediately Invoked Function Expressions
- What are IIFEs?
- How do you use them?
- How do you use IIFEs to create private scopes?
- How do you use blocks to create private scopes?
- How do you use IIFEs to create private data?

### What are IIFEs and How Do You Use Them?
a function that you define and invoke simultaneously

```javascript
(function() {
  console.log('hello');
})();

let foo = (function() {
  return (function() {
    return 10;
  })() + 5;
})();

((first, second) => first * second)(5, 6);

return function() {
  return left + right;
}();
```

don't have to use () around the function definition if the definition is an expression

a function declaration must be converted to a function expression
before you can invoke it with immediate invocation syntax

### Using IIFEs and Blocks for Private Scope
can use IIFEs or blocks to create private scope,
so as not to overwrite or reassign existing variables and functions

### Using IIFEs to Define Private Data

## Shorthand Notation
### Concise Property Initializers
```javascript
function xyzzy(foo, bar, qux) {
  return {
    foo,
    bar,
    answer: qux,
  };
}
```

### Concise Methods
```javascript
let obj = {
  foo() {},
  bar(arg1, arg2) {},
};
```

### Object Destructuring
```javascript
let obj = {
  foo: 'foo',
  bar: 'bar',
  qux: 42,
}

let { foo, bar, qux } = obj;
```


order of property names is not important

```javascript
let { qux, foo, bar } = obj;
```

can omit names you don't need
```javascript
let { foo } = obj;
let { bar, qux } = obj;
```

###### can use different names in results
```javascript
let { qux: myQux, foo, bar } = obj;
```

using rest syntax to assign variable to the rest of an object
```javascript
let { foo, ...subObj } = obj;
```

with function parameters
```javascript
function xyzzy({ foo, bar, qux }) {

}

xyzzy(obj);
```
in assignment - surround with parentheses as `{` marks the beginning of a block
```javascript
({ foo, bar, qux } = obj);
```

### Array Destructuring
```javascript
let foo = [1, 2, 3];
let [ first, second, third ] = foo;
```

can skip elements
```javascript
let bar = [1, 2, 3, 4, 5, 6 ,7];
let [ first, , , fourth, fifth, , seventh ] = bar;
```

multiple assingments in one expression
```javascript
let one = 1;
let two = 2
let three = 3;

let [ num1, num2, num3 ] = [one, two, three];

console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // 3
```

swap values in two variables
```javascript
let one = 1;
let two = 2;

[ one, two ] = [two, one];

console.log(one); // 2
console.log(two); // 1
```

using rest syntax to assign variable to the rest of an array
```javascript
let foo = [1, 2, 3, 4];
let [ bar, ...qux ] = foo;
console.log(bar); // 1
console.log(qux); // [2, 3, 4]
```

### Spread Syntax
```javascript
function add3(item1, item2, item3) {
  return item1 + item2 + item3;
}

let foo = [3, 7, 11];

// add3.apply(null, foo);
add3(...foo);
```

create a clone of an array
```javascript
let foo = [1, 2, 3];
let bar = [...foo];
console.log(bar); // [1, 2, 3]
console.log(foo === bar); // false
```

concatenate arrays
```javascript
let foo = [1, 2, 3];
let bar = [4, 5, 6];

let qux = [...foo, ...bar];
console.log(qux); // [1, 2, 3, 4, 5, 6]
```

insert an array into another array
```javascript
let foo = [1, 2, 3];
let bar = [...foo, 4, 5, 6, ...foo];
console.log(bar); // [1, 2, 3, 4, 5, 6, 1, 2, 3]
```

spread syntax with objects only returns enumerable "own" properties i.e. same as Object.keys

object prototype and `length` property on an array are not enumerable

create a clone of an object
```javascript
let foo = { qux: 1, baz: 2 };
let bar = { ...foo };
console.log(bar); // { qux: 1, baz: 2 }
console.log(foo === bar); // false
```

merge objects
```javascript
let foo = { qux: 1, baz: 2 };
let xyz = { baz: 3, sup: 4 };
let obj = { ...foo, ...xyz };
obj; // { qux: 1, baz: 3, sup: 4 }
```

### Rest Syntax
rest element must be last item in any expression using rest syntax

destructuring arrays
```javascript
let foo = [1, 2, 3, 4];
let [ bar, ...otherStuff ] = foo;
console.log(bar); // 1
console.log(otherStuff); // [2, 3, 4]
```

destructuring objects
```javascript
let foo = { bar: 1, qux: 2, baz: 3, xyz: 4 };
let { bar, baz, ...otherStuff } = foo;
console.log(bar); // 1
console.log(baz); // 3
console.log(otherStuff); // { qux: 2, xyz: 4 }
```

with built-in `arguments` array-like object in functions
```javascript
function maxItem(first, ...moreArgs) {
  let maximum = first;
  moreArgs.forEach(num => {
    maximum = num > maximum ? num : maximum;
    return maximum;
  })
}

console.log(maxItem(2, 6, 10, 4, -3));
```

## Modules
- The benefits of using modules
- How to use and create CommonJS modules
- How CommonJS modules pass exported items to the importing modules

### Benefits of Modules
- large file is difficult to understand
- collaboration conflict on single file
- code lacks cohesion, changes can ripple
- working on code is difficult
- must disentangle code snippets to use elsewhere
- encapsulating is messy

can split a program into multiple files called modules

### CommonJS Modules
browsers do not support as they are loaded synchronously as it takes too long

can use a transpiler like Babel to transpile code that uses CommonJS modules into a format
that can be used by browsers

```javascript
const readline = require('readline-sync');
```

#### Creating CommonJS Modules
```javascript
// logit.js
function logIt(string) {
  console.log(string);
}
module.exports = logIt;
```

```javascript
// main.js
const logIt = require('./logit');
logIt('You rock!');
```

can export multiple items
```javascript
// logit.js
let prefix = ">> ";

function logIt(string) {
  console.log(`${prefix}${string}`);
}

function setPrefix(newPrefix) {
  prefix = newPrefix;
}

module.exports = {
  logIt,
  setPrefix,
};
```

```javascript
// main.js
const { logIt, setPrefix } = require('./logit');
logIt('You rock!'); // >> You rock!
setPrefix("++ ");
logIt('You rock!'); // ++ You rock!
```

#### CommonJS Variables
in Node all code is part of a CommonJS module
- `module` - an object representing current module
- `exports` - the name(s) exported by the module (same as `module.exports`)
- `require(moduleName)` - the function that loads a module
- `__dirname` - the absolute pathname of the directory that contains the module
- `__filename` - the absolute pathname of the file that contains the module

### JS/ES Modules
Babel transpiles ES6 code to ES5 code if using JS Modules with an older version of Node

Webpack consolidates all of the modules you need into a single file

suitable for browser use, supported by newer versions of Node
#### Using JS Modules
```javascript
// foo.js
import { bar } from './bar';
let xyz = 1;

export function foo() {
  console.log(xyz);
  xyz += 1;
  bar();
}
```

```javascript
export let items = [];
export let counter = 0;

export function bar() {
  counter += 1;
  items.push(`item ${counter}`);
}

export function getCounter() {
  return counter;
}
```

```javascript
// main.js
import { foo } from './foo';
import { bar, getCounter, items, counter } from './bar';

foo();
console.log(items);          // ["item 1"]
console.log(getCounter());   // 1
console.log(counter);        // 1

bar();
console.log(items);          // ["item 1", "item 2"]
console.log(getCounter());   // 2
console.log(counter);        // 2
```

## Exceptions
- What are exceptions?
- Given an exception error message, identify the exception type and understand the meaning.
- Understand the terms raise, throw, re-throw and catch.
- Know the syntax for the `throw` and `try/catch` statements.
- Understand the program flow for an exception.

the program throws an error/raises an exception when JS encounters and error
 that it cannot recover from

by default, exceptions terminate the program,
but a a program can catch and handle exceptions with an exception handler

not all errors are exceptions

Exception - of or inherits from `Error` type

### Throwing Exceptions
throw error
```javascript
function div(first, second) {
  if (second === 0) {
    throw new Error('Divide by zero!');
  }
  return first / second;
}

throw undefined;

throw "this is an error!";
```

can throw any value, either an object or a primitive, as an exception

define new error class
```javascript
class DivideByZeroError extends Error {}
```

### Catching Exceptions
```javascript
function divideOneBy(divisor) {
  try {
    let result = div(1, divisor);
    console.log(result);
  } catch (error) {
    if (error instanceof DivideByZeroError) {
      console.log(`${error.message} ignored`);
    } else {
      throw error;
    }
  }
}
```

### When an exception is thrown
1. exception seeks a `try` block that contains the causing code
2. if it never finds one, it issues an error message then terminates the program
2. if it finds one, it exits from it without executing any remaining code and executes the `catch` block
3. if re-throw in catch block, repeat 1. - 2.
3. if no re-throw in catch block, the program discards the original exception object

every exception terminates the program unless a `catch` block handles it without re-throwing it

### When to use exceptions
for exceptional conditions, not normal and expected conditions

catch exceptions when you can do something to recover from the error

throw exceptions when you can't ignore the problem and can't recover from it in your local code,
when an event occurs that should not be ignored or when the condition is truly anomalous or exceptional

not for flow control

only try to handle specific exceptions you know how to handle, otherwise re-throw error

`catch` block should do as little as possible e.g.
- ignore the exception
- return an error value
- set a flag
- log an error message
- throw another exception with a explicit `throw` statement (*not* unexpectedly)
    i.e. don't do anything in a `catch` block that might unexpectedly raise an exception

## Garbage Collection
String - 1 byte of memory for each char + overhead (e.g. length)

Garbage Collection (GC) is an automatic and invisible process in JS that frees up memory of unused values

JS runtime automatically allocates memory

Reference Counting: when the reference count drops to 0, the value becomes eligible for GC

otherwise, would have to:
1) *claim* a chunk of memory
2) *test* that the memory allocation worked
3) *copy* a value into the allocated memory
4) *use* the value
5) *release* the memory when the value is no longer needed

### The Stack & Heap
JS stores most primitive values (except for Strings and BigInts) and references on the stack.

The stack doesn't participate in garbage collection.

Since each item has fixed size, JavaScript can calculate the amount of memory it needs during the creation phase of execution without knowing the specific values.

Instead, when a function/block begins executing, JS allocates memory on the stack;
when it is done running, the allocated space is returned.

JS stores everything else on the heap.

GC often occurs at periodic intervals during a program's lifetime.

## Side Effects and Pure Functions
### Side Effects
- reassigns a non-local variable
- mutates the value of any object references by a non-local variable
- reads from or writes to any data entity that is non-local to the program
- raises an exception
- calls another function that has any side-effects that are not confined to the current function

if the function can have side effects when used as intended, then we say the function itself has side effects

A function call has side effects or none.

### Mixing Side Effects and Return Values
most functions should return a useful value or they should have a side effect, but not both

### Pure Functions
- Have no side effects
- given the same set of arguments, always returns the same value
   i.e. the return value depends solely on its arguments during the function's lifetime

A function's lifetime begins when the function is created and ends when the function is destroyed.
i.e. nested functions have a lifetime that span a single execution of the outer function

A function call is pure or impure.


# Introduction to Testing

why? - to prevent regression

## Using Jest
Test Suite - entire set of tests that accompanies the program or application.

Test/Spec - specific situation/context that you're attempting to test

Assertion/Expectation - verification step that confirms that the program did what it should
            e.g. whether the return value of a method/function matches the expected result.
            Multiple assertions can exist within a test.

```javascript
const Car = require('./car');

describe('The Car class', () => { // optional description to group tests
  // xtest or text.skip to skip test
  test('has four wheels', () => { // test
    let car = new Car(); // set up any data that we need in the test
    expect(car.wheels).toBe(4);
  });
  }
);
```

Matchers - `toBe, toEqual, toBeUndefined, toThrow, toBeNull, toBeTruthy, toContain, toMatch`

Inverting a matcher - `expect(...).not.toBe(...)`

[full list](https://jestjs.io/docs/en/expect)

## SEAT Approach
1. Set up the necessary objects - `beforeEach`
2. Execute the code against the object we're testing
3. Assert the results of execution
4. Tear down and clear up any lingering artifacts - `afterEach`

```
jest todolist.test.js
```

## Code Coverage
how much of our program code was tested by a test suite
```
jest --coverage todolist.test.js
open coverage/lcov-report/index.html
```

# Packaging Code
project - collection of >=1 files used to develop, test, build and distribute software;
 including source code, tests, assets, databases, configuration files etc.

npm standard - standard layout for Node projects

## Node Packages
[npm database](https://www.npmjs.com/) hosts free code packages

can import some packages into programs (programming interface e.g. a set of functions),

`require(dir)` looks inside the `node_modules` directory for a folder with the same name as the argument
when relative path is omitted

use others from the terminal command line (executable command),
or both

`npm` command, bundled with node, manages packages

e.g - `eslint, jest, readline-sync`

## Local vs Global Packages

### Local Install
install a package locally - `npm install`. `npm` searches directory hierarchy for `node_modules` directory,
 if it doesn't find one, ite creates one in the pwd.
 Better to install all dependencies inside project folder,
 so don't nest in directory that already contains a `node_modules` directory.

#### Requiring local packages
import an entire module
```javascript
const _ = require('lodash');
console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
```

import a single function explicitly for more efficient loading and less burden on system memory,
 for packages with multiple independent files for different functions
```javascript
const chunk = require('lodash/chunk');
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
```

import a single function explicitly
 for packages with a single file for all functions.
 Node still needs to read the entire module, so no processing benefit,
 but is GC'd, so memory benefit.
```javascript
const chunk = require('lodash').chunk;
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
```
#### `package.json` and `package-lock.json`
`package.json` - lists all the packages that your project needs with their corresponding versions,
and other config settings

`npm init` - initialize (create and populate) a package.json file

add dependencies to `package.json`
```json
"dependencies": {
    "express": "4.17.1",
    "http-errors": "1.8.0",
    "morgan": "1.10.0"
},
```

install all dependencies listed in `package.json` locally and build `package-lock.json` file
```commandline
npm install
```

`package-lock.json` - shows the precise versions of the packages that npm installed,
 the dependencies of each package and the version of each dependency

 Npm and the `package.json` file follow [semantic versioning](https://semver.org/) -
 major.minor.patch, node chooses what is compatible with the rest of the dependencies and adds that
  info to `package-lock.json`

### Adding a new dependency
1. directly add to `package.json`
2. or use `npm install [package] --save [or -S]` - install package and save to `package.json` and `package-lock.json`

#### `dependencies` vs `devDependencies`
install development-only packages - e.g. code linters, debuggers, minifiers
```commandline
npm install eslint --save-dev
```

#### Running Local Executable Packages
run a local npm executable package,
npx checks for a local installation first, if it can't find the package locally or globally,
it downloads and uses a temporary version of the named package.
```commandline
npx eslint lib/todolist.js
```

### Deleting a dependency
remove a dependency from the `node_modules` directory
```commandline
npm uninstall lodash
```

remove from `node_modules` directory and `package.json` dependencies
```commandline
npm uninstall lodash --save
```

remove development dependencies
```commandline
npm uninstall eslint --save-dev
```

manually remove dependencies from `package.json` and want to remove the packages from `node_modules`
```commandline
npm prune
```

### Global Packages
install a package globally in `/usr/local/lb/node` or `/usr/local/lib/node_modules`
 and moves the executable to a directory that is part of the `PATH` environment variable
```commandline
npm install heroku --global [or -g]
```

## Transpilation
the process of converting source code written in one language into another language
with a similar level of abstraction to the original code.

e.g. taking code written in a superset of JS (newer version e.g. with ESG features)
and rewriting it in plain JS (older version i.e. a form that lets it run in browsers that don't recognise new features).

### Babel
use newer features in our code irrespective of whether it works in the intended runtime environment,
particularly with browser-based apps as users often don't update their browsers

[Babel repl](https://babeljs.io/repl)

install 2 packages locally
```commandline
npm install --save-dev @babel/core @babel/cli
```

install `env` preset - plug-in that has all the info needed to compile one version of JS to another
```commandline
npm install --save-dev @babel/preset-env
```

transpile all JS files in `lib` directory
and to output the resulting code to files with the same names in the `dist` directory
with presets set to support ES5
```commandline
npx babel lib --out-dir dist --presets=@babel/preset-env
```

## Automating Tasks with npm Scripts
scripts - automate repetitive tasks e.g. building the project, minifying files, deleting temporary files and folders

### The `"scripts"` Object in `package.json`
\[name of script\] : \[command line script to run\]
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", // note the comma
    "foo": "echo 'How do you do?'"
  },
```

run script
```commandline
npm run foo
```

add babel script,
 don't need to use `npx` command for npm scripts because `npm` uses commands from local packages
 in preference to those stored in other locations e.g `PATH` env var.
 With `npx`, packages can be searched for and installed for one-time execution.
 Without, you can only use pre-installed packages.
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel": "babel lib --out-dir dist --presets=@babel/preset-env"
}
```

## Packaging a project as an npm module
[requirements for creating node modules](https://docs.npmjs.com/creating-node-js-modules)

1. Create a `package.json` file
2. Provide values for the `name`, `version` and `main` fields
3. Publish the node package
```commandline
npm publish --access public
```

# Asynchronous Programming
Asynchronous functions - don't block execution for the rest of the program while they execute,
 i.e. they run concurrently with other operations so that the caller doesn't have to wait for the task to finish running

runs partly now, then pauses and continues to run later after a delay

vs. sequential/synchronous code

## `setTimeout`
code run by `setTimeout` only runs when JS isn't doing anything else
```javascript
setTimeout(() => console.log('!'), 0);
setTimeout(() => console.log('World'), 0);
console.log('Hello');
// => Helllo
//    !
//    World
```

## `setInterval`
returns an identifier that we can use to cancel the repetitive execution with `clearInterval`

```javascript
function save() {
  // send the form values to the server for safekeeping
}

// call save() every 10 seconds
var id = setInterval(save, 1000);

// later, perhaps after the user submits the form
clearInterval(id);
```

## More Async Functions (not included in assessment)

### `Promise` object
the eventual completion or failure of an asynchronous operation and its resulting value.

Asynchronous methods return a promise to supply the final value at some point in the future.
Associated handlers queued up by a promise's `then` method are called on fulfillment/rejection.

Three states of a `Promise`:
- pending
- settled
    - resolved
    - rejected

`then` method returns a newly generated `Promise` object

can omit the rejection handlers until the final `.catch()` method

an action can be assigned to an already settled promise,
where the action will be performed at the first asynchronous opportunity.

similar to callbacks, but can chain `then` statements instead of nesting callbacks

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});
promise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC)


promise
  .then(handleResolvedA)
  .then(handleResolvedB)
  .then(handleResolvedC)
  .catch(handleRejectedAny)
```

`Promise.all` - takes an array of promises and creates a promise that fulfills when all of them resolve,
returns an array of results

### `async`, `await`
force code to run synchronously and wait for a promise to resolve before continuing

any code that uses the `await` keyword must be wrapped within a function that is explicitly
declared to be `async` so that code outside of function can run concurrently

use `try/catch` blocks to catch errors

```javascript
const promise = new Promise(resolve => setTimeout(() => resolve('sucess!'), 1000));

async function main() {
  try {
    const returnVal = await promise;
    console.log('yay! we have return value of promise = ' + returnVal);
  } catch (err) {
    console.log(err);
  }
}

main();
```

## The Event Loop
single-threaded language = single call stack

stack trace on error

blowing the stack - `RangeError: Maximum call stack size exceeded`

blocking behaviour - slow actions on call stack

JS runtime (heap + stack) - can only do one thing at a time

`setTimeout` /`setInterval` provided by environment e.g. browser, not JS

async callback is:
1. added to stack
2. moved to webapi where it originates to wait until callback must be called
3. callback is moved to callback queue
4. when call stack is cleared, event loop moves callback to call stack

so `setTimeout`/`setInterval` time argument represents minimum delay time

using `0` as delay argument in `setTimeout`/`setInterval` defers action until call stack is clear

browser render must wait until call stack is clear but is prioritised over callbacks
