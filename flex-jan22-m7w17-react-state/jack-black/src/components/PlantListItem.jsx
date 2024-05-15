// {
//   "id": "3",
//   "type": "Blossoms are nice",
//   "name": "Cherry",
//   "lastWatered": "2024-01-01",
//   "wateringInterval": 60
// }

import { checkIfWellWatered } from "../helpers/plantHelpers";

export default function PlantListItem(props) {
  const { type, name, lastWatered, wateringInterval, waterThePlant, id } = props;

  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval)

  const style = {
    border:"1em solid white",
    borderColor:isWellWatered ? "green" : "red"
  }
  return (
    <li style={style}>
      <h1>{name} / {type}</h1>
      <p>Last watered on: {new Date(lastWatered).toLocaleDateString()}</p>
      <button onClick={waterThePlant}>Watered the plant!</button>
    </li>
  );
}
