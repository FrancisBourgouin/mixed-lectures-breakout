import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
  const initialValues = { username: "", name: "", location: "" };
  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);

    setFormData(initialValues);

    navigate("/");
  };

  return (
    <div>
      <h1>I am Profile!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Enter your location"
          value={formData.location}
          onChange={handleChange}
        />
        <button>Save info</button>
      </form>
    </div>
  );
}
