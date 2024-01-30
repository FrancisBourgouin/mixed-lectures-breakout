const dog = {
  name: "Dogginator",
  breed: "Daschund",
  age: 13,
  isTrained: true,
  address: {
    number: 555,
    street: "Bob Street",
  },
  bark: function () {
    console.log("(high-pitched) WAF!");
  },
  sound: "(high-pitched) WAF!",
};

const anotherDog = {
  name: "Doggo",
  breed: "German Sheperd",
  age: 5,
  isTrained: false,
  bark: function () {
    console.log("WOOF WOOF");
  },
  sound: "WOOF WOOF",
};

// const bark = function (dog) {
//   console.log(dog.sound);
// };

// bark(dog);
// bark(anotherDog);
// bark(anotherDog);
// bark(dog);

dog.bark();
anotherDog.bark();
anotherDog.bark();
// We can put functions inside objects!
