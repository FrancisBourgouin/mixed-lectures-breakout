import { checkIfWellWatered } from "../helpers/dateHelpers";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval, handleClick, id } = props;

  const borderColor = checkIfWellWatered(lastWatered, wateringInterval) ? "green" : "red";
  const styling = { borderColor };
  return (
    <article style={styling} onClick={() => handleClick(id)}>
      <h1>
        {name} - {type}
      </h1>
      <h2>{lastWatered}</h2>
    </article>
  );
}
