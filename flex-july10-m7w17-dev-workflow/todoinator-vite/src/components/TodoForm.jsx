import { useState } from "react";

// const [count, setCount] = useState(0)

// setCount(count + 1)
// setCount(count + 1)
// setCount(count + 1)
// setCount(count + 1)
// setCount(count + 1)
export default function TodoForm(props) {
  // const [task, setTask] = useState("")
  // const [dueDate, setTask] = useState("")
  // const [color, setTask] = useState("")
  const { onSubmit } = props;

  const initialValues = { task: "", dueDate: "", color: "" };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;

    const updatedFormData = { ...formData };

    // if (name === "task" && value.length < 40) {
    updatedFormData[name] = value;
    // }

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.color && formData.dueDate && formData.task) {
      onSubmit(formData);
      setFormData(initialValues);
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Enter the task"
        onChange={handleChange}
        value={formData.task}
      />
      <input
        type="date"
        name="dueDate"
        placeholder="Enter the date"
        onChange={handleChange}
        value={formData.dueDate}
      />
      <select name="color" onChange={handleChange} value={formData.color}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <button>Add todo!</button>
    </form>
  );
}
