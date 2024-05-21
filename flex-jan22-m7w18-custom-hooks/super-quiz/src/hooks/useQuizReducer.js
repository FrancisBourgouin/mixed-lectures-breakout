import useWow from "./useWow";

import { useReducer, useState } from "react";

export default function useQuizReducer(originalQuestions) {
  const initialState = {
    questions: originalQuestions,
    goodAnswers: 0,
    questionsAnswered: 0,
    currentQuestionIndex: 0,
    currentQuestion: state.questions[currentQuestionIndex]
  };

  
  // ACTIONS
  
  const quizReducerSwitch = (state, action) => {
    switch (action.type) {
      case "CREATE_QUESTION":
        const bob = ""
        // ...
        case "UPDATE_GOOD_ANSWER":
          // const bob =""
          // ...
          case "UPDATE_BAD_ANSWER":
            // ...
      default:
        throw new Error("BAD PERSON!");
      }
    };

  // action{type:"", payload:{}}
  
  const quizReducer = (state, action) => {
    const actions = {
      "CREATE_QUESTION": () => {
        const newQuestion = {
          id:state.questions.length + 1,
          // question:action.payload.question,
          // answer:action.payload.answer,
          ...action.payload
        }
        const updatedState = {...state}
        const updatedQuestions = [...state.questions, newQuestion]
        updatedState.questions = updatedQuestions
        
        return updatedState
      },
      "UPDATE_GAME_STATS": () => {
        const updatedState = {
          ...state,
          goodAnswers:action.payload.answer === state.currentQuestion.answer ? state.goodAnswers++ : state.goodAnswers,
          questionsAnswered:state.questionsAnswered++
        }
        
        return updatedState
        
      }
    }
    
    
    const updatedState = actions[action.type]()
    
    return updatedState
  }
  
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // dispatch({type:"CREATE_QUESTION", payload:{question:"What?", answer:"Yeah!"}})
  
  // dispatch({type:"UPDATE_GOOD_ANSWER"})
  
  // dispatch({type:"UPDATE_BAD_ANSWER"})
  
  // CREATE_QUESTION
  // UPDATE_GOOD_ANSWER
  // UPDATE_BAD_ANSWER

  return [state, dispatch];
}
