const mug = {
  // key:value
  color: "light blue",
  size: 500,
  material: "ceramic",
  isEmpty: true,
  previousDrink: "coffee",
  "😈": "maybe",
};

// Read

mug.isEmpty;

// Modify

mug.isEmpty = false;

// Create a new key/value pair

mug.temperature = 20;

// Delete a key?

// mug.temperature = undefined BAD!

delete mug.temperature;
