const potato = {
  name: "Russett",
  weight: 400,
  avatar: "🥔",
  creationDate: new Date("2022-01-01"),
  nutrients: [{ name: "fiber", concentrationInPercent: 20 }],
};

// Access object properties : [] notation, . notation

// Square Bracket Notation:

potato["name"]; // Works! (Russett)
// potato[name] // Not Work! (Error)
const keyThatWeWantToAccess1 = "avatar";
potato[keyThatWeWantToAccess1];

const fetchValueFromObject = function (obj, key) {
  console.log("The value is: ", obj[key]);
};

fetchValueFromObject(potato, "name");

// Dot Notation : Drax (Very very litteral!)

potato.name; // Works! (Russett)

const keyThatWeWantToAccess2 = "avatar";
potato.keyThatWeWantToAccess2; // Not work! (Undefined)

// Avoid noise!

// someObject["someKey"]["someOtherKey"][0]["name"];
// someObject.someKey.someOtherKey[0]["name"];

potato.nickname = "Potaty";
console.log(potato);
