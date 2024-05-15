export const waterPlant = (plants, plantId) => {
  // Create a spreaded copy of plants and the plant to change
  const updatedPlants = { ...plants };
  const updatedPlant = { ...plants[plantId] };

  // Generate a new date for the plant
  const newWateredDate = new Date().toLocaleDateString();

  // Assign the new value to the plant
  updatedPlant.lastWatered = newWateredDate;

  updatedPlants[plantId] = updatedPlant;

  return updatedPlants;
};

export const waterAllPlants = (plants) => {
  const updatedPlants = { ...plants };

  for (const key in updatedPlants) {
    const updatedPlant = { ...plants[key] };
    const newWateredDate = new Date().toLocaleDateString();

    updatedPlant.lastWatered = newWateredDate;
    updatedPlants[key] = updatedPlant;
  }

  return updatedPlants;
};

export const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const lastWateredDate = new Date(lastWatered)
  const todayDate = new Date()

  const diffInMs = todayDate.getTime() - lastWateredDate.getTime()
  const diffInS = diffInMs / 1000
  const diffInDays = diffInS / 86400

  return wateringInterval > diffInDays
}