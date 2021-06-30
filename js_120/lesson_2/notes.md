// Execution Context
// the value of this

// Fundamental Types of Object
// String, Number, Boolean, Null, Undefined, Object, BigInt, Symbol
// values can be any of the JS types, property keys are always strings
// non-string keys will be converted into strings
// Member access notation = dot notation, requires valid variable names
// Computed member access notation = bracket notation, can take any UTF-8-compatible string, computed on the fly
myObject["a-key"] = "four"

myObject.a-key              // SyntaxError (a-key is not a valid variable name)
myObject["a-key"]           // "four"
myObject["a" + "-" + "key"] // "four"

// in, hasOwnProperty
"false" in myObject                    // true
"true" in myObject                     // false

myObject.hasOwnProperty("7")           // true
myObject.hasOwnProperty("8")           // false


// Object.keys => enumerable properties, Object.getOwnPropertyNames => all properties
Object.keys(myObject)                    // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
Object.getOwnPropertyNames(myObject)     // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]

// enumerable - property picked up by Object.assign() or spread operator or for/in loop

// Object Prototypes
// Prototypal Inheritence
// Delegating property and method access to prototype, not receiving any properties or methods of its own
let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);
b.foo; // => 1
let a = { foo: 1, bar: 2 }; // undefined
let b = Object.create(a); // undefined
b.foo; // 1
b; // {}


// [[Prottotype]] is an internal property that JS objects use to keep track of their prototype
// objects hold a reference to their prototype objects through their internal [[Prototype]] property
Object.getPrototypeOf(b);
Object.setPrototypeOf(b, a);

// Object.prototype = Default Prototype - all JS objects inherit from a prototype
Object.getPrototypeOf({});

// for/in loop iterates over all enumerable properties
// Object.keys iterates over own enumerable properties
// Object.prototype.propertyIsEnumerable
// false for most built-in properties and methods
// Prototype Chain
// c --> b --> a --> Object.prototype --> null
let a = {
  foo: 1,
};

let b = {
  bar: 2,
};

let c = {
  baz: 3,
};

Object.setPrototypeOf(c, b);
Object.setPrototypeOf(b, a);

console.log(c.bar); // => 2
console.log(c.foo); // => 1

// Dunder Proto
// __proto__
// deprecated, non-hidden version of [[Prototype]]

// When you access a property on an object
// JS loos for an own property, then in the object's prototype,
//  then in the prototype's prototype
// The object that's closer to the calling object takes precedence.

// reassigning inherited properties does not mutate prototype,
// converts to own property

Object.prototype.toString()
Object.prototype.isPrototypeOf(obj)
Object.prototype.hasOwnProperty(prop)


// create an object that doesn't have a prototype
let a = Object.create(null);
Object.getPrototypeOf(a); // null

// check whether obj has a non-null prototype
if (Object.getPrototypeOf(obj) && obj.isPrototypeOf(car)) {
  // obj has a non-null prototype AND
  // obj is in the prototype chain of car
}

// Function declarations are hoisted
// Can't call a function expression until after the expression is evaluated
// Assign a function expression to a variable or object property, pass to another function, or return to a calling function.

// Anonymous function, unhelpful in following a stack trace
// Function name given to a function expression is not visible in the scope that includes the function expression
let foo = function bar() {};
foo();         // This works
bar();         // This does not work

// The function name on a function expression is visible inside the function,
// useful for recursive functions.

// Arrow functions are always anonymous

// Functions are first-class values, they have a type.
let myFunc = function() {};
typeof myFunc; // => "function"
// Functions are objects

// Higher-order function: takes a function as an argument or returns a function

// Global Object
// implicit execution context for function invocations
// 'global' in node.js, 'window' in browser
global.isNaN
global.Infinity
global.foo = 1
global.foo // 1

// whenever you assign a value to a variable without using the let, const or var keywords
// the variable gets added to the global object as a property
bar = 'foo'
global.bar // => 'foo'
window.bar // => 'foo'
bar // => 'foo'
// whenever you try to access a variable for which there is no local or global
// variables of that name, JS looks for a global object property with that name

// Execution context - environment in which the function executes
// Binding 'this', setting the binding
// Can set the execution context explicitly
// Can set the execution context implicitly
function foo() {
  console.log("this refers to: " + this);
  this.bar = 'bar';
}

foo();
// this refers to: [object global]
global.bar; // 'bar'

// when strict mode is enables, 'this' is assigned to 'undefined' instead of the global object
"use strict";
function bar() {
  console.log("this refers to: " + this);
}
foo(); // this refers to: undefined

// Method execution context - when you call a method that belongs to an object,
// the execution context inside that method call is teh calling object = implicit context

let foo = {
  bar: function() {
    console.log(this);
  }
};

```javascript
foo.bar(); // `foo` is the implicit execution context for `bar`
// { bar: [Function: bar] }

let baz = foo.bar;
baz(); // Object [global] {...}
```

### The call method calls a function with an explicit execution context.
```javascript
function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

logNum.call(obj); // logs 42, set value of this

obj.logNum = logNum;
obj.logNum(); // logs 42

let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42
};

obj1.logNum.call(obj2); // logs 42
obj2.logNum = obj1.logNum;
obj2.logNum(); // logs 42

function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

obj.num = sumNum.call(obj, 5);
console.log(obj.num); // => 47

obj.sumNum = sumNum;
obj.num = obj.sumNum(5);
console.log(obj.num); // => 47
```

### The apply method
```javascript
let args = [arg1, arg2, arg3];
someObject.someMethod.call(context, ...args);
someObject.someMethod.apply(context, args);
```

`bind`
permanently bind function to object passed to it

cannot change execution context even if you use `call` or `apply`

# Dealing with Context Loss
method copied from object or passed as argument to other function

## inner function not using the surrounding context
 Preserve Context with a Variable in Outer Scope
 ```javascript
 let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

 call inner function with explicit context


 use bind
 ```javascript
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

 use an arrow function - they inherit their execution context from the surrounding scope

```javascript
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(number => {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

use the optional `thisArg` argument for array iterating methods

```javascript
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

 when using `node` to execute a file, the surrounding context is the module, not the global object

## function as argument losing surrounding context
