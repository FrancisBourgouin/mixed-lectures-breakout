# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry. Update the watering date when we click on a water button.

## Data

## Plant

```js
const plant = {
  name: "",
  type: "",
  lastWateredDate: "2023-09-04",
  wateringInterval: 5,
};
```

## Plants

```js
const plants = [plant, plant];

const plantsObj = { 1: plant, 2: plant };
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-09-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2023-10-01",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2023-03-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2021-01-20",
  wateringInterval: 1000,
};

const plantsArr = [plant1, plant2, plant3, plant4];
const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

## Structure

### HTML

- header
  - h1
  - h2 Saving X plants from dehydration
- section
  - h1
  - article
    - h1 name / type
    - h2 last watered date
    - border green/red if well watered

### Components

- App
  - Header
  - PlantList
    - PlantListItem

### Component Data

- App (plants[])
  - Header (amountOfPlants)
  - PlantList (plants[])
    - PlantListItem (name, type, lastwatered, wateringinterval)
