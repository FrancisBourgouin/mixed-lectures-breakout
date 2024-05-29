// Javascript Classes

// Date, Promise, Error, Array, Object, ...
// PascalCase

// What is a class?
// A group of students?
// A blueprint

// Date

// new Date()
// // New instance

// OOP => Object Oriented Programming

class Potato {
  constructor(name, size) {
    this.name = name;
    this.size = size > 3 ? "decent" : "big";
  }

  sayHi = function(){
    console.log(`Hi! My name is ${this.name}`)
  }

  attack = function(){
    console.log("AYA! *potato breaks down*")
  }
}

class SuperPotato extends Potato{
  constructor(name, size){
    super("Super "+ name, size)
  }

  attack = function(){
    console.log("AYA! *potato breaks the wall*")
  }
}

const yukonGold = new Potato("Yukon Gold", 1);
const irishCobbler = new SuperPotato("Irish Cobbler", 5);

console.log(yukonGold);

yukonGold.attack()
irishCobbler.attack()

console.log(irishCobbler)


// BLAST FOR THE PAST!
jQuery