import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commits } = props;

  const parsedCommits = Array.isArray(commits) && commits.map((commitInfo) => (
    <CommitListItem key={commitInfo.node_id} commitInfo={commitInfo} />
  ));

  return <ul>{parsedCommits}</ul>;
}
