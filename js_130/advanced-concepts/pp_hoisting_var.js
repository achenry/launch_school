// 1
var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo(); // Bye
// function declaration is hoisted to the top of the programme
// and variable declaration is discarded
// then foo is reassigned to new function which logs Bye

// 2
for (var index = 0; index < 2; index += 1) {
  console.log(foo); // undefined, Hello
  if (index === 0) {
    var foo = "Hello"; // has function scope
  } else {
    foo = "Bye";
  }
}

console.log(foo); // Bye
console.log(index); // 1

// 3
bar();

function bar() {
  console.log("foo!");
}

// 4
var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo(); // NaN

// 5
function foo(condition) {
  // var qux;
  // var bar;
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183; // function scope
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
