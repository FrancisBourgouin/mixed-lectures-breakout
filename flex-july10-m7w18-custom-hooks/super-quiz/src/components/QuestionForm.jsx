// Controlled Form
// Control input / output

import useForm from "../hooks/useForm";

export default function QuestionForm(props) {
  const { onSubmit } = props;
  const initialValues = { prompt: "", answer: "" };

  const [formData, handleChange, handleSubmit] = useForm(initialValues, onSubmit);

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="prompt"
        placeholder="Enter your prompt"
        onChange={handleChange}
        value={formData.prompt}
      />
      <input
        type="text"
        name="answer"
        placeholder="Enter your answer"
        onChange={handleChange}
        value={formData.answer}
      />
      <button>Add question!</button>
    </form>
  );
}
