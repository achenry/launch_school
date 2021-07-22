// name the constructor
console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);

// create the (empty) class
class Cat {
  constructor(name) {
    this.name = name;
    // console.log(`Hello! My name is ${this.name}!`);
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  rename(newName) {
    this.name = newName;
  }
}

// create an instance
let kitty = new Cat('Sophie!');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe
kitty.greet();
Cat.genericGreeting();
kitty.personalGreeting();

// what are you?

// hello, Sophie! (part 1)

// hello, Sophie! (part 2)

// default person
class Person {
  constructor(name) {
    this.name = name || "John Doe";
  }
}
let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe

// Hello, Chloe!

// Generic Greeting (part 1)

// Generic Greeting (part 2)
