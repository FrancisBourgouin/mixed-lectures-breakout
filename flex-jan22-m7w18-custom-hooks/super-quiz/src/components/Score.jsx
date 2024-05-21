// {
//   "goodAnswers": 6,
//   "questionsAnswered": 7,
//   "currentQuestionIndex": 3
// }

export default function Score(props) {
  const { goodAnswers, questionsAnswered } = props;

  return (
    <>
      {!questionsAnswered && (
        <section className="Score">Please answer a question to see your score!</section>
      )}

      {!!questionsAnswered && (
        <section className="Score">
          <p>
            Your current score is {Math.round((goodAnswers / questionsAnswered) * 100)}%
          </p>
          <p>You answered {questionsAnswered} questions so far!</p>
        </section>
      )}
    </>
  );
}
