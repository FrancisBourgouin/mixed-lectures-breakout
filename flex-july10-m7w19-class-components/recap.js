// Javascript Classes

// Object, Array, Date, Promise, Error

// In JS, classes are normally writen in PascalCase

// What is a class?
// It's a place where students join up to learn something
// Template! Blueprint on how to build a specific structure

// new Promise((res,rej) => ...)

// Promise.resolve("")

const someArray = [1, 2, 3]; // new Array(1,2,3)

const someOtherArray = [4, 5, 6];

someArray.length;

someOtherArray.includes(5);

const someDate = new Date();

someDate.toLocaleDateString();

class Potato {
  constructor(type, name) {
    // console.log("Building a potato with the type and name of", type, name);

    this.type = type;
    this.name = name;
  }

  bake = () => {
    console.log("Cooking in the oven!");
  };

  squish = () => {
    console.log("***squishing sound***");
  };

  greet = () => {
    console.log(`Hi my name is ${this.name} and I'm a ${this.type} potato.`);
  };
}

class FrenchPotato extends Potato {
  constructor(type, name) {
    super(type, name);
  }

  greet = () => {
    console.log(
      `HON HON! Je suis une patate de type ${this.type} et je m'appelle ${this.name}`
    );
  };
}

const russett = new Potato("Russett", "Potator");
const yukonGold = new Potato("Yukon Gold", "Potatinator");

const kenny = new FrenchPotato("Irish Cobbler", "Kenny");
// console.log(russett, yukonGold);

kenny.greet();
kenny.bake();

// jQuery =>

// React => Data driven (state, props)
// Functions is default
