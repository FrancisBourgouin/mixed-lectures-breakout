import "./App.css";

import Header from "./components/Header";
import CommitList from "./components/CommitList";
import RepoForm from "./components/RepoForm";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const initialState = { commits: [], owner: "", repo: "" };
  const [state, setState] = useState(initialState);

  // const [commits, setCommits] = useState([])
  // const [owner, setOwner] = useState("")
  // const [repo, setRepo] = useState("")

  const fetchCommits = (formData) => {
    const { owner, repo } = formData;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setState({ owner, repo, commits: data });
      })
      .catch((err) => {
        console.log(err);
        setState(initialState);
      });
  };

  // componentDidMount => useEffect(() => {},[]) (tree === arbre)

  // useEffect(() => {
  //   const report = (event) => {
  //     state.repo && console.log("Current clicking while being on this repo:", state.repo);
  //     console.log("The user clicked at position:", event.clientX, event.clientY);
  //   };

  //   document.addEventListener("click", report);
  // }, [state]);

  useEffect(() => {
    const report = (event) => {
      state.repo && console.log("Current clicking while being on this repo:", state.repo);
      console.log("The user clicked at position:", event.clientX, event.clientY);
    };

    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  });

  return (
    <>
      <Header />
      <main>
        <RepoForm onSubmit={fetchCommits} />
        {state.commits.length > 0 && <CommitList commits={state.commits} />}
      </main>
    </>
  );
}

export default App;
