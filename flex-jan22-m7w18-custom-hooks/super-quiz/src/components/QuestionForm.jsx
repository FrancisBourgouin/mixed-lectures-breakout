import useForm from "../hooks/useForm";

export default function QuestionForm(props) {
  const { onSubmit } = props;

  const initialValues = {
    question: "",
    answer: "",
  };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="question"
        value={formData.question}
        onChange={handleChange}
        placeholder="Enter the question"
      />
      <input
        type="text"
        name="answer"
        value={formData.answer}
        onChange={handleChange}
        placeholder="Enter the answer"
      />
      <button>Create!</button>
    </form>
  );
}
