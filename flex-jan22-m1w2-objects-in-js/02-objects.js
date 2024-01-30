// Why objects?

const mugColor = "light blue";
const mugSizeInMl = 500;
const mugMaterial = "ceramic";
const mugIsEmpty = true;

const someObject = {};

const mug = {
  // key:value
  color: "light blue",
  size: 500,
  material: "ceramic",
  isEmpty: true,
  previousDrink: "coffee",
  "😈": "maybe",
};

// Access values of an object

const keyToCheck = "isEmpty";
// Dot notation (Drax style)
mug.material;

mug.keyToCheck; // undefined

// Square bracket notation
mug["material"];

mug[keyToCheck]; // true

mug["mat" + "erial"];

mug["😈"];

// Dot notation is superior when it comes to signal-to-noise ratio

veryBigObject.user.name.first.letters.first;

veryBigObject["user"]["name"]["first"]["letters"]["first"];

// Can we combine both?

// mug[material]
