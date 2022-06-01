const someObject = { a: 1, b: 2 };
const otherObject = someObject;

otherObject.a = 5;

console.log(otherObject, someObject);

let number = 5;
let otherNumber = number;

otherNumber = 10;

console.log(number, otherNumber);
