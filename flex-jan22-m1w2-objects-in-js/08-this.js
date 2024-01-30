const someDoggo = {
  name: "Dogginator",
  breed: "Daschund",
  age: 13,
  isTrained: true,
  address: {
    number: 555,
    street: "Bob Street",
  },
  // bark: () => console.log(this.sound), BAD!
  bark: function () {
    console.log(this.sound);
  },
  sound: "(high-pitched) WAF!",
};

const anotherDog = {
  name: "Doggo",
  breed: "German Sheperd",
  age: 5,
  isTrained: false,
  bark: function () {
    console.log(this.sound);
  },
  sound: "WOOF WOOF",
};

// CONCEPT OF THIS!

someDoggo.bark();

const someFunction = function () {
  //
};

// const someArrowFunction = () => {
//   //
// };

// const someArrowFunctionThatDoesOneThing = () => console.log("YAY");
