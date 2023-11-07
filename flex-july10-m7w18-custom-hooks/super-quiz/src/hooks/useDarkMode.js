import { useState } from "react";

export default function useDarkMode() {
  const [mode, setMode] = useState("dark");

  const colors = {
    dark: {
      background: "#242424",
      color: "rgba(255, 255, 255, 0.87)",
    },
    light: {
      background: "#bada55",
      color: "#242424",
    },
  };

  const changeColors = (newMode) => {
    let root = document.documentElement;

    root.addEventListener("mousemove", (e) => {
      root.style.setProperty("--primary-background", colors[newMode].background);
      root.style.setProperty("--primary-text", colors[newMode].background);
    });
  };

  const toggleDarkMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    changeColors(newMode);
    setMode(newMode);
  };

  return { toggleDarkMode };
}
