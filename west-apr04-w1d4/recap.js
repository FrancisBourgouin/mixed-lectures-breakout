someFunction();

// Iteration methods
function someFunction() {
  console.log("I AM SOMEFUNCTION YEAH");
}
// .forEach
// for() (c-style)
// while

// Shortcuts for the c-style loop

// for .. of // Arrays or Strings (don't need the index)
// for .. in // Objects (keys), Arrays ?

const someArray = [1, 2, 3, 4, 5];

// for (const element of someArray) {
//   console.log(element);
// }

// for (const index in someArray) {
//   console.log(someArray[index]);
// }

const someObject = { a: 1, b: 2, c: 3 };

// for (const something of someObject) {
//   console.log(something);
// }
// for (const something of Object.values(someObject)) {
//   console.log(something);
// }

// for (const something of Object.keys(someObject)) {
//   console.log(something);
// }

// for (const something of Object.entries(someObject)) {
//   console.log(something);
// }

// // const bob = 5

// // if(true){
// //   const bobby = 5

// //   if(true){
// //     bobby
// //   }
// // }

// for(let i = 0; i < someArray.length; i++){
//   console.log(someArray[i])
// }

// Function definition (Hoisted) EVIL
function someFunction() {
  console.log("MWAHAHAHAHAHHA");
}

// Function expressions
const someOtherFunction = function () {
  console.log("I AM SOMEOTHERFUNCTION");
};

const someArrowFunction = () => {
  console.log("ARROWS ARE GREAT");
};

// Are functions Objects? Yes

console.log();
