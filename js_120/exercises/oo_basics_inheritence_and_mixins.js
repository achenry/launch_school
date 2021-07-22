// inherited year
class Vehicle {
  constructor(year) {
    this.year = year;
  }

  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
    this.startEngine();
  }

  startEngine(speed) {
    return `${super.startEngine()} Drive ${speed}, please!`;
  }
}

class Car extends Vehicle {}

let truck = new Truck(2003, 'Short');
console.log(truck.year); // 2003
console.log(truck.bedType); // Short

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));

let car = new Car(2015);
console.log(car.year); // 2015

// start the engine (part 1)

// only pass the year

// start the engine (part 2)

// walk the cat
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
};

Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());

// swimming
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
};

class Fish {
  constructor(name) {
    this.name = name;
    Object.assign(this, swimMixin);
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {
  constructor() {
    super();
    Object.assign(this, swimMixin);
  }
}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());

// towable (part 1)

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
};

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  // constructor(year) {
  //   super(year);
  //   // Object.assign(this, towMixin);
  // }
}
Object.assign(Truck.prototype, towMixin); // less wasteful of memory

class Car extends Vehicle {}

let truck = new Truck(2002);
truck.tow();

// towable (part 2)

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);
