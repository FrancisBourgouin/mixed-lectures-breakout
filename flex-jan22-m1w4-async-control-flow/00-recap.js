// Existential Questions

// Callback ?

// Function given to another function as an argument!
// (To a higher order function HOF)

const doSomething = (something) => {
  something();
};

const someList = [1, 1337, 9001, 42];

const numAscendingSort = (a, b) => a - b;
const numDescendingSort = (a, b) => b - a;
const randomSort = () => (Math.random() > 0.5 ? -1 : 1);

const result = someList.sort(numDescendingSort);

console.log(result);

// In synchronous code, callbacks are a nice addition.

// Asynchronous code ?

console.log("Hello!");
// sleep(5);
console.log("How are you?");

// If javascript was a browser language or a terminal language first?
// Most annoying thing about browser interactions?
// Non blocking interactions
// Events!
// Emitter / Listener

const EventEmitter = require("events");

const fireExtinguisher = new EventEmitter();

fireExtinguisher.on("fire", () => {
  console.log("OMG!");
  console.log("💧🚿🚿🚿🚿🚿");
});

fireExtinguisher.emit("fire");
fireExtinguisher.emit("fire");
fireExtinguisher.emit("fire");
fireExtinguisher.emit("fire");
fireExtinguisher.emit("fire");
