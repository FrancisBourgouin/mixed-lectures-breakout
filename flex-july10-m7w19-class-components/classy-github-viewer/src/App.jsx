import { Component } from "react";
import "./App.css";
import CommitList from "./components/CommitList";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.initialState = {
      commits: [],
      owner: "",
      repo: "",
    };
    this.state = this.initialState;
  }

  fetchCommits = (formData) => {
    const { owner, repo } = formData;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        this.setState({ owner, repo, commits: data });
      })
      .catch((err) => {
        console.log(err);
        this.setState(this.initialState);
      });
  };

  report = (event) => {
    console.log("The user clicked on:", event.target);
  };

  componentDidMount() {
    document.addEventListener("click", this.report);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.report);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.owner !== prevState.owner || this.state.repo !== prevState.repo) {
      console.log("Fetched a new repo!", this.state.repo);
    }
  }

  // useEffect?
  // DANGEROUS COMPARISON!
  // WHY THE ***** USEFFECT DOESNT HAVE THE EMPTY ARRAY BEHAVIOR BY DEFAULT

  render() {
    return (
      <>
        <Header />
        <main>
          <RepoForm onSubmit={this.fetchCommits} />
          {this.state.commits.length > 0 && <CommitList commits={this.state.commits} />}
        </main>
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <RepoForm onSubmit={}/>
//         <CommitList />
//       </main>
//     </>
//   );
// }

// export default App;
