import { useState } from "react";
import CityForm from "../components/CityForm";
import CityList from "../components/CityList";

export default function Cities(props) {
  const { cities, addCity, toggleCity } = props;

  return (
    <div>
      <h1>Cities to search weather for!</h1>
      <CityForm onSubmit={addCity} />
      <CityList cities={cities} toggleCity={toggleCity} />
    </div>
  );
}
