import { useState } from "react";

export default function useForm(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    // const updatedFormData = {...formData}
    // updatedFormData[name] = value
    // setFormData(updatedFormData)

    // if (value.length < 30) {
    setFormData({ ...formData, [name]: value });
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);

    setFormData(initialValues);
  };

  return [formData, handleChange, handleSubmit];
}
