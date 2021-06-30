// 1
// Capitalised first letter. CamelCase.

// 2
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper();
// TypeError: no new keyword used so lizzy is undefined and the scamper method has been added to the global object
// invoked without new keyword
// no explicit return value, so return value is undefined

// 3
lizzy = new Lizard();
