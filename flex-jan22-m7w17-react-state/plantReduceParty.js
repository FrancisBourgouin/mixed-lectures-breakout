const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const lastWateredDate = new Date(lastWatered);
  const todayDate = new Date();

  const diffInMs = todayDate.getTime() - lastWateredDate.getTime();
  const diffInS = diffInMs / 1000;
  const diffInDays = diffInS / 86400;

  return wateringInterval > diffInDays;
};

const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-12-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2023-12-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2024-01-01",
  wateringInterval: 1000,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2022-01-20",
  wateringInterval: 1000,
};

const plantsArr = [plant1, plant2, plant3, plant4];

const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };

// {
//   alive:[...]
//   dead:[...]
// }

const startingPoint = {
  alive: [],
  dead: [],
};

const result = plantsArr.reduce((accumulator, current, arr) => {
  if (checkIfWellWatered(current.lastWatered, current.wateringInterval)) {
    accumulator.alive.push(current);
  } else {
    accumulator.dead.push(current);
  }
  return accumulator;
}, startingPoint);

console.log(result)


// {
//   7:[...],
//   4:[...],
//   60:[...],
//   1000:[...]
// }


const result2 = plantsArr.reduce((acc, current) => {
  if(acc[current.wateringInterval]){
    acc[current.wateringInterval].push(current)
  } else {
    acc[current.wateringInterval] = [current]
  }

  return acc
}, {})

console.log(result2)