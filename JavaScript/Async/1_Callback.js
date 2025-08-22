// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation is completed. Callbacks are often used in asynchronous programming, such as handling events, making API calls, or executing code after a delay.
// How It Works
// 1. Function as a First-Class Citizen: In JavaScript, functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, or returned from other functions.
// 2. Callback Execution: The callback function is invoked at a specific point within the function that receives it.

// 1.1
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // Executing the callback
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Callback Hell or Pyramid of Doom
// function callback1(callback2) {
//   console.log("callback1");
//   callback2();
// }
// function callback2(callback3) {
//   console.log("callback2");
//   callback3();
// }
// function callback3() {
//   console.log("callback3");
// }

// callback1(() => {
//   callback2(() => {
//     callback3();
//   });
// });