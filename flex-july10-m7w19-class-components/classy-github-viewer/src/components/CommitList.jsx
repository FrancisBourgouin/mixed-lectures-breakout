import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commits } = props;

  const parsedCommits = commits.map((commit) => (
    <CommitListItem key={commit.sha} {...commit} />
  ));
  return <ul>{parsedCommits}</ul>;
}
