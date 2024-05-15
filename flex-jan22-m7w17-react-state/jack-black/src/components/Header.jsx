import FancyTitle from "./FancyTitle";

export default function Header(props) {
  const { amountOfDeadPlants } = props;
  return (
    <header>
      <FancyTitle>
        <h1>Jack's Plants!</h1>
        {amountOfDeadPlants > 0 && <h2>There is currently {amountOfDeadPlants} plants in danger of dying</h2>}
        {amountOfDeadPlants === 0 && <h2>All the plants are happy!</h2>}
      </FancyTitle>
    </header>
  );
}
