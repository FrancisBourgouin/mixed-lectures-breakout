const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   const value = arr[i];

//   console.log(value);
// }

// for (const value of arr) {
//   console.log(value);
// }

const someObject = { name: "Pequeno Pollo", email: "pock@pock.com", password: "eggs" };

// For in loop!

// First, extract the keys (or the values, or the entries)
// Then for of loop

for (const key in someObject) {
  // if (someObject.hasOwnProperty(key)) {
  console.log(key);
  // }
}

for (const key of Object.keys(someObject)) {
  console.log(key);
}

for (const value of Object.values(someObject)) {
  console.log(value);
}
