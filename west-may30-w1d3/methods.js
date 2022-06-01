// Method ?

// .slice, .forEach, .floor

const potato = {
  name: "Russett",
  weight: 400,
  avatar: "🥔",
  creationDate: new Date("2022-01-01"),
  nutrients: [{ name: "fiber", concentrationInPercent: 20 }],
  munch: function () {
    console.log("Ow!");
  },
};

const crazyPotato = {
  munch: function () {
    console.log("OMG OW THAT HURTS ARE YOU CRAZY");
  },
};

potato.munch();
crazyPotato.munch();

console.log("I AM A METHOD TOO");
console.log(console);
