import { useState } from "react";

export default function useForm(baseData, action) {
  const [formData, setFormData] = useState(baseData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // setFormData({ ...formData, [name]: value });

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    action(formData);
    setFormData(baseFormData);
  };

  return { formData, handleChange, handleSubmit };
}
