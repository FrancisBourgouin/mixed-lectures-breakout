export default function Header(props) {
  const { mode, toggleMode } = props;

  const text = mode === "QUIZ" ? "Create mode" : "Quiz mode";

  return (
    <header className="Header">
      <h1>Super Quiz of Destiny!</h1>
      <button onClick={toggleMode}>{text}</button>
    </header>
  );
}
