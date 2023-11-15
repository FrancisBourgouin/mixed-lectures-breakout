// Need a state, need to convert to a class component
// No need for lifecycle methods

import React from "react";

// export default function RepoForm(props) {
//   return (
//     <form className="RepoForm">
//       <input type="text" />
//       <input type="text" />
//       <button>Fetch commits</button>
//     </form>
//   );
// }

const someObject = {
  name: "Bob",
  greet: function () {
    this.name;
  },
  greetBad: () => {
    this.name;
  },
};

// someObject.greetBad()

export default class RepoForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = { owner: "", repo: "" };
    this.state = this.initialState;

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    const newState = { ...this.state, [name]: value };

    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <form className="RepoForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          placeholder="Enter the repo owner"
          value={this.state.owner}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="repo"
          placeholder="Enter the repo name"
          value={this.state.repo}
          onChange={this.handleChange}
        />
        <button>Fetch commits</button>
      </form>
    );
  }
}
