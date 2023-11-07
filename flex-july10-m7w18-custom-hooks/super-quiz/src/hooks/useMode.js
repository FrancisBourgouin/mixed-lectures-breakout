import { useState } from "react";

export default function useMode(initialMode) {
  const [mode, setMode] = useState("QUIZ");

  const toggleMode = () => {
    setMode(mode === "QUIZ" ? "ADD" : "QUIZ");
  };

  return { mode, toggleMode };
}
