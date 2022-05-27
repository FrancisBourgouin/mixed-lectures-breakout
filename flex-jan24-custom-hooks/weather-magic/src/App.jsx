import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CityForm from "./components/CityForm";
import CurrentWeather from "./components/CurrentWeather";
import useOpenWeatherData from "./hooks/useOpenWeatherData";

function App() {
  const { prettyData, updateCity } = useOpenWeatherData();

  return (
    <div className="App">
      <Header />
      <CityForm onSubmit={updateCity} />
      {prettyData.city && <CurrentWeather {...prettyData} />}
    </div>
  );
}

export default App;
