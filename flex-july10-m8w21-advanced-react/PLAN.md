# Multi page weather app!

- A way to add cities
- A way to see the weather for the selected cities
- A user profile
- Darkmode toggle

# Data

## City

```jsx
const city = {
  id: "",
  name: "",
  isActive: true,
};
```

## Cities

```jsx
const cities = {
  montreal: {
    id: "montreal",
    name: "Montréal",
    isActive: true,
  },
};
```

## Weather Information

```jsx
const weatherData = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 501,
      main: "Rain",
      description: "moderate rain",
      icon: "10d",
    },
  ],
  base: "stations",
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  rain: {
    "1h": 3.16,
  },
  clouds: {
    all: 100,
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: "IT",
    sunrise: 1661834187,
    sunset: 1661882248,
  },
  timezone: 7200,
  id: 3163858,
  name: "Zocca",
  cod: 200,
};
```

## User Information

```jsx
const user = {
  username: "",
  name: "",
  location: "",
};
```

## Current visual mode (dark/blue)
