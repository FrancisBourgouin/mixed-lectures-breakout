import { useEffect, useState } from "react";
import axios from "axios";

// 09fd719b4b698ec0260e424f83378e3d
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function useOpenWeatherData() {
  const [currentCity, setCurrentCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  useEffect(() => {
    if (currentCity) {
      fetchWeatherData();
    }
  }, [currentCity]);

  const fetchWeatherData = () => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${APIKEY}`;
    axios
      .get(url)
      .then((res) => setCurrentWeatherData(res.data))
      .catch(() => setCurrentWeatherData(null));
  };

  const updateCity = (formData) => setCurrentCity(formData.city);

  const prettifyWeatherData = () => {
    if (currentWeatherData) {
      const prettyData = {};
      prettyData.city = currentWeatherData.name;
      prettyData.temperature = Math.round(currentWeatherData.main.temp - 273.15);
      prettyData.condition = currentWeatherData.weather[0].description;

      return prettyData;
    }
    return {};
  };

  const prettyData = prettifyWeatherData();

  return { prettyData, updateCity };
}
