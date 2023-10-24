import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plantList, updateWateredDate } = props;

  const parsedPlants = plantList.map((plant) => (
    <PlantListItem key={plant.id} {...plant} handleClick={updateWateredDate} />
  ));

  return (
    <section>
      <h1>Plants</h1>
      {parsedPlants}
      {/* <Plant
            id={plant2.id}
            type={plant2.type}
            name={plant2.name}
            lastWatered={plant2.lastWatered}
            wateringInterval={plant2.wateringInterval}
          />
          <Plant {...plant1} /> */}
    </section>
  );
}
