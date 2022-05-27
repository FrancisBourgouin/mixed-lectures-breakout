import useForm from "../hooks/useForm";

export default function CityForm(props) {
  const baseFormData = { city: "" };
  const { formData, handleChange, handleSubmit } = useForm(baseFormData, props.onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Enter city name"
      />
      <button>Fetch Weather</button>
    </form>
  );
}
