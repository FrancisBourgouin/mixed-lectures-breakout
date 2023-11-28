import axios from "axios";
import { useState, useEffect } from "react";

export default function CityWeather(props) {
  const { name, isActive } = props;
  const [localWeather, setLocalWeather] = useState(null);

  useEffect(() => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKEY}`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setLocalWeather(data));
  }, []);
  return (
    <div>
      {isActive && localWeather && (
        <h4>
          Current temp in {name}, {localWeather.main.temp - 273}C
        </h4>
      )}
      {!isActive && <h4>Not asking for the weather for {name} </h4>}
    </div>
  );
}
