// our very own bind()
/*function myBind(func, context, ...initArgs) {
  return function(...finalArgs) {
    return func.apply(context, initArgs.concat(finalArgs));
  };
}
let obj = {
  name: "A"
};

let sayHello = function() {
  return `Hello, my name is ${this.name}`;
};
let boundFunc = myBind(sayHello, obj);
boundFunc();

// myBind() improved

function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]

const result1 = addArguments(1, 2);
//  3

// Create a function with a preset leading argument
const leadingThirtysevenList = myBind(list, null, 37);

// Create a function with a preset first argument.
const addThirtySeven = myBind(addArguments, null, 37);

const list2 = leadingThirtysevenList();
//  [37]

const list3 = leadingThirtysevenList(1, 2, 3);
//  [37, 1, 2, 3]

const result2 = addThirtySeven(5);
//  37 + 5 = 42

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
//  (the second argument is ignored)

// make a stack
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
function delegate(obj, methodName) {
  let args = [].slice.apply(arguments, [2]);
  return () => obj[methodName].call(obj, args);
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'

// anonymizer
const Account = (function() {
  function anonymize() {
    const CHARS = '0123456789abcdefghijklmnopqrstuvxyz'.split('');
    const NUM_CHARS = 16;
    let token = '';
    for (let idx = 0; idx < NUM_CHARS; idx++) {
      token += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    return token;
  }

  function isValidPassword(testPassword) {
    return password === testPassword;
  }

  let email;
  let password;
  let firstName;
  let lastName;

  return {
    init(newEmail, newPassword, newFirstName, newLastName) {
      email = newEmail;
      password = newPassword;
      firstName = newFirstName;
      lastName = newLastName;
      this.displayName = anonymize();
      return this;
    },
    reanonymize(givenPassword) {
      if (isValidPassword(givenPassword)) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },
    resetPassword(givenPassword, newPassword) {
      if (isValidPassword(givenPassword)) {
        password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },
    firstName(givenPassword) {
      if (isValidPassword(givenPassword)) {
        return firstName;
      } else {
        return 'Invalid Password';
      }
    },
    lastName(givenPassword) {
      if (isValidPassword(givenPassword)) {
        return lastName;
      } else {
        return 'Invalid Password';
      }
    },
    email(givenPassword) {
      if (isValidPassword(givenPassword)) {
        return email;
      } else {
        return 'Invalid Password';
      }
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));
*/
// mini inventory management system
// check  that all necessary info are present and valid
let ItemCreator = (function(name, category, quantity) {
  const MIN_CHARS = 5;

  function isValidName(name) {
    return name.split('').filter(char => char !== ' ').length >= MIN_CHARS;
  }

  function isValidCategory(category) {
    return category.length >= MIN_CHARS && !category.split('').includes(' ');
  }

  function isValidQuantity(quantity) {
    return quantity !== undefined;
  }

  function generateSkuCode(name, category) {
    const NUM_NAME_CHARS = 3;
    const NUM_CAT_CHARS = 2;
    return (name.split('').filter(char => char !== ' ').join('').substr(0, NUM_NAME_CHARS)
      + category.substr(0, NUM_CAT_CHARS)).toUpperCase();
  }

  // return constructor function WITH private methods
  return function(name, category, quantity) {
    if (!isValidName(name) || !isValidCategory(category) || !isValidQuantity(quantity)) {
      // using explicit return value in constructor function
      return { notValid: true };
    } else {
      this.skuCode = generateSkuCode(name, category);
      this.name = name;
      this.category = category;
      this.quantity = quantity;
    }
  }
})();

// creates items, updates item info, deletes items, queries items
let ItemManager = {
  items: [],

  create(name, category, quantity) {
    let newItem = new ItemCreator(...arguments);
    if (newItem.notValid) return false;
    else {
      return this.items.push(newItem);
    }
  },

  update(skuCode, obj) {
    Object.assign(this.items[this.getItemIndexByskuCode(skuCode)], obj);
  },

  delete(skuCode) {
    this.items.splice(this.getItemIndexByskuCode(skuCode), 1);
  },

  getItemIndexByskuCode(skuCode) {
    return this.items.indexOf(this.items.find(item => item.skuCode === skuCode));
  },

  getItemsInStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  inStock() {
    this.getItemsInStock().forEach(item => console.log(item));
  },

  itemsInCategory(category) {
    this.items.filter(item => item.category === category).forEach(item => console.log(item));
  },
};

let ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },
  // maintaining reference to ReportManager object using closures
  createReporter(skuCode) {
    return (function() {
      let item = this.items.items[this.items.getItemIndexByskuCode(skuCode)];
      return {
        itemInfo() {
          Object.entries(item)
            .forEach(([key, value]) => console.log(`${key}: ${value}`));
        }
      }
    }).bind(this)();
  },

  reportInStock() {
    console.log(this.items.getItemsInStock().reduce((csv, item, idx, arr) => {
      csv += `${item.name}`;
      if (idx !== arr.length - 1) {
        csv += ', ';
      }
      return csv;
    }, ''));
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
