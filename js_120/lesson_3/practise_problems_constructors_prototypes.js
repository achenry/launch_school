// 1
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area); // NaN
console.log(rect1.perimeter); // NaN

// RECTANGLE object has no properties width or height
// calling area and perimeter methods on RECTANGLE object implicitly
// sets the execution context to RECTANGLE

// 2

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

// 3
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius ** 2;
};

let a = new Circle(3);
let b = new Circle(4);

a.area().toFixed(2); // => 28.27
b.area().toFixed(2); // => 50.27
a.hasOwnProperty('area'); // => false

// 4
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword()); // true

// swingSword method has been added to constructor prototype
// and object instance ninja prototype is set to Ninja prototype

// 5
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); // TypeError
// reassigning Ninja.prototype to new object instead of mutating original
// so ninja object prototype doesn't change, still refers to original

// 6
function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object
Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`

// 7
let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor();

ninjaA.constructor === ninjaB.constructor;// => true

// 8
function User(first, last) {
  // return {
  //   name: `${first} ${last}`,
  // }
  // if function is called without new keyword
  if (!(this instanceOf User)) return new User(first, last);
  this.name = `${first} ${last}`;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
