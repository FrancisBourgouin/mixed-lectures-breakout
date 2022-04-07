// Why do we use variables ?
// const someArray = [1, 2, 3];

// for (const element of someArray) {
//   console.log(element);
// }

// Why do we use functions?

const listOfNames = ["Darren", "JC", "Daniel", "Kelly", "Charles"];
const anotherListOfNames = ["Claudine", "Dominik", "Heesoo", "Mitchell"];

const sayHelloToListOfNames = (listOfNames) => {
  for (const name of listOfNames) {
    console.log(`Hello ${name}!`);
  }
};

const singNamesOfTheList = (listOfNames) => {
  for (const name of listOfNames) {
    console.log(`🎶🎵 ${name}! 🎵🎶`);
  }
};

const sayHelloAndSingBecauseWhyNot = (listOfNames, singOrHello) => {
  for (const name of listOfNames) {
    if (singOrHello === "sing") {
      console.log(`🎶🎵 ${name}! 🎵🎶`);
    } else {
      console.log(`Hello ${name}!`);
    }
  }
};

const doSomething = (name) => console.log(name);
const doSomethingElse = (name) => console.log(`YEAH YEAH ${name} YEAH`);

const iterateOverNamesAndDoSomething = (listOfNames) => {
  for (const name of listOfNames) {
    doSomething(name);
  }
};

const iterateOverNamesAndDoSomethingCB = (listOfNames, actionNotYetDefined) => {
  for (const name of listOfNames) {
    actionNotYetDefined(name);
  }
};

iterateOverNamesAndDoSomething(anotherListOfNames);

iterateOverNamesAndDoSomethingCB(listOfNames, doSomething);
iterateOverNamesAndDoSomethingCB(listOfNames, doSomethingElse);

const division = (numerator, divider) => numerator / divider;

division(3, 4);

const callbackParty = (actionCallback1, actionCallback2, actionCallback3) => {
  console.log("FUNCTION 1 GO");
  actionCallback1();
  console.log("FUNCTION 2 GO");
  actionCallback2();
  console.log("FUNCTION 3 GO");
  actionCallback3();
};

const console1 = () => console.log("Action callback 1");
const console2 = () => console.log("Action callback 2");
const console3 = () => console.log("Action callback 3");

callbackParty(console3, console2, console1);

// const prepareFancyOutput = () => {
//   console.log("⚡⚡⚡⚡⚡");
// };

// prepareFancyOutput();
// singNamesOfTheList(listOfNames);
// prepareFancyOutput();
// singNamesOfTheList(anotherListOfNames);
// prepareFancyOutput();

// someArray.forEach((potato, wiggle, ninja))

const createSentence = (subject, verb, complement) => {
  console.log(`${subject} ${verb} ${complement}`);
};

createSentence("Dancing", "Bob", "In the rain");
createSentence("Bob", "Dancing", "In the rain");
