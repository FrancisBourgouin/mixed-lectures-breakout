// Objects are data structures!

// Object are never falsy!

// We can put whatever we want in an object!

const someObject = {
  string: "Hello!",
  numbers: 10101,
  undefined: undefined,
  null: null,
  objects: { someKey: "someValue" },
  arrays: [1, 2, 3, 4, 5],
};

// Access values of an object using the dot notation or square bracket notation

// Square bracket when the value of the key is unknown at the time of writing

const someKey = "string";

someObject[someKey];

// Dot notation when we know the value of the key

someObject.arrays;

// Create new key/value pairs by assigning a key that doesn't exist yet

someObject.date = new Date();

// Modify a key/value pair by assiging a new value to an existing key

someObject.string = "Hey hello there!";

// Use methods to use functions in the context of an object

someObject.someFunction = function () {
  console.log(this.string);
};

// Use 'this' to access the scope of the object (when using fct expression with function)

// immutability -> to not mutate

let someNumber = 5;

const addToSomeNumber = function (addition) {
  someNumber += addition;
};

addToSomeNumber(5);
console.log(someNumber);

const addToSomeNumberIM = function (addition) {
  return someNumber + addition;
};

const newSomeNumber = addToSomeNumberIM(5);
