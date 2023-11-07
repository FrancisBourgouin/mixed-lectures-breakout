import useWow from "./useWow";
import { useState } from "react";

export default function useQuiz(initialQuestions) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [gameStats, setGameStats] = useState({
    currentIndex: 0,
    correctAnswers: 0,
    totalAnswers: 0,
  });
  const { sayWow } = useWow();

  const currentQuestion = questions[gameStats.currentIndex];
  const score = gameStats.totalAnswers
    ? Math.round((gameStats.correctAnswers / gameStats.totalAnswers) * 100)
    : 0;

  const addQuestion = (formData) => {
    const { prompt, answer } = formData;

    const newQuestion = {
      id: questions.length + 1,
      prompt,
      answer,
    };

    setQuestions([...questions, newQuestion]);
  };
  const validateAnswer = (formData) => {
    const { answer } = formData;
    const updatedGameStats = { ...gameStats };

    updatedGameStats.currentIndex =
      (updatedGameStats.currentIndex + 1) % questions.length;
    updatedGameStats.totalAnswers++;

    if (answer === currentQuestion.answer) {
      updatedGameStats.correctAnswers++;
      sayWow();
    }

    setGameStats(updatedGameStats);
  };

  return {
    prompt: currentQuestion.prompt,
    score,
    totalAnswers: gameStats.totalAnswers,
    validateAnswer,
    addQuestion,
  };

  // return {
  //   quizValues:{prompt, score, totalAnswers},
  //   quizActions:{validateAnswer, addQuestion}
  // }
}
