import { useState } from "react";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";
import {
  pickOppositeChoice,
  pickRandomChoice,
  determineWinner,
} from "../helpers/gameHelpers";

export default function Game(props) {
  const [isComputerCheating, setIsComputerCheating] = useState(true);
  const [winner, setWinner] = useState(undefined);

  const toggleCheating = () => setIsComputerCheating(!isComputerCheating);

  const startRound = (playerChoice) => {
    // pickOppositeChoice(playerChoice)
    if (isComputerCheating) {
      return setTimeout(() => {
        setWinner("computer");
      }, 2000);
    }
    const computerChoice = pickRandomChoice(Math.random());

    const result = determineWinner(playerChoice, computerChoice);
    setTimeout(() => {
      setWinner(result);
    }, 2000);
  };

  return (
    <div>
      <main className="game">
        <Computer isCheating={isComputerCheating} toggleCheating={toggleCheating} />
        <Player startRound={startRound} />
      </main>
      <Result winner={winner} />
    </div>
  );
}
