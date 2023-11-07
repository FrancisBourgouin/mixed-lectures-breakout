import useForm from "../hooks/useForm";

export default function QuizForm(props) {
  const { onSubmit, prompt } = props;
  const initialValues = { answer: "" };

  const [formData, handleChange, handleSubmit] = useForm(initialValues, onSubmit);

  return (
    <form className="QuizForm" onSubmit={handleSubmit}>
      <p>{prompt}</p>
      <input
        type="text"
        name="answer"
        placeholder="Enter your answer"
        onChange={handleChange}
        value={formData.answer}
      />
      <button>Check answer!</button>
    </form>
  );
}
