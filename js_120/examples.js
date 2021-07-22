// using methods to change states
let raceCar = {
  engineOn: false,
  fuelLevel: 0.5,
  startEngine() {
    this.engineOn = true;
  },
  drive() {
    this.fuelLevel -= 0.1;
}

// collaborator objects
let andy = {
  name: "andy",
  toys: []
};

let buzz = {
  name: "buzz",
  play() {}
}

let woody = {
  name: "woody",
  play() {}
}

andy.toys.push(buzz);
andy.toys.push(woody);

// function factories
function createCar(make, fuelLevel, engineOn) {

  return {
    make,
    fuelLevel,
    engineOn,
    startEngine() {
      this.engineOn = true;
    },
    drive() {
      this.fuelLevel -= 0.1;
    }
  };
}

let raceCar = createCar('BMW', 0.5, false);
let electricCar = createCar('Nissan', 1, false);

// checking for property existence
raceCar.hasOwnProperty('make'); // only 'own' properties
'make' in raceCar; // 'own; and inherited properties

Object.keys(raceCar); // 'own' enumerable properties - picked up by for/in, spread operator, Object.assign method
for (let key in raceCar) {} // all enumerable properties
Object.getOwnPropertyNames(raceCar); // all properties

// Prototypal Inheritance - assigning a new object's [[Prototype]] property to that of another
let a = {
  foo: 1,
  bar: 2,
};
let b = Object.create(a);
b; // {}
b.hasOwnProperty('foo'); // false
b.foo = 4;
b.hasOwnProperty('foo'); // true

Object.getPrototypeOf(b); // a
Object.setPrototypeOf(b, a);

// default prototype
Object.getPrototypeOf({}); // Object.prototype

// getting the prototype chain
let a = {
  foo: 1,
};
let b = {
  bar: 2,
};
let c = {
  baz: 3
};
Object.setPrototypeOf(c, b);
Object.setPrototypeOf(b, a);
b.isPrototypeOf(c); // true
a.isPrototypeOf(c); // true

function getProtoChain(obj) {
  let prototype = Object.getPrototypeOf(obj);
  let chain = [];
  while (prototype) {
    chain.push(prototype);
    prototype = Object.getPrototypeOf(prototype);
  }
  return chain;
}

// check or non-null prototype before accessing Object.prototype methods
Object.getPrototypeOf(obj) && obj.isPrototypeOf(subObj)

// dealing with context loss
let obj = {
  a: "hello",
  b: "world",
  foo() {
    let self = this;
    [1, 2, 3].forEach(function(num) {
      console.log(self.a, self.b);
    });
  }
};
// OR
let obj = {
  a: "hello",
  b: "world",
  foo() {
    [1, 2, 3].forEach(function(num) {
      console.log(this.a, this.b);
    }.bind(this));
  }
};
// OR
let obj = {
  a: "hello",
  b: "world",
  foo() {
    [1, 2, 3].forEach(function(num) {
      console.log(this.a, this.b);
    }, this);
  }
};
// OR
let obj = {
  a: "hello",
  b: "world",
  foo() {
    [1, 2, 3].forEach(num => {
      console.log(this.a, this.b);
    });
  }
};
// OR
let obj = {
  a: "hello",
  b: "world",
  foo() {
    function sayHello() {
      console.log(this.a, this.b);
    }
    sayHello.call();
  }
};

// OLOO
let carPrototype = {
  start() {
    this.engineOn = true;
  },
  stop() {
    this.engineOn = false;
  },
  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this;
  },
}

let car = Object.create(carPrototype).init('BMW', "Z", 2020);

// Prototypal Inheritance
let rectanglePrototype = {
  getArea() {
    return this.length * this.width;
  },
};

let squarePrototype = Object.create(rectanglePrototype);
let squareObject = Object.create(squarePrototype);
squareObject.length = 1;
squareObject.width = 1;

// Constructor Functions & Pseudo-classical inheritance
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
  Rectangle.allRectangles.push(this);
}

Rectangle.allRectangles = [];
Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};
let rect = new Rectangle(2, 4);
rect instanceof Rectangle; // true
Rectangle.prototype.isPrototypeOf(rect); // true

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.creaete(Rectangle.prototype);
Square.prototype.constructor = Square;

// calling constructor function witouth new keyword
if (!this isinstanceof Square) {
  return new Square(size);
}



// Classes
class Rectangle {
  constructor(length, width) {}
  getArea() {}
}
class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

// Mixins
const Walkable = {
  walk() {}
}

const Talkable = {
  talk() {}
}

class Humanoid {}
Object.assign(Humanoid.prototype, Walkable, Talkable);

// polymorphism by inheritance
class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  sayHello() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor() {
    super('dog', 'woof');
  }
}

class Cat extends Animal {
  constructor() {
    super('cat', 'meow');
  }
}

// polymorphism through duck-typing
let andy = {
  toys: [],
  play() {
    this.toys.forEach(toy => toy.play());
  },
  addToys(...toys) {
    this.toys = this.toys.concat(...toys);
  }
}

let buzz = {
 play() {}
}

let woody = {
  play() {}
}

andy.addToys(buzz, woody);
