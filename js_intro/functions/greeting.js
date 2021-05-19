// let greetingMessage = "Good Morning!"; // global variable

function greetPeople(greetingMessage) { // greetingMessage parameter is a local variable, initialized from argument passed to function
  // let greetingMessage = "Good Morning!"; // local variable
  console.log(greetingMessage); // accessing global variable from within function
}

// function changeGreetingMessage(newMessage) {
//   greetingMessage = newMessage; // reassign global variable
// }

// changeGreetingMessage("Good Evening");
greetPeople("Good Morning!");
// console.log(greetingMessage); // ReferenceError: greetingMessage is not defined
