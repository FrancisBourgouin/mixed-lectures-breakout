import useForm from "../hooks/useForm";

export default function AnswerForm(props) {
  const { onSubmit, question } = props;

  const initialValues = {
    answer: "",
  };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <form className="AnswerForm" onSubmit={handleSubmit}>
      <p>{question}</p>
      <input type="text" name="answer" value={formData.answer} onChange={handleChange} placeholder="Enter your answer..."/>
      <button>Answer!</button>
    </form>
  );
}
