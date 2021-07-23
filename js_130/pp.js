// hoisting and the var statement
// 5
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

// 6

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}
var Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);


// Closures
// 5
function makeMultipleLister(num) {
  return () => {
    for (let mult = num; mult < 100; mult += num) {
      console.log(mult);
    }
  }
}

// 6
let total = 0;
let add = num => total += num;
let subtract = num => total -= num;

// 8
let later = (func, arg) => {
  return () => func(arg);
};

// 9
let later2 = (func, arg) => {
  return arg2 => func(arg, arg2);
};

// 10
function bind(context, func) {
  return () => func.call(context);
}


// IIFEs
// 2
(function() {
  console.log("Sometimes, syntax isn't intuitive!");
}());

// 3
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function (arr) {
    return arr.reduce((sum, number) => {
      sum += number;
      return sum;
    }, 0);
  })(numbers1);

// 4
(function(num) {
  for (let count = num; count >= 0; count--) {
    console.log(count);
  }
})(7);

// 6


let bar = (function(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

// 7
(function countdown (num) {
  console.log(num);
  if (num > 0) {
    countdown(num - 1);
  }
})(7);


// shorthand notation
// 1
function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}
// 2
function foo() {
  return {
    bar: function() {
      console.log("bar");
    },
    qux: function(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}

// 3
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2, 3);
let bar = obj.bar;
let baz = obj.baz;
let qux = obj.qux;

// 4
function foo([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];

// 5
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);

// 6
function product() {
  return Array.from(arguments).reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

// 7
function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  return {
    type: animalType,
    age,
    colors,
  };
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]

// 8
function func(first, middleStr1, middleStr2, middleStr3, last) {
  return {
    first,
    last,
    middle: [middleStr1, middleStr2, middleStr3].sort(),
  };
}
let arr = ['abc', 'def', 'ghi', 'jkl', 'mno'];
let { first, last, middle } = func(...arr);


// Side-Effects


// Clousures
function() {
  let transactions = [];
  // return {
  //   balance: 0,
  //   withdraw(amount) {
  //     transactions.push(amount);
  //     this.balance += amount;
  //   }
  // }
  return function Account() {
    this.balance = 0;
  }
}


// IIFE
// create a private scope
sum += (function(a, b) {
  return a + b;
})();

{
  // private scope, may have same variable names as other code,
  // but invisible here
}

// create private data
let newBankAccount = (function() {
    let transactions = [];
    // return {
    //   balance: 0,
    //   withdraw(amount) {
    //     transactions.push(amount);
    //     this.balance += amount;
    //   }
    // }
    return function Account() {
      this.balance = 0;
    }
  })();


// setTimeout
// 1
function delayLog() {
  for(let num = 1; num <= 10; num++) {
    setTimeout(() => console.log(num),num * 1000);
  }
}
delayLog();


// setInterval
function startCounting() {
  let num = 1;
  return setInterval(() => console.log(num++), 1000);
}

let id = startCounting();
clearInterval(id);

// testing
const Car = require('./car');

describe('Car class', () => {
  let car;

  beforeEach(() => {
      car = new Car();
  });

  // afterEach(() => {
  //   car = new Car();
  // });

  test.skip('has four wheels', () => {
    assert(car.wheels).toBe(4);
  });
});


// closures, private data and iifes
// bind
function myBind(func, context, ...firstArgs) {
  return function(...secondArgs) {
    func.apply(context, [...firstArgs, ...secondArgs]);
  };
  // return (...args) => func.apply(context, args);
}

// stack
function newStack() {
  let stack = [];
  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(val => console.log(val));
    }
  };
}

// delegate
function delegate(context, methodName, ...args) {
  return () => context[methodName].apply(context, args);
}

// anonymizer
const Account = (function () {
  const anonymizer = function() {
  let password;
  let firstName;
  let lastName;
  let email;
  };
  return {
    init() {
      this.displayName = this.reanonymize();
      return this;
    },
    reanonymize() {},
    resetPassword(pass) {},

  }
})();

function createAccount() {
  const anonymizer = function() {
  let password;
  let firstName;
  let lastName;
  let email;
  };
  return {
    init() {
      this.displayName = this.reanonymize();
      return this;
    },
    reanonymize() {},
    resetPassword(pass) {},

  }
}

// mini inventory
let ItemCreator = (function() {
  const isInvalid = (...arguments) => {};
  const makeSkuCode = (name, cat) => {};
  return function(name, category, quantity) {
    if (isInvalid()) return {isInvalid: true};
    else {
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.skuCode = makeSkuCode(name, category);
    }
  };
})();


// misc topics

//
function sum(...values) {

  return values.reduce(function(a, b) {
    return a + b;
  });
}

sum(1, 4, 5, 6); // 16

//
function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));
// logs: Kirk, James T.
