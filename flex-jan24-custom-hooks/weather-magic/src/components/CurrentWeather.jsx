export default function CurrentWeather(props) {
  const { city, condition, temperature } = props;
  return (
    <section>
      <h1>Conditions for {city}</h1>
      <h2>
        {temperature}°C with {condition}
      </h2>
    </section>
  );
}
