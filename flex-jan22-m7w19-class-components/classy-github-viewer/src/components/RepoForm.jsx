import { Component } from "react";

export default class RepoForm extends Component {
  constructor(props) {
    super(props);

    this.initialValues = {
      repo: "",
      owner: "",
    };

    this.state = this.initialValues;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    const updatedState = { ...this.state };
    updatedState[name] = value;

    this.setState(updatedState);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState(this.initialValues);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          value={this.state.owner}
          onChange={this.handleChange}
          placeholder="Enter the owner"
        />
        <input
          type="text"
          name="repo"
          value={this.state.repo}
          onChange={this.handleChange}
          placeholder="Enter the repo"
        />
        <button>Fetch commits!</button>
      </form>
    );
  }
}
