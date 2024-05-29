import "./App.css";
import { Component, useEffect, useState } from "react";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import CommitList from "./components/CommitList";
import Spy from "./components/Spy";

// React Class
// Manage props
// What to do on load
// What to do on changes
// What to do when unmounted
// What to show

export default function App(){
  const [state, setState] = useState({
    commits:null,
    foundSpy:false
  })

  const fetchCommits = (formData) => {
    const { repo, owner } = formData;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => setState({ ...state, commits: res }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Since we have an async return value, wrap it inside useEffect with an empty dep so it doesn't re-run
    fetchCommits({repo:"mixed-lectures-breakout", owner:"FrancisBourgouin"})
  }, [])

  return (
    <div className="App">
      <Header />
      {!state.foundSpy && <Spy />}
      <main>
        <RepoForm onSubmit={fetchCommits} />
        <section>
          {state.commits && <CommitList commits={state.commits} />}
        </section>
      </main>
    </div>
  );

}

