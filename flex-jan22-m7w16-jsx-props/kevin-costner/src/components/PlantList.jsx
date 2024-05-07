import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const plants = props.plants;

  // const bunchOfPlants = [
  //   <PlantListItem />,
  //   <PlantListItem />,
  //   <PlantListItem />,
  //   <PlantListItem />
  // ]

  // const parsedPlants = [];

  // for (const plant of plants) {
  //   const parsedPlant = (
  //     <PlantListItem
  //       key={plant.id}
  //       name={plant.name}
  //       type={plant.type}
  //       lastWatered={plant.lastWatered}
  //       wateringInterval={plant.wateringInterval}
  //     />
  //   );

  //   parsedPlants.push(parsedPlant);
  // }

  const parsedPlantsAgain = Array.isArray(plants) && plants.map(plant => <PlantListItem key={plant.id} {...plant}/>)

  return (
    <main>
      <h1>Plants!</h1>
      <ul>{parsedPlantsAgain}</ul>
    </main>
  );
}
