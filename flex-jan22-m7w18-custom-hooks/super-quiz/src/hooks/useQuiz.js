import useWow from "./useWow";

import { useState } from "react";

export default function useQuiz(originalQuestions) {
  const [questions, setQuestions] = useState(originalQuestions);
  const [gameStats, setGameStats] = useState({
    goodAnswers: 0,
    questionsAnswered: 0,
    currentQuestionIndex: 0,
  });

  const currentQuestion = questions[gameStats.currentQuestionIndex];
  const { sayWow } = useWow();

  const generateRandomQuestionIndex = () => Math.floor(Math.random() * questions.length);

  const validateAnswer = (formData) => {
    const updatedGameStats = { ...gameStats };

    updatedGameStats.questionsAnswered++;

    if (formData.answer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      updatedGameStats.goodAnswers++;
    }

    updatedGameStats.currentQuestionIndex = generateRandomQuestionIndex();

    setGameStats(updatedGameStats);
  };

  const createQuestion = formData => {
    const newQuestion = {
      id:questions.length + 1,
      question:formData.question,
      answer:formData.answer
    }

    setQuestions([...questions, newQuestion])
    sayWow()
  }

  return { currentQuestion, validateAnswer, gameStats, createQuestion };
}
