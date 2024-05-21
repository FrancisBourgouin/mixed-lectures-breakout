import { useState } from "react";


export default function useMode(initialMode){
  const [mode, setMode] = useState(initialMode) // QUIZ || CREATE

  const toggleMode = () => setMode(mode === "QUIZ" ? "CREATE" : "QUIZ")


  return [mode, toggleMode]

}