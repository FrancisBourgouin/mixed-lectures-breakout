export default function Result(props) {
  const { winner } = props;
  return (
    <footer>
      {!winner && <h2>Waiting for your choice!</h2>}
      {winner === "computer" && <h2>THIS IS NOT WAR... THIS IS PEST CONTROL!</h2>}
      {winner === "player" && <h2>Know your place, son</h2>}
      {winner === "tie" && <h2>Windsor ?</h2>}
    </footer>
  );
}
