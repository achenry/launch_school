// 1
function func() {
  return this;
}

let context = func();

console.log(context); // the global object in node, window in a browser

// 2
let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context); // the obj object

// 3
message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage(); // => 'Hello from the global scope!'

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage(); // => 'Hello from the function scope!'

// 4
args = [1,2,3];
deliverMessage.call(global, ...args);
deliverMessage.call(foo, ...args);
deliverMessage.apply(global, args);
deliverMessage.apply(foo, args);

// 5
let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

bar.add.call(foo); // 3
