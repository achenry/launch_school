// 1
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription); // undefined undefined is a undefined
// execution context is global object because method is copied when it is passed as argument
// global doesn't have properties defined

// 2
function logReturnValWithContext(func, context) {
  let returnVal = func.call(context);
  // let returnVal = func.apply(context);
  // let returnVal = func.bind(context)();
  console.log(returnVal);
}
logReturnValWithContext(turk.getDescription, turk);

// 3
let turkGetDescription = turk.getDescription.bind(turk);

// 4
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();
"The Elder Scrolls: Arena\n" +
"The Elder Scrolls: Daggerfall\n" +
"The Elder Scrolls: Morrowind\n" +
"The Elder Scrolls: Oblivion\n" +
"The Elder Scrolls: Skyrim";

// No, because this in inner function refers to global object

// 5
TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    let self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ': ' + title);
    });
  }
};

// 6

TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    }, this);
  }
};

// 7

TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach((title) => {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

// 8
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

// foo.a === 0, global.a === a === NaN

// 9
let foo = {
  a: 0,
  incrementA: function() {
    let self = this;
    function increment () {
      this.a += 1;
      // self.a += 1;
    }

    // increment();
    // increment.call(this);
    increment.apply(this);
  }
};
