console.log("You have 10 seconds to answer this existential question.");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const status = {
//   chicken: "happy",
//   bob: "happy",
// };

const timeoutId = setTimeout(() => {
  // If we take too long, chickens & bob will be mad
  rl.close();
  terminalInvasion({ chicken: "mad", bob: "mad" });
}, 10 * 1000);

rl.question("What do you prefer, chickens or bobs ?\n", (answer) => {
  const status = {
    chicken: "happy",
    bob: "happy",
  };

  if (answer !== "chicken") {
    status.chicken = "mad";
  }
  // If chicken, both bob and chicken are happy
  // If bob, chickens are mad and will invade our terminal
  rl.close();
  clearInterval(timeoutId);
  terminalInvasion(status);
});

const terminalInvasion = (status) => {
  let output = "";
  if (status.chicken === "mad") {
    output += "🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔";
  }
  if (status.bob === "mad") {
    output += "🙍🙍🙍🙍🙍🙍🙍🙍🙍🙍🙍🙍🙍🙍🙍🙍🙍";
  }

  if (status.bob === "happy" && status.chicken === "happy") {
    return console.log("PARTAY !");
  }

  setInterval(() => {
    console.log(output);
  }, 500);
};
