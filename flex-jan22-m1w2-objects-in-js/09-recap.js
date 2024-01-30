// Objects!

// Data structures
// Make everything but the primitives in JS

// Object can never be falsy
// Because even empty, they still have methods, structure

const someObject = {}; // new Object()

someObject.someKey = "some value";

// {someKey:"some value"}

someObject.someKey = "something else";

// {someKey:"something else"}

// someObject.someKey = undefined BAD!
delete someObject.someKey; // GOOD

// {}

const keysToAdd = ["name", "age", "email", "isPotato"];

for (const keyToAdd of keysToAdd) {
  someObject[keyToAdd] = undefined;
  // someObject.keyToAdd
}

// {name:undefined, age:undefined, email:undefined, isPotato:undefined}

const entriesToAdd = [
  ["name", "Bob"],
  ["age", 50],
  ["email", "none@ofyourbusiness"],
  ["isPotato", true],
];

for (const entry of entriesToAdd) {
  const key = entry[0];
  const value = entry[1];

  someObject[key] = value;
}

console.log(someObject);

console.log(Object.keys(someObject));
console.log(Object.values(someObject));
console.log(Object.entries(someObject));

const someUser = {
  name: "bob",
  a: 1,
};
const anotherUser = {
  a: 1,
  name: "bob",
};

const name = Object.values(someUser)[0];
const anotherName = Object.values(anotherUser)[0];
