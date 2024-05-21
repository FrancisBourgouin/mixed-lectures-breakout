import { useState } from "react";

export default function QuestionForm(props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <form className="QuestionForm">
      <input
        type="text"
        name="question"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
      />
      <input
        type="text"
        name="answer"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
      />
      <button>Create!</button>
    </form>
  );
}
