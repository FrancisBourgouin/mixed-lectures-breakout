import useForm from "../hooks/useForm";

export default function RegisterForm(props) {
  const baseFormData = { firstName: "", lastName: "", email: "", password: "" };

  const { formData, handleChange, handleSubmit } = useForm(baseFormData, props.onSubmit);

  // const [firstName, setFirstName] = useState("")
  // const [firstName, setFirstName] = useState("")
  // const [firstName, setFirstName] = useState("")
  // const [firstName, setFirstName] = useState("")
  // const [firstName, setFirstName] = useState("")

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input type="text" name="email" onChange={handleChange} value={formData.email} />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      <button type="submit">Register</button>
    </form>
  );
}
