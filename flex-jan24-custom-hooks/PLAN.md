# Weather Magic

## Description

Enter a city name in the form, we get to see the temperature / condition / cityname under the form.

## Data Structures

### City

```jsx
const city = "";
```

### Weather Data

- city can be extracted from `weatherData.name`
- temperature can be extracted from `weatherData.main.temp` (need to convert K to C)
- conditions can be extracted from `weatherData.weather[0].description`

```jsx
const weatherData = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};
```

## Helpers

- prettyWeatherData (return an object with city, temperature, condition)

## HTML Structure

- body
  - header
    - h1 (title)
  - main
    - form
      - input (city)
      - button (submit)
    - section
      - h1 name of city
      - h2 (temp & condition)

## Component Structure

- App (weather state / currentcity state)
  - Header (no props / no state)
  - CityForm (app currentcity change state props / form state (city))
  - CurrentWeather (pretty weather data as props / no state)
