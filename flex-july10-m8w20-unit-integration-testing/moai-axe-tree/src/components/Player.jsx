export default function Player(props) {
  const { startRound } = props;
  return (
    <section className="player" data-testid="player">
      <span role="img" aria-label="player">
        👩‍💻
      </span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">
          <button
            type="button"
            value="Moai"
            data-testid="moai-statue"
            onClick={() => startRound("🗿")}
          >
            <span role="img" aria-label="moai">
              🗿
            </span>
          </button>
          <button
            type="button"
            value="Axe"
            data-testid="axe"
            onClick={() => startRound("🪓")}
          >
            <span role="img" aria-label="axe">
              🪓
            </span>
          </button>
          <button type="button" value="Tree" onClick={() => startRound("🌳")}>
            <span role="img" aria-label="tree">
              🌳
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
