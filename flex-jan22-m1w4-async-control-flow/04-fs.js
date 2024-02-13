// Filesystem
// Interactions with the file system

const fs = require("fs");

const outputFileContent = (err, data) => {
  if (err) {
    console.log("OH NO");
    console.log(err);
  }

  console.log(data);
};

const createMegaBob = (err, data) => {
  if (err) {
    console.log("OH NO");
    console.log(err);
    return;
  }

  let outputString = "";
  for (let i = 0; i < 20; i++) {
    outputString += data;
    outputString += "\n";
  }

  fs.writeFile("./mega-bob.txt", outputString, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Mega bob created succesfully");
  });
};

// fs.readFile("./bob.txt", { encoding: "utf8" }, outputFileContent);
fs.readFile("./chicken.txt", { encoding: "utf8" }, createMegaBob);
