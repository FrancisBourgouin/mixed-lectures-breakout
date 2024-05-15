import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants, waterThePlant } = props;

  const parsedPlants = plants.map((plant) => (
    <PlantListItem
      key={plant.id}
      {...plant}
      waterThePlant={() => waterThePlant(plant.id)}
    />
  ));

  return (
    <main>
      <h1>List of plants</h1>
      <ul>{parsedPlants}</ul>
    </main>
  );
}
