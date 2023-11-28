import { UserContext } from "../App";
import { useContext } from "react";

export default function CityList(props) {
  const { cities, toggleCity } = props;
  const user = useContext(UserContext);

  console.log("User is:", user);

  const parsedCities = Object.values(cities).map((city) => (
    <li key={city.name}>
      <h1>
        {city.name} {user && user.location === city.name && "Hey you live there!"}
      </h1>
      <input
        type="checkbox"
        checked={city.isActive}
        onClick={() => toggleCity(city.name)}
      />
    </li>
  ));
  return <ul>{parsedCities}</ul>;
}
