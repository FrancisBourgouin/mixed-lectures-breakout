import Header from "./components/Header";
import AnswerForm from "./components/AnswerForm";
import QuestionForm from "./components/QuestionForm";
import Score from "./components/Score";

import "./App.css";

import { questionArr } from "./data/mockQuestions";
import useQuiz from "./hooks/useQuiz";
import useQuizReducer from "./hooks/useQuizReducer";
import useMode from "./hooks/useMode";

function App() {
  // const { currentQuestion, gameStats, validateAnswer, createQuestion} = useQuiz(questionArr);

  const [state, dispatch] = useQuizReducer(questionArr);

  const [mode, toggleMode] = useMode("QUIZ");

  const createQuestion = (formData) =>
    dispatch({ type: "CREATE_QUESTION", payload: formData });

  const validateAnswer = formData => dispatch({ type: "UPDATE_GAME_STATS", payload: formData });

  return (
    <>
      <Header toggleMode={toggleMode} mode={mode} />
      <main>
        {mode === "QUIZ" && <AnswerForm {...state.currentQuestion} onSubmit={validateAnswer} />}
        {mode === "CREATE" && <QuestionForm onSubmit={createQuestion} />}
        <Score {...state} />
      </main>
    </>
  );
}

export default App;
