// Iterate!

// (for..of) (for..in) (c-style for)      (.map - .forEach)

const listOfStuff = ["Gundam", "Mug", "Battery", "Mic"];

// for (const item of listOfStuff) {
//   console.log(item);
// }

// for (const index in listOfStuff) {
//   console.log(listOfStuff[index], index);
// }

for (let i = 0; i < listOfStuff.length; i++) {
  console.log(listOfStuff[i], i);
}

// (for..in) ? (c-style for) ? (for..of) ?

const person = {
  name: "Bob",
  nickname: "Robert",
  age: 9001,
};

for (const key in person) {
  console.log(key, person[key]);
}

// for (const value of person) { doesnt work
//   console.log(value);
// }

// console.log(Object.values(person), Object.keys(person));

// for (const value of Object.values(person)) {
//   console.log(value);
// }

// for (const key of Object.keys(person)) {
//   console.log(key, person[key]);
// }

console.log(Object.entries(person));
