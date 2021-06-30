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

memory efficiency, inherit methods from a single prototype object
vs factory functions which create copies of methods

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

`obj instanceOf C` is equivalent to `C.prototype.isPrototypeOf(obj)`

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
