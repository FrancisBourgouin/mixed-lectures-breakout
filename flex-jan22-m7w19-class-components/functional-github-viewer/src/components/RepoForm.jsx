import { useState } from "react";

export default function RepoForm(props){
  const {onSubmit} = props

  const initialValues = {
    repo:"",
    owner:"",
  }

  const [formData, setFormData] = useState(initialValues)

  const handleChange = (event) => {
    const { name, value } = event.target;

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);

    setFormData(initialValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        value={formData.owner}
        onChange={handleChange}
        placeholder="Enter the owner"
      />
      <input
        type="text"
        name="repo"
        value={formData.repo}
        onChange={handleChange}
        placeholder="Enter the repo"
      />
      <button>Fetch commits!</button>
    </form>
  );
}
