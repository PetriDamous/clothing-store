import React, { Component } from "react";

import FormInput from "../form-input/FormInput";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            value={this.state.email}
            type="email"
            id="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            label="Password"
            name="password"
            value={this.state.password}
            type="password"
            id="password"
            handleChange={this.handleChange}
            required
          />
          <button>Sign in</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
