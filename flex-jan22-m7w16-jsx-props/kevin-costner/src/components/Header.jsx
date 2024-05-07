export default function Header(props) {
  console.log(props.amountOfPlants)

  return (
    <header>
      <h1>Kevin's Watering World!</h1>
      {props.amountOfPlants === 0 && <h2>Saving no plants from dehydration</h2>}
      {props.amountOfPlants === 1 && <h2>Saving a plant from dehydration</h2>}
      {props.amountOfPlants > 1 && <h2>Saving {props.amountOfPlants} plants from dehydration</h2>}
    </header>
  );
}
