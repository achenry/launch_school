function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

// 1
let hello = new Hello();
hello.hi(); // 'Hello!'

// 2
hello = new Hello();
hello.bye(); // Uncaught TypeError: hello.bye is not a function

// 3
hello = new Hello();
hello.greet();  // undefined

// 4
hello = new Hello();
hello.greet('Goodbye'); // 'Goodbye'

// 5
Hello.hi(); // Uncaught TypeError: Hello.hi is not a function
