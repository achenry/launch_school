# Object-Orientated Programming (OOP)
a programming paradigm in which we think about a problem in terms of objects.
In particular, it uses those objects to organize your program.

## Advantages
- it lets programmers think about a problem at a *higher-level of abstraction*,
which helps them break down and solve the problem
- it helps programmers to write programs that *reduce the dependencies* in a program,
which makes maintenance easier
- it makes code *flexible, easy to understand*, easy to change

## Disadvantages
- larger than the equivalent procedural program
- less efficient code. More memory, disk space, computing power.

## OO vs Procedural programming

Programming paradigm

state and behaviour

# Encapsulation
bundling state (data) and behaviour (operations) into a single entity,

grouping related properties and methods in a single object

## Public interface (but not in JS)
restricting access to state and certain behaviours

## Methods
OO style strongly discourages changing property values directly

```javascript
let raceCar = {
  make: 'BMS',
  engineOn: false,
  fuelLevel: 0.5,
  startEngine: function() {
    this.engineOn = true;
  },
  drive() {
    this.fuelLevel -= 0.1;
  }
};
```

## `this` keyword

# Collaborator Objects
properties can store any object or value

objects that help provide state within another object

i.e. objects that are properties of other objects

# Functions as Object Factories
functions that create and return objects of a particular type

```javascript
function createCar(make, fuelLevel, engineOn) {
  return {
    make,
    fuelLevel,
    engineOn,
    startEngine() {
      this.engineOn = true;
    }
    drive() {
      this.fuelLevel -= 0.1;
    }
    stopEnging() {
      this.engineOn = false;
    },
    refuel(percent) {
      this.fuelLevel = (this.fuelLevel + (percent / 100)) <= 1 ? this.fuelLevel + (percent / 100) : 1;
    }
  };
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();
let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();
let raceCar3 = createCar('Jaguar', 0.4, false);
```

## Disadvantages
- every object created with a factory function has a full copy of all the methods => redundant and heavy load on system memory
- there is no way to inspect an object and learn whether it was created from a factory function

-------------------------------------------------------------------------------------

# Fundamental Types of Object
`String, Number, Boolean, Null, Undefined, Object, BigInt, Symbol`
values can be any of the JS types, property keys are always strings

non-string keys will be converted into strings

## Property Access
- Member access notation:
dot notation, requires valid variable names
- Computed member access notation:
bracket notation, can take any UTF-8-compatible string, computed on the fly

```javascript
myObject["a-key"] = "four";
myObject.a-key;              // SyntaxError (a-key is not a valid variable name)
myObject["a-key"];           // "four"
myObject["a" + "-" + "key"]; // "four"
```

## Property Existence
- accessing a non-existent property => `undefined`
- accessing a property explicitly set to `undefined` => `undefined`

## `in`, `Object.prototype.hasOwnProperty`

```javascript
"false" in myObject;                    // true
"true" in myObject;                     // false

myObject.hasOwnProperty("7");           // true
myObject.hasOwnProperty("8");           // false
```

## `Object.keys(obj), Object.getOwnPropertyNames(obj)`
- `Object.keys` => enumerable properties
- `Object.getOwnPropertyNames` => all properties

```javascript
Object.keys(myObject);                    // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
Object.getOwnPropertyNames(myObject);     // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
```

### Enumerable
property picked up by Object.assign() or spread operator or for/in loop

`Object.prototype.propertyIsEnumerable`

most built-in properties and methods are not enumerable

# Object Prototypes
## Prototypal Inheritence
function `Object.create` creates a new object that inherits properties from an existing prototype object.
new object's `[[Prototype]]` property gets assigned to the prototype object

```javascript
let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);
b.foo; // => 1
```

delegates property and method access to prototype,
not receiving any properties or methods of its own

```javascript
let b = Object.create(a); // undefined
b.foo; // 1
b; // {}
console.log(a.hasOwnProperty('foo')); // => true
console.log(b.hasOwnProperty('foo')); // => false
```

`[[Prototype]]` is an internal property that JS objects use to keep track of their prototype

objects hold a reference to their prototype objects through their internal `[[Prototype]]` property

```javascript
Object.getPrototypeOf(b); // => get reference to [[Prototype]] object
Object.setPrototypeOf(b, a); // => set [[Prototype]] object
```

## Default Prototype
`Object.getPrototypeOf({}); // => Object.prototype`

## Iterating
- `for/in` loop iterates over all enumerable properties, including properties from objects in prototype chain
- `Object.keys` iterates over 'own' enumerable properties

## The Prototype Chain
// c --> b --> a --> Object.prototype --> null

```javascript
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
```

## Dunder proto (`__proto__`) property
deprecated, non-hidden version of `[[Prototype]]`

## Property Look-Up in the Prototype Chain
When you access a property on an object,
JS looks for an own property, then in the object's prototype,
then in the prototype's prototype etc. etc.

The object that's closer to the calling object takes precedence.

reassigning inherited properties does not mutate prototype, it converts to an own property

## Methods on `Object.prototype`
```javascript
Object.prototype.toString()
Object.prototype.isPrototypeOf(obj)
Object.prototype.hasOwnProperty(prop)
```

## Objects without Prototypes

create an object that doesn't have a prototype
```javascript
let a = Object.create(null);
Object.getPrototypeOf(a); // null
```

check whether `obj` has a non-null prototype

```javascript
if (Object.getPrototypeOf(obj) && obj.isPrototypeOf(car)) {
  // obj has a non-null prototype AND
  // obj is in the prototype chain of car
}
```

# Function Declarations vs. Function Expressions

Function declarations are hoisted

Can't call a function expression until after the expression is evaluated

Can assign a function expression to a variable or object property, pass to another function, or return to a calling function.

Function expressions are function definitions that are part of an expression

Anonymous function, unhelpful in following a stack trace

The function name given to a function expression is not visible in the scope that includes the function expression
```javascript
let foo = function bar() {};
foo();         // This works
bar();         // This does not work
```

The function name on a function expression is visible inside the function,
useful for recursive functions.

## Arrow functions
always function expressions

always anonymous

## Type of a function value
functions are first-class values, they have a type.

functions are objects

```javascript
let myFunc = function() {};
typeof myFunc; // => "function"
```

# Higher-Order Functions
takes a function as an argument and/or returns a function

# Global Object
`global` object created when JS starts running

implicit execution context for function invocations

`global` in node.js, `window` in browser

```javascript
global.isNaN;
global.Infinity;
global.foo = 1;
global.foo; // 1
foo; // 1

bar = 'foo';
global.bar; // => 'foo'
window.bar; // => 'foo'
bar; // => 'foo'
```

whenever you assign a value to a variable without using the let, const or var keywords
the variable gets added to the global object as a property

whenever you try to access a variable for which there is no local or global
variables of that name, JS looks for a global object property with that name

# Implicit and Explicit Execution Context
## Execution context
environment in which the function executes

Binding `this` / setting the binding

## Constructor call with `new` (Implicit)

## Function Execution Context (Implicit)
every JS function call has an execution context

within a regular function call, JS sets the binding for `this` to the global object
```javascript
function foo() {
  console.log("this refers to: " + this);
  this.bar = 'bar';
}

foo(); // this refers to: [object global]
global.bar; // 'bar'
```

### Strict Mode & Implicit Context
when strict mode is enables, `this` is assigned to `undefined` instead of the global object
```javascript
"use strict";
function bar() {
  console.log("this refers to: " + this);
}
foo(); // this refers to: undefined
```

## Method Execution Context (Implicit)
when you call a method that belongs to an object,
the execution context inside that method call is the calling object

```javascript
let foo = {
  bar: function() {
    console.log(this);
  }
};

foo.bar(); // `foo` is the implicit execution context for `bar`
// { bar: [Function: bar] }

let baz = foo.bar;
baz(); // Object [global] {...}
```

## Explicit Function and Method Execution Context
### The `call` Method
calls a function with an explicit execution context.

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

### The `apply` Method

```javascript
let args = [arg1, arg2, arg3];
someObject.someMethod.call(context, ...args);
someObject.someMethod.apply(context, args);
```

### The `bind` Method
permanently bind function to object passed to it

cannot change execution context even if you use `call` or `apply`

returns a new function, does not permanently alter the original function

# Dealing with Context Loss
## Method copied from object

## Method passed as argument to other function

## Inner function Not Using the Surrounding Context
- preserve context with a variable in outer scope
 ```javascript
  let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
   }
  };
  obj.foo();
```

- call inner function with explicit context
```javascript
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + this.b);
    }
    bar.call(this);
  }
}
```

- permanently set execution context
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
```

- use an arrow function - they inherit their execution context from the surrounding scope

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
```

- use the optional `thisArg` argument for array iterating methods

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
```

Don't use array functions as methods on an object,
as arrow functions always get the value of `this` from the surrounding context
e.g. the global object for an object defined in the program's top-level code

when using `node` to execute a file, the surrounding context is the module, not the global object

## Function as Argument Losing Surrounding Context

------------------------------------------------------------------------------------------

# (Object) Constructors
```javascript
function ConstructorName(args) {
  this.prop1 = args.val1;
  this.method1 = function() {

  };
}
let obj = new ConstructorName({val1: false});
```

## Calling a constructor function

- called using `new` keyword
- use `this` to set the object's properties and methods
- don't have to supply an explicit return value

1. creates a new object
2. sets the prototype of the new object to the object referenced by the constructor's `prototype` property
3. sets the value of `this` inside the function to the new object
4. invokes the function
5. returns the new object

if constructor function is called without `new`, it acts like an ordinary function

## Who Can be a constructor

cannot call arrow functions with `new`, since `this` is set to surrounding context

can use `new` on methods defined in objects, but not compact methods

generators and many built-in objects and methods are incompatible with `new`

## Constructors with Explicit Return Values

if constructor explicitly returns a primitive value, return value is still created object,
but if constructor explicitly returns an object, return value is that object

## Supplying Constructor Arguments with Plain Objects
`Object.assign(this, args)`

BUT the `args` object may contain properties that the object doesn't need

## Determining an Object's Type
object is an instance of the constructor
`obj instanceof Constructor; // true`

# Constructors With Prototypes

## Method Delegation to Prototypes
`Object.setPrototypeOf(this, PrototypeObj)`
`Object.setPrototypeOf(this, Constructor.prototypeObj)`

## Constructor `prototype` Property / Function Prototype
When we call a constructor function with the `new` keyword,
the constructor creates an object with a prototype
that is the same as the constructor function's prototype

`Constructor.prototype.newMethod = ...`
`Constructor.prototype.constructor`

possible to reassign `constructor` property but `instanceof` will still work.

## Overriding the Prototype

## Scope-Safe Constructors

most, but not all, of JS's built-in constructors are scope-safe
```javascript
new Object();          // Object {}
Object();              // Object {}

new Array(1, 2, 3);    // [1, 2, 3]
Array(1, 2, 3);        // [1, 2, 3]

new String("abc");     // [String: 'abc']
String("abc");         // 'abc'
```

# Static and Instance Properties and Methods
## Instance Properties
## Instance Methods
defined on Constructor prototype
## Static Properties
defined and accessed directly on the constructor, not on an instance or a prototype

can use this to keep track of all instances
```javascript
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];
```

## Static Methods

# Built-in Constructors

## The `Array` constructor
```javascript
let emptyArray = new Array(); // []

let numbers = new Array(1, 2, 3, 4); // [ 1, 2, 3, 4 ]

let colors = new Array('green', 'blue', 'yellow'); // [ 'green', 'blue', 'yellow' ]

new Array(3) // [ <3 empty items> ]

(new Array(3)).fill('*'); // [ '*', '*', '*' ]
```

### `Array.prototype`
`Object.getPrototypeOf(numbers) === Array.prototype; // true`

### Static Array Methods
```javascript
Array.isArray([]); // true
Array.from({0: 'a', 1: 'b', 2: 'c'}); // ['a', 'b', 'c']
```

#### Array-Like Object
any object that has a length property and provides indexed access to some of its properties with the `[index]` notation
have properties whose keys are non-negative integers

## The Object Constructor
### `Object.prototype`
```javascript
Object.prototype.hasOwnProperty;
Object.prototype.isPrototypeOf;
Object.prototype.toString;
```

all array objects have access to all the methods on `Object.prototype`

`Object.getPrototypeOf(Array.prototype) === Object.prototype`

almost all JS objects, whether built-in or custom-created, inherit from `Object.prototype`,
either directly or further down the prototype chain.

### Static `Object` Methods
```javascript
Object.assign
Object.create
Object.entries
Object.keys
Object.values
Object.freeze
Object.isFrozen
```

## The Date constructor
### Date.prototype
```javascript
Date.prototype.toString
Date.prototype.getFullYear
Date.prototype.getDay
```

## The String constructor
to create string primitives - using quotes or back-tick characters to define a string's value

to create a `String` object - using `String` constructor

```javascript
let strPrimitive = 'abc';
typeof strPrimitive; // 'string'

let strObject = new String('xyz');
typeof strObject; // 'object'

'abc' === 'abc'; // true

new String('abc') === new String('abc'); // false
```

when you try to access a property or invoke a method on a string primitive,
JS wraps the string primitive in a `String` object.

calling `String` without the `new` keyword returns a string primitive, the argument converted to a string

## The `Number` and `Boolean` Constructors
called with `new` - create `Number` and `Boolean` objects

called without `new` - converts argument to `Number` / `Boolean`

have primitive and object forms

JS invisibly wraps primitives in objects to access methods and properties

## Extending Built-in Prototypes

## Borrowing Array Methods for Strings
```javascript
let string = 'EEE';
Array.prototype.every.call(string, char => char === 'E'); // => true

[].every.call(string, char => char === 'E'); // => true
```

but array methods that mutate the array won't work on strings ,
because strings are immutable.

# ES6 Classes
syntactic sugar

two definition styles: declarations and expressions

constructor is a method named `constructor`

must use `new` keyword, otherwise `TypeError`

classes are first-class values, as classes are function types

## Static Methods and Properties
`static` keyword

------------------------------------------------------------------------------------------

# Object Creation with Prototypes (OLOO)
objects linking to other objects

```javascript
let carPrototype = {
  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this;
  },
};

let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);
```

## Advantage
memory efficiency, inherit methods from a single prototype object
vs factory functions which create copies of methods

## Disadvantage
Factory pattern allows us to create objects with a private state.

# Subtyping with Constructors and Prototypes
sub-type, super-type
```javascript
Square.prototype = Object.create(Rectangle.prototype);

sqr.constructor === Rectangle; // => true

Square.prototype.constructor = Square;

sqr.constructor === Square; // => true
```
function's prototype property is writable, can reassign to an object that
inherits from super-type's prototype

BUT `constructor` property of `prototype` property points to super-type
unless it is reassigned

`obj instanceof C` is equivalent to `C.prototype.isPrototypeOf(obj)`

an instance does not own the `constructor` property, but inherits it from its prototype
`Object.getOwnPropertyNames(Object.getPrototypeOf(obj)); // ['constructor']`

## Constructor Reuse
```javascript
function Square(size) {
  Rectangle.call(this, size, size);
}
```

## Prototypal Inheritance vs. Pseudo-Classical Inheritance
### Prototypal inheritance / Prototypal delegation / Object inheritance
an object's internal `[[Prototype]]` property points to another object,
and the object can delegate method calls to that other object
```javascript
let humanPrototype = {
  myName() { return this.name; },
  myAge() { return this.age; },
};

let personPrototype = Object.create(humanPrototype);
personPrototype.toString = function() {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
};

let will = Object.create(personPrototype);
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.
```

### Pseudo-Classical object construction / Constructor/prototype pattern
```javascript
function Human() {}
Human.prototype.myName = function() { return this.name; };
Human.prototype.myAge = function() { return this.age; };

function Person() {}
Person.prototype = Object.create(Human.prototype);
Person.prototype.constructor = Person;
Person.prototype.toString = function() {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
};

let will = new Person();
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.
```

```javascript
class Human {
  myName() { return this.name; }
  myAge() { return this.age; }
}

class Person extends Human {
  toString() {
    return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
  }
}

let will = new Person();
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.
```

```javascript
function Person(name) {
  this.name = name;
}
let bob = new Person('Bob');
bob instanceof Person; // true
Person('Bob'); // undefined, this set to global object, created name global variable
name; // 'Bob'


function Person(name) {
  // if not invoked with new keyword
  if (!(this instanceof Person)) {
    return new Person(name);
  }
  this.name = name;
}
```

if you return an object in a constructor, it overrides the returned `this` instance
```javascript
function Cat(name) {
  this.name = name;
}

function Person(name) {
  return new Cat(name);
}

let bob = new Person('Bob');
bob instanceof Person; // false
bob instanceof Cat; // true
```

# Subtyping with Classes

## Inheritance with Class Declarations

using constructors and prototypes
```javascript
function Rectangle(length, width) {}
Rectangle.prototype.getArea = function() {};

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {}
```

using classes
```javascript
class Rectangle {
  constructor(length, width) {}

  getArea() {}
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  toString() {}
}
```

`super` refers to the constructor method for the parent class

ensure that superclass's constructor creates object properties

## Inheritance with Class Expressions
```javascript
let Person = class {
  constructor(name, age) {}
  sayName() {}
}

let Student = class extends Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }

  enrollInCourse(courseNumber) {}
}
```

# Code Reuse with Mixins
single inheritance - in JS, objects can inherit from only one object and classes can extend only one other class

## Mix-ins
an object that defines one or more methods that can be 'mixed-in' to a class
```javascript
const Swimmable = {
  swim() {}
}

const Flyable = {
  fly() {}
}

class Stork {}
Object.assign(Stork.prototype, Flyable);

class Parrot {}
Object.assign(Parrot.prototype, Flyable);

class Penguin {}
Object.assign(Penguin.prototype, Swimmable);

class Ostrich {}
Object.assign(Ostrich.prototype, Swimmable);

class Duck {}
Object.assign(Duck.prototype, Swimmable, Flyable);

class Goose {}
Object.assign(Goose.prototype, Swimmable, Flyable);
```

# Polymorphism
ability of objects with different types to respond in different ways to the same method invocation

we don't care what type of object is calling the method

## Polymorphism through Inheritance
using inheritance to acquire the behaviour of a supertype

can override a method inherited from a superclass

## Polymorphism through Duck Typing
objects of different unrelated types both respond to the same method name

# Spikes & Stubs
## Spike
general outline of how the program flows. high-level view

## Stub
placeholder for a function or method to be written or removed later

# Indirection
the ability to reference something indirectly

e.g.
- calling a function or a method
- using variables to represent values
- accessing object properties via keys

# OO Approach
1. Write a textual description of the problem.
2. Extract the significant nouns and verbs from the description.
3. Organise and associate the verbs with the nouns.
4. Write scaffolding and spike code.
