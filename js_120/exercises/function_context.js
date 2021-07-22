// what is this?
let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName); // NaN

// the franchise
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    // let self = this;
    return [1, 2, 3].map(function(number) {
      // return self.name + ' ' + number;
      return this.name + ' ' + number;
    }.bind(this));
    // }, this);
  },
};

franchise.allMovies();
// the franchise - solution 2

// myFilter()
function myFilter(array, func, thisArg) {
  let result = [];

  array.forEach(function(value) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
};

myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]
