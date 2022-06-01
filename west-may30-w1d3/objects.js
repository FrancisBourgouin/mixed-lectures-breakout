// Why objects?

// Because of key/values
// Less variables
// Describe an item
// Store / Reuse

const materialOfMug = "Ceramic";
const colorOfMug = "White";
const capacityOfMugInMl = 350;
const contentOfMug = "Coffee";

// Objects - Describe properties of a specific element (RoT)

const mugObj = {
  material: "Ceramic",
  color: "White",
  capacityInMl: 450,
  content: "Coffee",
};
const mugObj2 = {
  material: "Ceramic",
  color: "Pink",
  capacityInMl: 850,
  content: "Tea",
};
const mugArr = ["Ceramic", "White", 450, "Coffee"]; // Bad!

// Arrays - When we to list independent items (RoT)

const mugListObj = {
  1: mugObj,
  2: mugObj2,
}; // Bad!

const mugListArr = [mugObj, mugObj2];

// Structure helps to build a lot of items

const mugArmy = [];

for (let i = 0; i < 100; i++) {
  const mugObj = {
    material: "Ceramic",
    color: "White",
    capacityInMl: 450,
    content: "Coffee",
  };

  mugArmy.push(mugObj);
}
