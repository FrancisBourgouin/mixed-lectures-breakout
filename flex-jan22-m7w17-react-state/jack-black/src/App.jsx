import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

import { plantsObj } from "./data/plantData";
import { waterPlant, waterAllPlants, checkIfWellWatered } from "./helpers/plantHelpers";

function App() {
  const [plants, setPlants] = useState(plantsObj);

  const plantList = Object.values(plants);
  const amountOfDeadPlants = plantList.filter(
    (plant) => !checkIfWellWatered(plant.lastWatered, plant.wateringInterval)
  ).length;

  const waterThePlant = (plantId) => {
    const updatedPlants = waterPlant(plants, plantId);
    setPlants(updatedPlants);
  };
  
  const waterThePlantButBad = (plantId) => {
    // Create a spreaded copy of plants and the plant to change
    const updatedPlants = { ...plants };
    const updatedPlant = { ...plants[plantId] };

    // Generate a new date for the plant
    const newWateredDate = new Date().toLocaleDateString();

    // Assign the new value to the plant
    updatedPlant.lastWatered = newWateredDate;

    updatedPlants[plantId] = updatedPlant;

    setPlants(updatedPlants);
  };

  const waterAllThePlants = () => {
    const updatedPlants = waterAllPlants(plants);
    setPlants(updatedPlants);
  };

  return (
    <div className="App">
      <Header amountOfDeadPlants={amountOfDeadPlants} />
      <PlantList plants={plantList} waterThePlant={waterThePlant} />
      <button onClick={waterAllThePlants}>WATERWORLD TIME!</button>
    </div>
  );
}

export default App;
