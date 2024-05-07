// P: name, type, id, lastWatered, wateringInterval

import { checkIfWellWatered } from "../helpers/plantHelpers";

export default function PlantListItem(props) {
  const isWellWatered = checkIfWellWatered(props.lastWatered, props.wateringInterval)

  let color = "#7C0101";
  if (isWellWatered) {
    color = "#034300";
  }
  const styleProps = { backgroundColor: color };
  return (
    <li style={styleProps}>
      <h1>{props.name} / {props.type}</h1>
      <p>Last Watered on: {props.lastWatered}</p>
    </li>
  );
}
