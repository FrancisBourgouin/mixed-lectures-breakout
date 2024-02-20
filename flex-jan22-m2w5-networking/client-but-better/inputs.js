const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sendText = () => {
  // ...
};

const someObj = { name: "Bob", age: 9001 };

module.exports = { terminal: rl, sendText, b: someObj.name };
