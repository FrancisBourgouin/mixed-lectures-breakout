// STDIN => Standard input
// STDOUT => Standard output

// console.log()

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.on("line", (line) => console.log("Line is:", line));

const timeoutId = setTimeout(() => {
  console.log("Too slow!");
  rl.close();
}, 4000);

rl.question("What does the fox say?\n", (answer) => {
  console.log("You answered:", answer);
  rl.close();
  clearTimeout(timeoutId);
});
