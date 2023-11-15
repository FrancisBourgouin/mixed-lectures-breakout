import useForm from "../hooks/useForm";

export default function RepoForm(props) {
  const initialValues = { repo: "", owner: "" };
  const [formData, handleChange, handleSubmit] = useForm(initialValues, props.onSubmit);

  return (
    <form className="RepoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        placeholder="Enter the repo owner"
        value={formData.owner}
        onChange={handleChange}
      />
      <input
        type="text"
        name="repo"
        placeholder="Enter the repo name"
        value={formData.repo}
        onChange={handleChange}
      />
      <button>Fetch commits</button>
    </form>
  );
}
