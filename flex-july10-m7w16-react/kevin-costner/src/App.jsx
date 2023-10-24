// CommonJS Syntax
// const ... = require("...")
// module.exports = ""

// ES Syntax

// Props => Properties, CSS Classes, Compliments
import { useState } from "react";
import "./App.css";
import { plantsObj } from "./data/plantData";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

function App() {
  const [plants, setPlants] = useState(plantsObj);

  const plantList = Object.values(plants);

  const updateWateredDate = (plantId) => {
    const todayDate = new Date();

    const updatedPlant = { ...plants[plantId] };
    updatedPlant.lastWatered = todayDate.toLocaleDateString();

    const updatedPlants = { ...plants };
    updatedPlants[plantId] = updatedPlant;

    setPlants(updatedPlants);
  };

  const waterEverything = () => {
    const todayDate = new Date();
    const updatedPlants = { ...plants };

    for (const plant of plantList) {
      const updatedPlant = { ...plant };
      updatedPlant.lastWatered = todayDate.toLocaleDateString();

      updatedPlants[plant.id] = updatedPlant;
    }

    setPlants(updatedPlants);
  };

  return (
    <div className="App">
      <Header amount={plantList.length} />
      <main>
        <button onClick={waterEverything}>WATER ALL THE PLANTS!</button>
        <PlantList plantList={plantList} updateWateredDate={updateWateredDate} />
      </main>
    </div>
  );
}

export default App;
