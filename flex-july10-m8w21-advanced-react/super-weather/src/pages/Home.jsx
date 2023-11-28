import axios from "axios";
import { useEffect, useState } from "react";
import CityWeather from "../components/CityWeather";

export default function Home(props) {
  const { user, cities } = props;
  const [localWeather, setLocalWeather] = useState(null);

  useEffect(() => {
    if (user) {
      const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${user.location}&appid=${APIKEY}`;
      axios
        .get(url)
        .then((res) => res.data)
        .then((data) => setLocalWeather(data));
    }
  }, [user]);

  return (
    <div>
      {!user && (
        <>
          <h1>STRANGER DANGER!</h1>
          <h2>Please go to profile and fill your info</h2>
        </>
      )}
      {user && localWeather && (
        <>
          <h1>Hello {user.name}</h1>
          <h2>Current weather in {user.location}</h2>
          <h3>
            {localWeather.main.temp - 273}C, {localWeather.weather[0].description}
          </h3>
        </>
      )}

      {cities &&
        Object.values(cities).map((city) => <CityWeather key={city.name} {...city} />)}
    </div>
  );
}
