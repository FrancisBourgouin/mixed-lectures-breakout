import { useState } from "react";

export default function useForm(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);

    setFormData(initialValues);
  };

  return { formData, handleChange, handleSubmit };
}


// Fancy helper function that only works in React!
// Custom Hooks


// Limit the repetition between projects/components
// Enhance readability
// Separation of concern between data & rendering