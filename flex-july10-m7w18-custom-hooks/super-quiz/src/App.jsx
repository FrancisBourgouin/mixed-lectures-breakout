import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import QuizForm from "./components/QuizForm";
import Results from "./components/Results";

import "./App.css";
import { questionsArr } from "./data/questionData";
import useQuiz from "./hooks/useQuiz";
import useMode from "./hooks/useMode";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const { mode, toggleMode } = useMode("QUIZ");
  const quiz = useQuiz(questionsArr);
  const { toggleDarkMode } = useDarkMode();

  return (
    <>
      <Header />
      <button onClick={toggleMode}>
        {mode === "QUIZ" ? "Add question" : "Answer questions"}
      </button>
      <button onClick={toggleDarkMode}>TOGGLE DARK MODE</button>
      <main>
        <Results score={quiz.score} totalAnswers={quiz.totalAnswers} />
        {mode === "QUIZ" && (
          <QuizForm onSubmit={quiz.validateAnswer} prompt={quiz.prompt} />
        )}
        {mode === "ADD" && <QuestionForm onSubmit={quiz.addQuestion} />}
      </main>
    </>
  );
}

export default App;
