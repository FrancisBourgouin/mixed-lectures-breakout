// const someObject = { a: 1, b: 2 }; // reference

// const someOtherObject = someObject; // share reference

// someObject.a = 9001;

// console.log(someObject, someOtherObject);

const someObject = { a: 1, b: 2, c: [1, 2, 3] }; // reference

// const someOtherObject = {};
// someOtherObject.a = someObject.a;
// someOtherObject.b = someObject.b;

const someOtherObject = { ...someObject }; // Shallow copy

someObject.a = 9001;
someObject.c.push(42);

console.log(someObject, someOtherObject);
