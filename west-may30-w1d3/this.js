const potato = {
  name: "Grelot",
  avatar: "🥔",
  greet: function () {
    console.log("Hi my name is", this.name);
  },
};

potato.greet();
potato.name = "Wiggle";
potato.greet();

const friedPotato = {
  name: "Frites",
  avatar: "🍟",
  greet: function () {
    console.log("Hi my name is", this.name);
  },
};

friedPotato.greet();

const listOfWeird = [
  20,
  "Hello",
  function () {
    console.log(this[0]);
  },
];

listOfWeird[2]();
