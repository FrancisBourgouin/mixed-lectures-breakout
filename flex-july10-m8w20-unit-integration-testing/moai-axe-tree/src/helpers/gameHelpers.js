const choices = ["🗿", "🪓", "🌳"];

export const pickOppositeChoice = (playerChoice) => {
  const choices = ["🌳", "🪓", "🗿", "🌳"];

  if (!choices.includes(playerChoice)) {
    throw new Error("PICK A VALID CHOICE YOU DUMDUM");
  }

  // const winningMatch = {
  //   "🗿": "🌳",
  //   "🌳": "🪓",
  //   "🪓": "🗿",
  // };

  // return winningMatch[playerChoice];

  const index = choices.indexOf(playerChoice) + 1;

  return choices[index];
};

export const pickRandomChoice = (seed) => {
  const index = Math.round(seed * 10 + (25 / 3) * 100000) % 3;
  const choices = ["🗿", "🪓", "🌳"];
  console.log(seed);
  return choices[index];
};

export const determineWinner = (playerChoice, computerChoice) => {
  const winningMatch = {
    "🗿": "🌳",
    "🌳": "🪓",
    "🪓": "🗿",
  };

  if (playerChoice === computerChoice) {
    return "tie";
  }

  if (winningMatch[playerChoice] === computerChoice) {
    return "computer";
  }

  return "player";
};

const multiplyScore = (score) => score * 2;

// Mocha & Chai
// Jest
