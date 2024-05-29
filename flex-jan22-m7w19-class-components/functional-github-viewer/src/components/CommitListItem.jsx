export default function CommitListItem(props) {
  const { commitInfo } = props;
  return (
    <li>
      <h1>
        {commitInfo.commit.author.date}:{" "}
        <a href={commitInfo.commit.url} target="_blank">
          {commitInfo.commit.message}
        </a>
      </h1>
      <h2>By: {commitInfo.author.login}</h2>
    </li>
  );
}
