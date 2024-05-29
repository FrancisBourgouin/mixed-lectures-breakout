import "./App.css";
import { Component } from "react";
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

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      commits: null,
      foundSpy:false
    };

    // this.updateCount = this.updateCount.bind(this)
  }

  updateCount = (isIncrement) => {
    const newValue = isIncrement ? this.state.count + 1 : this.state.count - 1;
    this.setState({ ...this.state, count: newValue });
  };

  fetchCommits = (formData) => {
    const { repo, owner } = formData;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ ...this.state, commits: res }))
      .catch((err) => console.log(err));
  };

  componentDidMount(){
    this.fetchCommits({repo:"mixed-lectures-breakout", owner:"FrancisBourgouin"})
  }

  render() {
    const handleClick = this.updateCount;

    return (
      <div className="App">
        <Header />
        {!this.state.foundSpy && <Spy />}
        <main>
          <RepoForm onSubmit={this.fetchCommits} />
          <section>
            {this.state.commits && <CommitList commits={this.state.commits} />}
          </section>
        </main>
      </div>
    );
  }
}
