import { useState } from "react";

export default function Header(props) {
  const [number, setNumber] = useState(0);

  const { amount } = props;

  const increment = () => {
    setNumber(number + 1); // number 0
    setNumber(number + 1); // number 0
    setNumber(number + 1); // number 0
    setNumber(number + 1); // number 0
    setNumber(number + 1); // number 0
  };
  return (
    <header>
      <h1>Super Watering Plant Party!</h1>
      <h2>Saving {amount} plants from dehydration...</h2>

      <p>Current number is {number}</p>
      <button onClick={increment}>Add a number!</button>
    </header>
  );
}
