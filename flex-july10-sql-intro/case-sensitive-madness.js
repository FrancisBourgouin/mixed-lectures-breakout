const list = ["Bob", "Robert", "Gontran"];

const checkIfNameIsInList = (list, nameToCheck) => {
  for (const name of list) {
    if (name.toLowerCase() === nameToCheck.toLowerCase()) {
      return true;
    }
  }
  return false;
};

checkIfNameIsInList(list, "bob"); // => return true

const row = {
  id: 1,
  question: "",
  answer: "",
  rating: 1,
  author_id: 1,
  id: 1,
  name: "",
  funny: "",
  description: "",
};

("Why do programmers mix hallowen and christmas");
("because OCT 31 === DEC 25");

// rgb(200,200,200)
// #CCCCCC

// Numerical bases
// Base 10
// 14 => 1x10 + 4x1
// 14 => 1x10^1 + 4x10^0

// Base 16
// 14 => 1x16^1 + 4x16^0

// DEC 25 => Base 10

// Base 8
// 31 => 3x8^1 + 1x8^0 => 25
