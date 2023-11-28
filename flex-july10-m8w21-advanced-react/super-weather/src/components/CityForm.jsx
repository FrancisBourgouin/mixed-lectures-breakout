import { useState } from "react";

export default function CityForm(props) {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(city);

    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Enter a city name"
        value={city}
        onChange={handleChange}
      />
      <button>Add city to the list</button>
    </form>
  );
}
