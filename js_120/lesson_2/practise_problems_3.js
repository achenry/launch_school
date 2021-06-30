// 1
// bind method of a function object to permanently bind a function to an execution context

// 2
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj); // => nothing, returned function has not been invoked

// 3
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(foo()); // NaN
console.log(bar()); // 5

// 4
let positivity = {
  message: 'JavaScript makes sense!',
};

let negativity = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positivity);

negativity.logMessage = bar;
negativity.logMessage(); // => 'JavaScript makes sense!'

// 5
let obj = {
  a: 'Amazebulous!',
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj); // => 'Amazebulous'
