import { useState } from "react";

export default function useCities() {
  const [cities, setCities] = useState({});

  const addCity = (cityName) => {
    const newCityObject = {
      name: cityName,
      isActive: true,
    };

    setCities({ ...cities, [cityName]: newCityObject });
  };

  const toggleCity = (cityName) => {
    const updatedCityObject = { ...cities[cityName] };
    updatedCityObject.isActive = !updatedCityObject.isActive;

    setCities({ ...cities, [cityName]: updatedCityObject });
  };

  return { cities, addCity, toggleCity };
}
