// Object-Orientated Programming (OOP)
// a programming paradigm in which we think about a problem in terms of
// objects. In particular, it uses those objects to organize your program.

// Advantages
// it lets programmers think about a problem at a higher-level of abstraction,
// which helps them break down and solve the problem
// it helps programmers to write programs that reduce the dependencies in a
// program, which makes maintenance easier
// it makes code flexible, easy to understand, easy to change

// Disadvantages
// larger than the equivalent procedural program
// less efficient code. More memory, disk space, computing power.

// vs Procedural programming

// Programming paradigm
// state and behaviour

// Encapsulation
// bundling state (data) and behaviour (operations) into a single entity,
// grouping related properties and methods in a single object

// Public interface (but not in JS)
// restricting access to state and certain behaviours

// Methods
// OO style strongly discourages changing property values directly

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

// this keyword

// Collaborator Objects
// properties can store any object or value
// objects that help provide state within another object
// i.e. objects that are properties of other objects

// Functions as Object Factories
// functions that create and return objects of a particular type

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

// Class Inheritance
