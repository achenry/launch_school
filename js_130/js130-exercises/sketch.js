let obj = new boo();

class boo {
  constructor() {
    this.foo = 1;
  }
  sayHello() {
    console.log(this.foo);
  }
}

// closures
// 5
function makeMultipleLister(num) {
  return function() {
    for (let mult = num; mult < 100; mult += num) {
      console.log(mult);
    }
  }
}

// 6
let total = 0;
const add = num => console.log(total += num);
const subtract = num => console.log(total -= num);
add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

// 8
function later(func, arg) {
  return () => func(arg);
}

// 9
function later2(func, arg1) {
  return (arg2) => func(arg1, arg2);
}

// 9
function bind(context, func) {
  return () => func.call(context);
}

// private data
function makeCounterLogger(num1) {
  return (num2) => {
    if (num1 <= num2) {
      for (let num = num1; num <= num2; num++) console.log(num);
    } else {
      for (let num = num1; num >= num2; num--) console.log(num);
    }
  };
}
let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);

// 2
function makeList() {
  let todos = [];
  return function(todo) {
    if (!arguments.length) {
      if (todos.length) todos.forEach(todo => console.log(todo));
      else console.log('The list is empty.')
    } else if (!todos.includes(todo)) {
      todos.push(todo);
      console.log(`${todo} added`);
    } else if (todos.includes(todo)) {
      todos.splice(todos.indexOf(todo), 1);
      console.log(`${todo} removed`);
    }
  };
}
let list = makeList();
list();
list("make breakfast");
list("read book");
list();
list("make breakfast");
list();

function makeList() {
  let todos = [];
  return {
    list() {
      if (todos.length) todos.forEach(todo => console.log(todo));
      else console.log('The list is empty.')
    },
    add(newTodo) {
      todos.push(newTodo);
      console.log(`${newTodo} added`);
    },
    remove(todo) {
      todos.splice(todos.indexOf(todo), 1);
      console.log(`${todo} removed`);
    }
  }
}
let list = makeList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();


// IIFEs
let makeUniqueId = (function() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  }
})();

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
})(numbers);

// 4
(function(num) {
  for (let idx = num; idx >= 0; idx--) {
    console.log(idx);
  }
})(7);

// 6
let bar = (function (start) {
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
(function coundown(number) {
  console.log(number);
  if(number > 0) countdown(number - 1);
})(7);


let { qux: myQux, bar, foo } = obj;
let { qux, ...restObj } = obj;

( { qux, bar, foo } = obj);
let [a, b, , d, ] = [1, 2, 3, 4, 5];
[one, two] = [two, one];
let [ bar, ...qux ] = foo;
let bar = [...foo];
let qux = [...foo, 3,4,5, ...bar];

let objClone = { ...obj };
let megaObj = { ...obj1, ...obj2 };

// shorthand
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
function foo(arr) {
  let one = arr[0];
  let three = arr[2];
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
  return [].reduce.call(arguments, (total, number) => total * number);
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
  }
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]

// 8
function func(str1, str2, str3, str4, str5) {
  return {
    first: str1,
    last: str5,
    middle: [str2, str3, str4].sort(),
  }
}
let arr = ['a', 'b', 'c', 'd', 'e'];
let { first, last, middle } = func(...arr);
