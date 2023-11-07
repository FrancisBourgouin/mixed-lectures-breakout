export default function Results(props) {
  const { score, totalAnswers } = props;
  return (
    <section className="Results">
      <h1>Current Score: {score}%</h1>
      <h2>Total Answered: {totalAnswers}</h2>
    </section>
  );
}
