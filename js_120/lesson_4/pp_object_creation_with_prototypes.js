// 1
function createPet(animal, name) {
  return {
    animal,
    name,
    sleep() {
      console.log(`${name} is sleeping.`);
    },
    wake() {
      console.log(`${name} is awake.`);
    }
  }
}

let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

// 2
let PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },
  sleep() {
    console.log(`${this.name} is sleeping.`);
  },
  wake() {
    console.log(`${this.name} is sleeping.`);
  }
};
let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

// 3
// with the OLOO pattern, the methods sleep and wake are delegated to the prototype
// with the factory function pattern, they are created anew for each object instance
// objects created with the factory function can have a private state
// with OLOO, there is no way to define private state
