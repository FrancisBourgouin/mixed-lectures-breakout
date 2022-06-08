const fs = require("fs");

// Callback?

// A function called by another function (only if passed as a parameter)
// A function passed as an argument to another function

const showOff = (message) => {
  console.log("🔥🔥🔥🔥🔥");
  console.log(message);
  console.log("🔥🔥🔥🔥🔥");
};

const addTwoAndTwo = () => {
  showOff(2 + 2);
};

const addNumbers = (a, b) => {
  showOff(a + b);
};

const addNumbersBoring = (a, b) => {
  console.log(a + b);
};

addNumbers(5, 5);
addNumbers(-10, 1000);

const addNumbersCB = (a, b, action) => {
  action(a + b);
};

addNumbersCB(5, 5, showOff);
addNumbersCB(5, 5, console.log);

// Solve async situation

const smallArray = [1, 2, 3];

smallArray.forEach((element) => console.log(element));

setTimeout(() => console.log("hello!"), 0);
setTimeout(() => addNumbersCB(5, 5, showOff), 0);

console.log("faster than a timeout at 0");

fs.readFile("./review.js");

// Async ? RoT : External to JS

// Sync: Callbacks or not
// Async: Callbacks
