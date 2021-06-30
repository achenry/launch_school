# Encapsulation

# Object Factories/Factory Functions/Factory Object Creation Pattern
## Disadvantages
- Every object created with a factory function has a full copy of all the methods
- There is no way to inspect an object and determine whether it was created with a factory function.

# (Object) Constructors
```javascript
function ConstructorName(args) {
  this.prop1 = args.val1;
  this.method1 = function() {

  };
}
let obj = new ConstructorName({val1: false});
```

- called using `new` keyword
- use `this` to set the object's properties and methods
- don't have to supply an explicit return value

1. creates a new object
2. sets the prototype of the new object to the object referenced by the constructor's `prototype` property
3. sets the value of `this` inside the function to the new object
4. invokes the function
5. returns the new object

cannot call arrow functions with `new`, since surrounding context is `this`

can use `new` on methods defined in objects, but not concise methods

generators and many built-in objects and methods are incompatible with `new`

if constructor explicitly returns a primitive value, return value is still created object,
but if constructor explicitly returns an object, return value is that object

`Object.assign(this, args)`

object is an instance of the constructor
`obj instanceOf Constructor`

# Constructor With Prototypes

## method delegation to prototype
`Object.setPrototypeOf(this, PrototypeObj)`
`Object.setPrototypeOf(this, Constructor.prototypeObj)`

## constructor `prototype` property / function prototype
When we call a constructor function with the `new` keyword,
the constructor creates an object with a prototype
that is the same as teh constructor function's prototype

`Constructor.prototype.newMethod = ...`
`Constructor.prototype.constructor`

possible to reassign `constructor` property but `instanceOf` will still work.

## Overriding the prototype

## Scope-safe constructors

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

#### array-like object
any object that has a length property and provides indexed access to some of its properties with teh `[index]` notation
have properties whose keys are non-negative integers

## The Object constructor
### `Object.prototype`
```javascript
Object.prototype.hasOwnPrototype
Object.prototype.isPrototypeOf
Object.prototype.toString
```

all array objects have access to all the methods on `Object.prototype`
`Object.getPrototypeOf(Array.prototype) === Object.prototype`

almost all JS objects, whether built-in or custom-created, inherit from `Object.prototype`, either directly or further down the prototype chain.

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

called without `new` - converts argument to `Number`/`Boolean`

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
